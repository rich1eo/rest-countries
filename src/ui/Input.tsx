import { styled } from 'styled-components';

const Input = styled.input`
  background-color: var(--color-el);
  padding: 1.8rem 2.2rem;
  width: 50rem;
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-md);

  &:disabled {
    background-color: var(--color-grey-200);
  }

  @media (max-width: 768px) {
    width: 25rem;
  }
`;

export default Input;
