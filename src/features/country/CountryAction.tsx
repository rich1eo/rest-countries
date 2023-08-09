import { styled } from 'styled-components';
import Button from '../../ui/Button';
import { useNavigate } from 'react-router-dom';

const StyledCountryAction = styled.aside`
  margin: 2rem 0;
`;

export default function CountryAction() {
  const navigate = useNavigate();

  return (
    <StyledCountryAction>
      <Button $type="back" onClick={() => navigate(-1)}>
        <span>&larr;</span> Back
      </Button>
    </StyledCountryAction>
  );
}
