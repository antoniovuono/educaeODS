import {useRoute} from '@react-navigation/native';
import React from 'react';
import {IObjectives} from '../../../dtos/IObjectives';
import BottomNavigation from '../../components/BottomNavigation';
import Header from '../../components/Header';

import ObjectiveDescriptionCard from './components/ObjectiveDescriptionCard';

import * as Styled from './styles';

interface Params {
  objective: IObjectives;
}

const ObjectiveScreen: React.FC = () => {
  const route = useRoute();
  const {objective} = route.params as Params;

  console.log(objective.construction);

  return (
    <>
      <Header title={objective.name} />

      <Styled.Container>
        <Styled.TitleConent>
          <Styled.Title>Produzido</Styled.Title>
        </Styled.TitleConent>

        <Styled.ObjectiveContent>
          <Styled.ObjectivesList
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {objective.produced.map(objective => (
              <ObjectiveDescriptionCard
                key={objective}
                description={objective}
              />
            ))}
          </Styled.ObjectivesList>
        </Styled.ObjectiveContent>

        <Styled.TitleConent>
          <Styled.Title yellow>Em análise/construção</Styled.Title>
        </Styled.TitleConent>

        <Styled.ObjectiveContent>
          <Styled.ObjectivesList
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {objective.construction.map(objective => (
              <ObjectiveDescriptionCard
                key={objective}
                description={objective}
              />
            ))}
          </Styled.ObjectivesList>
        </Styled.ObjectiveContent>

        <Styled.TitleConent>
          <Styled.Title red>Sem dados</Styled.Title>
        </Styled.TitleConent>

        <Styled.ObjectiveContent>
          <Styled.ObjectivesList
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {objective.nodata.map(objective => (
              <ObjectiveDescriptionCard
                key={objective}
                description={objective}
              />
            ))}
          </Styled.ObjectivesList>
        </Styled.ObjectiveContent>

        <Styled.ButtonContent>
          <Styled.ButtonFavorite activeOpacity={0.7}>
            <Styled.ButtonText>Favoritar</Styled.ButtonText>
          </Styled.ButtonFavorite>
        </Styled.ButtonContent>
      </Styled.Container>

      <BottomNavigation />
    </>
  );
};

export default ObjectiveScreen;
