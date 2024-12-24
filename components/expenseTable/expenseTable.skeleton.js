import { Divider } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function ExpenseTableSkeleton({isLoading}) {

  if (!isLoading) return null

  const rowCount = 10
  return (
    <Stack 
      sx={{marginTop: '25px'}} 
      spacing={1} 
      divider={<Divider variant="rectangular" height={1} />} 
    >
      {Array.from({ length: rowCount }).map((_, i) => (
        <Row key={i} />
      ))}
    </Stack>
  )
}

const Row = () => (
  <Stack 
    spacing={4} 
    direction='row'
  >
    <Skeleton variant="rectangular" width={100} />
    <Skeleton variant="rectangular" width={900} />
    <Skeleton variant="rectangular" width={100} />
  </Stack>
)