import { styled } from 'styled-components';
import DarkModeToggle from './DarkModeToggle';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.2rem 3rem;
  box-shadow: var(--shadow-md);

  @media (max-width: 425px) {
    h1 {
      font-size: 1.8rem;
    }
    padding: 2.2rem 2rem;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Where in the world</h1>
      <DarkModeToggle />
    </StyledHeader>
  );
}
