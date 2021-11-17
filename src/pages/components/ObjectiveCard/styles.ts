import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 100px;

  padding: 22px 26px;
  border-radius: 18px;

  flex-direction: row;
  margin-bottom: 10px;
`;

export const IdentificationContent = styled.View`
  justify-content: center;
  align-items: center;
`;

export const IdentificationNumber = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.light};
`;

export const TextContent = styled.View`
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
`;

export const TextLabel = styled.Text`
  font-size: 19px;
  color: ${({theme}) => theme.colors.light};
`;
