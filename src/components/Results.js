import React, { useContext } from 'react';
import { LayoutContext } from './SearchLayout';
import '../style.css';

const Translation = () => {
  const { imageResults: { googleResults, baiduResults } } = useContext(LayoutContext);

  return (
    <div className="results__container">
      <div className="results__image_container">
        <div className="results__logo_container">
          <img className="results__logo_image" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
        </div>
        {googleResults?.map(src => <img src={src} className="results__image" key={src} />)}
      </div>
      <hr/>
      <div className="results__image_container">
        <div className="results__logo_container">
          <img className="results__logo_image" src="https://logos-download.com/wp-content/uploads/2016/08/Baidu_logo.png" />
        </div>
        {baiduResults?.map(src => <img src={src} className="results__image" key={src} />)}
      </div>
    </div>
  );
};

export default Translation;
