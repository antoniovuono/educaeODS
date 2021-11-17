import styled, {css} from 'styled-components/native';

interface ITitleColors {
  yellow?: boolean;
  red?: boolean;
}

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.shape};

  margin-bottom: 10px;
`;

export const TitleConent = styled.View`
  width: 100%;
  height: 45px;

  justify-content: center;
  padding: 0 30px;

  margin-top: 10px;
`;

export const Title = styled.Text<ITitleColors>`
  font-weight: bold;
  font-size: 17px;

  color: ${({theme}) => theme.colors.succes};

  ${({yellow}) =>
    yellow &&
    css`
      color: ${({theme}) => theme.colors.waiting};
    `}

  ${({red}) =>
    red &&
    css`
      color: ${({theme}) => theme.colors.warning};
    `}
`;

export const ObjectiveContent = styled.View`
  width: 100%;
  height: 150px;

  justify-content: center;
  align-items: center;

  padding: 5px 20px;
`;

export const ObjectivesList = styled.ScrollView``;

export const ButtonContent = styled.View`
  padding: 0 30px;
`;

export const ButtonFavorite = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.sucess_light};
  border-radius: 10px;
  height: 50px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.colors.light};
  font-size: 19px;
`;
