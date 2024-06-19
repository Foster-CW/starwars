import React, { useState, useEffect } from 'react';
import FilterNavigation from './components/FilterNavigation';
import CharacterList from './components/CharacterList';
import Header from './components/Header';
import '../src/styles/test.css';
import starWarsLogo from './starwarsName.png';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [visibleCharacters, setVisibleCharacters] = useState(8); // Controla quantos personagens são visíveis
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Fetch characters
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setFilteredCharacters(data.results);
      });

    // Fetch planets
    fetch('https://swapi.dev/api/planets/')
      .then(response => response.json())
      .then(data => setPlanets(data.results));
  }, []);

  useEffect(() => {
    // Show content after 8 seconds
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 8000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  const filterCharactersByPlanet = (planetUrl) => {
    if (planetUrl === "all") {
      setFilteredCharacters(characters);
    } else {
      const filtered = characters.filter(character => character.homeworld === planetUrl);
      setFilteredCharacters(filtered);
    }
    setVisibleCharacters(8); // Resetar a quantidade de personagens visíveis ao filtrar
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
          <p>Um monte de frase aleatoria que ainda tenho que pensar pra dar um preview do projeto</p>
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
