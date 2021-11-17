/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import * as Styled from './styles';

interface IObjectiveCard {
  identification: string;
  title: string;
  color: string;
  onPress: () => void;
}

const ObjectiveCard: React.FC<IObjectiveCard> = ({
  identification,
  title,
  color,
  ...rest
}: IObjectiveCard) => {
  return (
    <Styled.Container
      {...rest}
      style={{backgroundColor: color}}
      activeOpacity={0.8}>
      <Styled.IdentificationContent>
        <Styled.IdentificationNumber>
          {identification})
        </Styled.IdentificationNumber>
      </Styled.IdentificationContent>

      <Styled.TextContent>
        <Styled.TextLabel numberOfLines={1}>{title}</Styled.TextLabel>
      </Styled.TextContent>
    </Styled.Container>
  );
};

export default ObjectiveCard;
