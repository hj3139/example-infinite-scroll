import styled from 'styled-components';

interface CardTitleProps {
  title: string;
  idx: number;
}

const CardTitleWrapper = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export const CardTitle = (props: CardTitleProps) => {
  const { idx, title } = props;

  return (
    <CardTitleWrapper>
      <p>{idx}</p>
      <p>{title}</p>
    </CardTitleWrapper>
  );
};
