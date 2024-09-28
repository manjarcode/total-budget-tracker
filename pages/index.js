import Link from 'next/link'

import useReports from '@/hooks/useReports.js'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import DeleteIcon from '@mui/icons-material/Delete'

export default function Home() {
  const {reports, remove} = useReports()

  const curryReportId = reportId => {
    return `/report/${reportId}`
  }

  const handleRemoveReport =  reportId => async () => {
    await remove(reportId)
  }

  return (
    <Box>
      <List>
        {reports.map(report => (
          <ListItem key={report.id}>
            <Link href={curryReportId(report.id)}>{report.name}</Link>
            <Link href="#" onClick={handleRemoveReport(report.id)}><DeleteIcon /></Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
