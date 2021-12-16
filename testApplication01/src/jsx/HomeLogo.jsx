import React from 'react';
import { Image } from 'react-native';

import HomeIcon from '../asset/img/home.png';

const HomeLogo = () => {
  return (
    <Image
      source={HomeIcon}
      style={{ width: 30, height: 30, alignSelf: 'center' }}
    />
  );
};

export default HomeLogo;
