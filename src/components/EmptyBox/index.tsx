import { FC } from 'react';

import { Container } from './style';

interface EmptyBoxProps {
  content: string;
}

const EmptyBox: FC<EmptyBoxProps> = ({ content }) => {
  return <Container>{content}</Container>;
};

export default EmptyBox;
