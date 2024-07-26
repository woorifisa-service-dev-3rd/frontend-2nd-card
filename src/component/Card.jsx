import React, { useState } from 'react';

// import pikaImage from '../assets/pika.webp'; // 이미지 파일 impor

const CardComponent = ({image,width,height}) => {
  const [style, setStyle] = useState({
    containerTransform: '',
    overlayBackgroundPosition: '',
  });

  console.log(image);

  const setwidth= `${width}px`;
  const setheight=`${height}px`;

  const handleMouseMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    // 요소의 중앙 좌표
    const centerX = width / 2;
    const centerY = height / 2;

    // 마우스 포인터의 상대 좌표
    const relativeX = (offsetX - centerX) / centerX;
    const relativeY = (offsetY - centerY) / centerY;

    // 회전 계산
    const rotateY = -20 * relativeX; // 회전 강도 조정
    const rotateX = 20 * relativeY; // 회전 강도 조정

    setStyle({
      containerTransform: `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
       });
  };

  const handleMouseOut = () => {
    setStyle({
      containerTransform: 'perspective(350px) rotateY(0deg) rotateX(0deg)',

    });
  };

  return (
    <div style={{  width: '100%', height: '100%' ,
      display: 'flex' }}>    
    <div
      style={{ 
        width: setwidth,
        height: setheight,
        // width: '100px',
        // height: '200px',
        position: 'relative',
        transform: style.containerTransform }}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
    > 
    <div
  style={{
    width: '100%',
    height: '100%',
    backgroundImage:  `url(${image})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }}></div>
    </div>
    </div>
    
  );
};

export default CardComponent;
