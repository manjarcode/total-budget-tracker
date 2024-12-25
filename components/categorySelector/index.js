import PropTypes from 'prop-types'

import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'

export default function CategorySelector({categories, value, onChange}) {
  return (
    <FormControl sx={{mr: 4}}>
      <FormLabel>Categoría</FormLabel>
      <RadioGroup
        value={value}
        onChange={event => { onChange(event.target.value) }}
      >
        {categories.map(item => (
          <FormControlLabel key={item.name} value={item.name} control={<Radio />} label={item.name} />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

CategorySelector.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
