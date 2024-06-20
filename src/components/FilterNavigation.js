import React from 'react';
import '../styles/FilterNavigation.css';

const FilterNavigation = ({ planets, filterCharactersByPlanet }) => {
  return (
    <nav className='filter'>
      Filter By : 
      <select onChange={(e) => filterCharactersByPlanet(e.target.value)}>
        <option value="all">All</option>
        {planets.map(planet => (
          <option key={planet.url} value={planet.url}>
            {planet.name}
          </option>
        ))}
      </select>
    </nav>
  );
};

export default FilterNavigation;
