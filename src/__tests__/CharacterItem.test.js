import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import CharacterList from '../components/CharacterList';

jest.setTimeout(15000);

const characters = [
  { name: 'Luke Skywalker', homeworld: 'https://swapi.dev/api/planets/1/', height: '172', mass: '77', gender: 'male' },
  { name: 'Darth Vader', homeworld: 'https://swapi.dev/api/planets/1/', height: '202', mass: '136', gender: 'male' }
];

describe('CharacterList', () => {
  test('renders character items', async () => {
    await act(async () => {
      render(<CharacterList characters={characters} />);
    });

    await new Promise(resolve => setTimeout(resolve, 10000));

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Darth Vader')).toBeInTheDocument();
  });
});
