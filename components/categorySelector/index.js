import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

export default function CategorySelector({categories, value, onChange}) {
  return (
    <Select
      labelId="category"
      id="category"
      value={value}
      label="Categoría"
      onChange={event => {
        const value = event.target.value
        onChange(value)
      }}
    >
      {categories.map(category => (
        <MenuItem key={category.name} value={category.name}>
          {category.name}
        </MenuItem>
      ))}
  </Select>
  )
}