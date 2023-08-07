import { styled } from 'styled-components';
import { Outlet, useNavigation } from 'react-router-dom';

import Header from './Header';
import Spinner from './Spinner';

const StyledMain = styled.main`
  padding: 3rem;
`;

export default function AppLayout() {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <StyledMain>
        {navigation.state === 'loading' ? <Spinner /> : <Outlet />}
      </StyledMain>
    </>
  );
}
