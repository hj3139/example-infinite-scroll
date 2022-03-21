import { CardContent } from 'components/CardContent';
import { CardTitle } from 'components/CardTitle';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  idx: number;
  title: string;
  content: string;
}

const CardContainer = styled.div`
  width: 500px;
  text-align: center;
  border-radius: 30px;
  background: white;
  margin: 20px auto;
  padding: 20px 0;
`;

export const Card = (props: CardProps) => {
  const { idx, title, content, ...rest } = props;

  return (
    <CardContainer {...rest}>
      <CardTitle title={title} idx={idx} />
      <CardContent content={content} />
    </CardContainer>
  );
};
