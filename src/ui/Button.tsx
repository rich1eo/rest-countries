import { css, styled } from 'styled-components';

const types = {
  back: css`
    padding: 1.2rem 3.2rem;

    & span {
      margin-right: 0.8rem;
    }

    @media (max-width: 425px) {
      padding: 0.7rem 1.6rem;
    }
  `,
  border: css`
    padding: 0.5rem 1rem;
  `,
};

interface ButtonProps {
  $type: 'back' | 'border';
}

const Button = styled.button<ButtonProps>`
  ${props => types[props.$type]}
  background-color: var(--color-el);
  border: none;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-lg);
  cursor: pointer;
`;

export default Button;
