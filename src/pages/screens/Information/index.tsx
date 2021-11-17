import React from 'react';
import BottomNavigation from '../../components/BottomNavigation';
import Header from '../../components/Header';
import Image from '../../../assets/images/image.png';

import * as Styled from './styles';

const Information: React.FC = () => {
  return (
    <>
      <Header title="Informações" />
      <Styled.Container>
        <Styled.TitleContent>
          <Styled.Title>Sobre os ODS:</Styled.Title>
        </Styled.TitleContent>
        <Styled.DescriptionContent>
          <Styled.Description>
            Os Objetivos de Desenvolvimento Sustentável (ODS) são um apelo
            universal da Organização das Nações Unidas à ação para acabar com a
            pobreza, proteger o planeta e assegurar que todas as pessoas tenham
            paz e prosperidade.
          </Styled.Description>

          <Styled.Description>
            Os 17 Objetivos de Desenvolvimento Sustentável (ODS) nasceram na
            Conferência das Nações Unidas sobre desenvolvimento sustentável no
            Rio de Janeiro em 2012. O objetivo foi produzir um conjunto de
            objectivos que suprisse os desafios ambientais, políticos e
            econômicos mais urgentes que nosso mundo enfrenta.
          </Styled.Description>
        </Styled.DescriptionContent>

        <Styled.ImageContent>
          <Styled.Image source={Image} />
        </Styled.ImageContent>
      </Styled.Container>

      <BottomNavigation />
    </>
  );
};

export default Information;
