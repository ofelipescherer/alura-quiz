/* eslint-disable react/prop-types */
import React from 'react';
import Lottie from 'react-lottie';

import Widget from '../Widget';
import animationData from './animation.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function LoadingWidget() {
  return (
    <Widget>
      <Widget.Content style={{ display: 'flex', justifyContent: 'center' }}>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
      </Widget.Content>
    </Widget>
  );
}
