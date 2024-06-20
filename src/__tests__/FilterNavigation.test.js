import React, { act }  from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterNavigation from '../components/FilterNavigation';

jest.setTimeout(15000);

const planets = [
  { name: 'Tatooine', url: 'https://swapi.dev/api/planets/1/' },
  { name: 'Alderaan', url: 'https://swapi.dev/api/planets/2/' }
];

describe('FilterNavigation', () => {
  test('renders planets in select', async () => {
    await act(async () => {
      render(<FilterNavigation planets={planets} filterCharactersByPlanet={jest.fn()} />);
    });

    await new Promise(resolve => setTimeout(resolve, 10000));

    expect(screen.getByText('Tatooine')).toBeInTheDocument();
  });

  test('calls filterCharactersByPlanet on change', async () => {
    const filterCharactersByPlanet = jest.fn();
    await act(async () => {
      render(<FilterNavigation planets={planets} filterCharactersByPlanet={filterCharactersByPlanet} />);
    });

    await new Promise(resolve => setTimeout(resolve, 10000));

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'https://swapi.dev/api/planets/1/' } });

    expect(filterCharactersByPlanet).toHaveBeenCalledWith('https://swapi.dev/api/planets/1/');
  });
});
