import React, { useState } from 'react';

import pikaImage from '../assets/pika.webp'; // 이미지 파일 impor

const CardComponent = () => {
  const [style, setStyle] = useState({
    containerTransform: '',
    overlayBackgroundPosition: '',
    overlayFilter: 'filter: opacity(0)'
  });

  const handleMouseMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const rotateY = (-1 / 5) * offsetX + 20;
    const rotateX = (4 / 30) * offsetY - 20;

    setStyle({
      containerTransform: `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      overlayBackgroundPosition: `background-position: ${offsetX / 5 + offsetY / 5}%;`,
    });
  };

  const handleMouseOut = () => {
    setStyle({
      containerTransform: 'perspective(350px) rotateY(0deg) rotateX(0deg)',
      overlayBackgroundPosition: '',
    });
  };

  return (
    <>
    <div
      className="container"
      style={{ transform: style.containerTransform }}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
    >
      
    <div
  style={{
    width: '220px',
    height: '310px',
    backgroundImage:  `url(${pikaImage})`,
    backgroundSize: 'cover'
  }}></div>
    </div>
    </>
    
  );
};

export default CardComponent;

// className='w-220 h-310 bg-[url(${pikaImage}) bg-cover]'
// .card {
    // width: 220px; height: 310px;
    // background-image: url(pika.webp);
    // background-size: cover;
//   }