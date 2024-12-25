import PropTypes from 'prop-types'

import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'

export default function SubcategorySelector({subcategories, value, onChange}) {
  return (
    <FormControl>
      <FormLabel>Subcategoría</FormLabel>
      <RadioGroup
        value={value}
        onChange={event => { onChange(event.target.value) }}
      >
        {subcategories.map(item => (
          <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

SubcategorySelector.propTypes = {
  subcategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
