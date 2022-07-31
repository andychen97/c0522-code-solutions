
import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const images = [{ image: '../images/001.png' }, { image: '../images/004.png' }, { image: '../images/007.png' },
  { image: '../images/025.png' }, { image: '../images/039.png' }];

root.render(<Carousel images={images}/>);
