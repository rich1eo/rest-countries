import { styled } from 'styled-components';

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-top: 4px solid var(--color-spinner);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: auto auto;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
