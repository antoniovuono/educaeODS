import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const SubTitle = styled.Text`
  padding: 30px 15px;
  text-align: center;
  font-size: 16px;
  color: ${({theme}) => theme.colors.light_dark};
`;

export const ContentObjectives = styled.View`
  padding: 1px 21px;
  padding-bottom: 210px;
`;

export const ObjectivesList = styled.FlatList``;
