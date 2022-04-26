import { InputLabel, MenuItem, Select } from '@mui/material';
import FormControl from '@mui/material/FormControl';

function SelectField({ value, setValue, options, label }) {
  return (
    <FormControl sx={{ width: '50%', mt: 1 }}>
      <InputLabel id={label + '-label'}>{label[0].toUpperCase() + label.slice(1)}</InputLabel>
      <Select
        labelId={label + '-label'}
        label="Complexity"
        value={value}
        onChange={(e) => setValue(e)}>
        {options.map((option) => (
          <MenuItem key={option + '-select'} value={option}>
            {option[0].toUpperCase() + option.slice(1)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectField;
