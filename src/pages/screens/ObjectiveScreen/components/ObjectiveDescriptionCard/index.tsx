import React from 'react';

import * as Styled from './styles';

interface IObjectiveDescription {
  description: string;
}

const components: React.FC<IObjectiveDescription> = ({description}) => {
  return (
    <Styled.Container>
      <Styled.Description>{description}</Styled.Description>
    </Styled.Container>
  );
};

export default components;
