import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

export default function CategorySelector({
  categories, 
  value, 
  onChange
}) {
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
      {categories.map(item => (
        <MenuItem key={item.name} value={item.name}>
          {item.name}
        </MenuItem>
      ))}
  </Select>
  )
}