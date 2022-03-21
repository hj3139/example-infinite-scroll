import styled from 'styled-components';

interface CardContentProps {
  content: string;
}

const CardContentWrapper = styled.div`
  height: 200px;
  display: inline-flex;
  align-items: center;
`;

export const CardContent = (props: CardContentProps) => {
  const { content } = props;

  return <CardContentWrapper>{content}</CardContentWrapper>;
};
