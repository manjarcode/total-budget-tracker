import PropTypes from 'prop-types'

import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'

import style from './index.module.css'

export default function SubcategorySelector({subcategories, value, onChange}) {
  return (
    <FormControl>
      <FormLabel>Subcategoría</FormLabel>
      <RadioGroup
        value={value}
        onChange={event => { onChange(event.target.value) }}
        className={style.list}
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
