import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 15%;
  background-color: ${({theme}) => theme.colors.main};

  justify-content: center;
  align-items: center;
  padding: 25px;

  padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${({theme}) => theme.colors.light};
  text-align: center;
`;
