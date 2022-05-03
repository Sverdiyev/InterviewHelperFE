import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Select } from '@mui/material';

function MultipleSelectField({ values, setValue, options, label }) {
  return (
    <FormControl fullWidth sx={{ mt: 1 }}>
      <InputLabel id={label + '-label'}>{label[0].toUpperCase() + label.slice(1)}</InputLabel>
      <Select
        sx={{ textAlign: 'left' }}
        labelId={label + '-label'}
        label={label}
        id="demo-multiple-checkbox"
        multiple
        value={values}
        onChange={(e) => setValue(e)}
        renderValue={(selected) => selected.join(', ')}>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            <Checkbox checked={values.includes(option)} />
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default MultipleSelectField;
