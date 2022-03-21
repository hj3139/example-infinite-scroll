import { CardList } from 'components';
import styled from 'styled-components';

const AppContainter = styled.div`
  background: #d9d9d9;
`;

const App = () => {
  return (
    <AppContainter>
      <CardList />
    </AppContainter>
  );
};

export default App;
