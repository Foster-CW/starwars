import React, { useState, useEffect } from 'react';
import FilterNavigation from './components/FilterNavigation';
import CharacterList from './components/CharacterList';
import Header from './components/Header';
import './styles/App.css';
import starWarsLogo from './starwarsName.png';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [visibleCharacters, setVisibleCharacters] = useState(8);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const fetchAllCharacters = async () => {
      let allCharacters = [];
      let url = 'https://swapi.dev/api/people/';
      while (url) {
        const response = await fetch(url);
        const data = await response.json();
        allCharacters = [...allCharacters, ...data.results];
        url = data.next;
      }
      setCharacters(allCharacters);
      setFilteredCharacters(allCharacters);
    };

    fetchAllCharacters().catch(error => console.error('Error fetching characters:', error));

    const fetchAllPlanets = async () => {
      let allPlanets = [];
      let url = 'https://swapi.dev/api/planets/';
      while (url) {
        const response = await fetch(url);
        const data = await response.json();
        allPlanets = [...allPlanets, ...data.results];
        url = data.next;
      }
      setPlanets(allPlanets);
    };

    fetchAllPlanets().catch(error => console.error('Error fetching planets:', error));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const filterCharactersByPlanet = (planetUrl) => {
    if (planetUrl === "all") {
      setFilteredCharacters(characters);
    } else {
      const filtered = characters.filter(character => character.homeworld === planetUrl);
      setFilteredCharacters(filtered);
    }
    setVisibleCharacters(8);
  };

  const loadMoreCharacters = () => {
    setVisibleCharacters(prevVisibleCharacters => prevVisibleCharacters + 8);
  };

  return (
    <div>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <Header />
      {showContent && (
        <main className='home'>
          <header>
            <img className='logo' src={starWarsLogo} alt="StarwarsLogo" />
            <p>Filtre personagens com base em seu planeta de origem</p>
          </header>
          <FilterNavigation planets={planets} filterCharactersByPlanet={filterCharactersByPlanet} />
          <CharacterList characters={filteredCharacters.slice(0, visibleCharacters)} />
          {visibleCharacters < filteredCharacters.length && (
            <button onClick={loadMoreCharacters}>Load More</button>
          )}
        </main>
      )}
    </div>
  );
};

export default App;
