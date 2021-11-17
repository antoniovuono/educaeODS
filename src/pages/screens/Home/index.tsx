import React, {useEffect, useState} from 'react';
import {api} from '../../../services/api';
import Header from '../../components/Header';
import ObjectiveCard from '../../components/ObjectiveCard';
import {IObjectives} from '../../../dtos/IObjectives';

import * as Styled from './styles';
import BottomNavigation from '../../components/BottomNavigation';
import {useNavigation} from '@react-navigation/native';

const Home: React.FC = () => {
  const [objectives, setObjectives] = useState<IObjectives[]>([]);

  const navigation = useNavigation();

  const handleGoObjective = (objective: IObjectives) => {
    navigation.navigate('ObjectivesScreen', {objective});
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/objectives');
        setObjectives(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Styled.Container>
        <Header title="EducaeODS" />

        <Styled.SubTitle>
          Indicadores Brasileiros para os Objetivos de Desenvolvimento
          Sustentável
        </Styled.SubTitle>

        <Styled.ContentObjectives>
          <Styled.ObjectivesList
            showsVerticalScrollIndicator={false}
            data={objectives}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <ObjectiveCard
                color={item.color}
                identification={item.id}
                title={item.name}
                onPress={() => handleGoObjective(item)}
              />
            )}
          />
        </Styled.ContentObjectives>
      </Styled.Container>
      <BottomNavigation />
    </>
  );
};

export default Home;
