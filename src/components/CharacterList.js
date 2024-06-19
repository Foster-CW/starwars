import React from 'react';
import CharacterItem from './CharacterItem';

const CharacterList = ({ characters }) => {
  return (
    <section className='characters'>
      {characters.map(character => (
        <CharacterItem key={character.name} character={character} />
      ))}
    </section>
  );
};

export default CharacterList;
