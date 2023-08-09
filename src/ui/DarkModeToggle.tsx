import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';

import Button from './Button';

import { useDarkMode } from '../context/DarkModeContext';

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <Button $type="back" onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </Button>
  );
}
