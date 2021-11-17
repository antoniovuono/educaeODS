import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: green;
  width: 327px;
  height: 128px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.light};

  justify-content: center;
  align-items: center;

  padding: 0 15px;

  margin-left: 20px;
`;

export const Description = styled.Text`
  text-align: justify;
  color: ${({theme}) => theme.colors.light_dark};
`;
