import { styled } from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.2rem 3rem;
  box-shadow: var(--shadow-md);
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Where in the world</h1>
      <p>Dark Mode</p>
    </StyledHeader>
  );
}
