import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const TitleContent = styled.View`
  width: 100%;

  padding: 20px 25px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.dark};
  font-size: 16px;
  font-weight: bold;
`;

export const DescriptionContent = styled.View`
  width: 100%;
  padding: 5px 20px;
`;

export const Description = styled.Text`
  font-size: 17px;
  color: ${({theme}) => theme.colors.light_dark};
  margin-bottom: 30px;

  text-align: justify;
`;

export const ImageContent = styled.View`
  width: 100%;
  padding: 5px 20px;
`;

export const Image = styled.Image``;
