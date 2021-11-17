import React from 'react';

import * as Styled from './styles';

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = ({title}: IHeaderProps) => {
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
    </Styled.Container>
  );
};

export default Header;
