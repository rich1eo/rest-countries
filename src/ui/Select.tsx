import styled from 'styled-components';
import { ChangeEvent } from 'react';

import { IOption } from '../types/types';

const StyledSelect = styled.select`
  background-color: var(--color-el);
  font-size: 1.4rem;
  padding: 1.8rem 2.2rem;
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 600;
  box-shadow: var(--shadow-md);
`;

interface SelectProps {
  value: string;
  options: IOption[];
  onChange(event: ChangeEvent<HTMLSelectElement>): void;
}

export default function Select({
  value,
  options,
  onChange: handleChange,
}: SelectProps) {
  return (
    <StyledSelect value={value} onChange={handleChange}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}
