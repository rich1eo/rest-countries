import { styled } from 'styled-components';

const Input = styled.input`
  background-color: var(--color-el);
  padding: 1.8rem 2.2rem;
  width: 50rem;
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-md);

  &:hover,
  &:focus {
    outline: 1px solid var(--color-grey);
  }

  @media (max-width: 768px) {
    width: 25rem;
  }
`;

export default Input;
