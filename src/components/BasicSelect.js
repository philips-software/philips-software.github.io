import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';

const BasicSelect = props => {
  const { value, options, placeholder, onChange = () => {} } = props;

  return (
    <Select
      multiple
      displayEmpty
      value={value}
      onChange={event => onChange(event.target.value)}
      input={<Input />}
      renderValue={selected => {
        if (selected.length === 0) {
          return <em>{placeholder}</em>;
        }

        return selected.join(', ');
      }}
    >
      <MenuItem disabled value="">
        <em>{placeholder}</em>
      </MenuItem>
      {options.map(name => (
        <MenuItem key={name} value={name}>
          {name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default BasicSelect;
