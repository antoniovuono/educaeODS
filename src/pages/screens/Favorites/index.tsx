import React from 'react';
import BottomNavigation from '../../components/BottomNavigation';
import Header from '../../components/Header';

import * as Styled from './styles';

export function Favorites() {
  return (
    <>
      <Styled.Container>
        <Header title="Favoritos" />
      </Styled.Container>

      <BottomNavigation />
    </>
  );
}
