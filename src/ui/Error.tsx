import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom';
import Button from './Button';
import { styled } from 'styled-components';

const StyledErrorMessage = styled.div`
  display: grid;
  place-items: center;
  height: 100dvh;
`;

function ErrorMessage() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <StyledErrorMessage>
      <h1>
        {isRouteErrorResponse(error)
          ? `${error.status} ${error.statusText}`
          : 'Something went wrong 😢'}
      </h1>
      <p>
        {isRouteErrorResponse(error)
          ? error.data
          : error instanceof Error
          ? error.message
          : 'Unknown error'}
      </p>
      <Button $type="back" onClick={() => navigate(-1)}>
        &larr; Go back
      </Button>
    </StyledErrorMessage>
  );
}

export default ErrorMessage;
