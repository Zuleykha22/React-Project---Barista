import React from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import '../DatePicker/DatePicker.scss'

function DatePicker() {
  return (
    <Stack component="form" noValidate spacing={3}>
      <TextField
      className='calendar'
        id="date"
        // label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      
    </Stack>
  )
}

export default DatePicker