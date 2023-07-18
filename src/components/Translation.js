import React, { useContext } from 'react';
import { LayoutContext } from './Layout';
import '../style.css';

const Translation = () => {
  const { translation } = useContext(LayoutContext);

  return (
    <div className="translation__container">{translation && (<>Translation: <strong>{translation}</strong></>)}</div>
  );
};

export default Translation;
