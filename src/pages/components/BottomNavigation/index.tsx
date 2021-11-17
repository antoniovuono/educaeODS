import React from 'react';
import * as Styled from './styles';
import {useNavigation} from '@react-navigation/native';

import HomeIcon from '../../../assets/icons/home.png';
import InfoIcon from '../../../assets/icons/info.png';
import FavoriteIcon from '../../../assets/icons/favorite.png';

const BottomNavigation: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Styled.Container>
      <Styled.firstItem onPress={() => navigation.navigate('Home')}>
        <Styled.Image source={HomeIcon} />
        <Styled.Title>Home</Styled.Title>
      </Styled.firstItem>

      <Styled.secondItem onPress={() => navigation.navigate('Info')}>
        <Styled.Image source={InfoIcon} />
        <Styled.Title>Sobre</Styled.Title>
      </Styled.secondItem>

      <Styled.thirdItem onPress={() => navigation.navigate('Favorites')}>
        <Styled.Image source={FavoriteIcon} />
        <Styled.Title>Favoritos</Styled.Title>
      </Styled.thirdItem>
    </Styled.Container>
  );
};

export default BottomNavigation;
