import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 14,
    label: '300',
  },
  {
    value: 28,
    label: '600',
  },
  {
    value: 42,
    label: '1000',
  },
  {
    value: 56,
    label: '2000',
  },
  {
    value: 70,
    label: '3000',
  },
  {
    value: 84,
    label: '6000',
  },
  {
    value: 100,
    label: '10000',
  },
];



export default function DiscreteSliderMarks(props) {
  function valuetext(value) {
    console.log(props.oninput);
    return `${100}`;
  }
  return (
    <Box sx={{ width: 500 }}>
        
      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        getAriaValueText={valuetext}
        step={12.5}
        valueLabelDisplay=""
        marks={marks}
      />
    </Box>
  );
}
