import React from 'react'
import '../SelectPersonNumber/SelectPersonNumber.scss'
import { useTheme } from '@mui/material/styles';
// import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
      font: "'Merriweather', serif"
    },
  },
};

const names = [
  '1 Person',
  '2 People',
  '3 People',
  '4 People',
  '5 People',
  '6 People',
  '7 People',
  '8 People',
  '9 People',
  '10 People',
];

function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

function SelectPersonNumber() {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
  
    return (
      <div>
        <FormControl className='form' sx={{width: 200}}>
          <Select
            multiple
            displayEmpty
            value={personName}
            onChange={handleChange}
            // input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em className='em'>1 Person</em>;
              }
  
              return selected.join(', ');
            }}
            MenuProps={MenuProps}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            {/* <MenuItem disabled value="">
              <em>Placeholder</em>
            </MenuItem> */}
            {names.map((name) => (
              <MenuItem className='names'
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
}

export default SelectPersonNumber