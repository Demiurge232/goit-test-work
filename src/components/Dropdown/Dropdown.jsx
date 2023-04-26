import { useState } from 'react';
import {
  DropdownBox,
  StyledSelect,
  StyledLabel,
  StyleOption,
} from './Dropdown.styled';

export const Dropdown = ({ handleFilter }) => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
    handleFilter(event.target.value);
  };

  return (
    <DropdownBox>
      <StyledLabel>Show</StyledLabel>
      <StyledSelect onChange={handleChange} value={value}>
        <StyleOption value="all">all</StyleOption>
        <StyleOption value="follow">follow</StyleOption>
        <StyleOption value="followings">followings</StyleOption>
      </StyledSelect>
    </DropdownBox>
  );
};

export default Dropdown;
