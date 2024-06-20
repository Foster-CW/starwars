import React, { useState, useEffect } from 'react';
import '../styles/CharacterList.css';
import luke_skywalker from '../imgs/Luke-Skywalker.jpg';
import darth_vader from '../imgs/DarthVader.jpg';
import c3po from '../imgs/c3po.jpg';
import r2d2 from '../imgs/R2-D2.jpg';
import leia_organa from '../imgs/Leia_Organa.png';
import owen_lars from '../imgs/owen_lars.jpg';
import beru_whitesun_lars from '../imgs/beru_whitesun_lars.jpg';
import r5d4 from '../imgs/r5-d4.jpg';
import biggs_darklighter from '../imgs/biggs_darklighter.jpg';
import Wan_kenobi from '../imgs/obi-Wan_kenobi.jpg';

const images = {
  'luke_skywalker': luke_skywalker,
  'darth_vader': darth_vader,
  'c-3po': c3po,
  'r2-d2': r2d2,
  'leia_organa': leia_organa,
  'owen_lars': owen_lars,
  'beru_whitesun_lars': beru_whitesun_lars,
  'r5-d4': r5d4,
  'biggs_darklighter': biggs_darklighter,
  'obi-wan_kenobi': Wan_kenobi,
};

const CharacterItem = ({ character }) => {
  const [homeworld, setHomeworld] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch(character.homeworld)
      .then(response => response.json())
      .then(data => setHomeworld(data.name));

    const characterName = character.name.toLowerCase().replace(/ /g, '_');
    setImageUrl(images[characterName]);
  }, [character.homeworld, character.name]);

  return (
    <div className='character-info'>
      {imageUrl ? (
        <img src={imageUrl} alt={character.name} width="400" height="200" />
      ) : (
        <div style={{ width: 200, height: 300, backgroundColor: '#ccc' }}>Image not found</div>
      )}
      <div className="character-details">
        <h2>{character.name}</h2>
        <h3>{homeworld}</h3>
        <p>Height: {character.height} cm</p>
        <p>Mass: {character.mass} kg</p>
        <p>Gender: {character.gender}</p>
      </div>
    </div>
  );
};

export default CharacterItem;
