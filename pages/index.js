import Link from 'next/link'

import useListReports from '@/hooks/useListReports'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

export default function Home() {
  const reports = useListReports()

  const curryReportId = reportId => {
    return `/report/${reportId}`
  }

  return (
    <Box>
      <List>
        {reports.map(report => (
          <ListItem key={report.id}>
            <Link href={curryReportId(report.id)}>{report.name}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
