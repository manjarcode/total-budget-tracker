import PropTypes from 'prop-types'

import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

export default function SubcategorySelector({subcategories, value, onChange}) {
  return (
    <Select
      labelId="subcategory"
      id="subcategory"
      value={value}
      label="Subcategoría"
      onChange={event => {
        const value = event.target.value
        onChange(value)
      }}
    >
      <MenuItem disabled value="">
        Seleccionar
      </MenuItem>
      {subcategories.map(item => (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  )
}

SubcategorySelector.propTypes = {
  subcategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
