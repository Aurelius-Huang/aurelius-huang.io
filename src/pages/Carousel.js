import React from 'react';
import { Carousel } from 'antd';

import knowledge from '@site/static/img/home/knowledge.png';
import scenarios from '@site/static/img/home/scenarios.png';
import programing from '@site/static/img/home/programing.png';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const CarouselModule = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);


export default CarouselModule;