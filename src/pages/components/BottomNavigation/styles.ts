import styled from 'styled-components/native';

export const Container = styled.View`
  height: 90px;
  width: 100%;

  background-color: ${({theme}) => theme.colors.main};

  flex-direction: row;
`;

export const firstItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const secondItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const thirdItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.light};
  margin-left: 10px;
`;

export const Image = styled.Image`
  height: 20px;
  width: 20px;
`;
