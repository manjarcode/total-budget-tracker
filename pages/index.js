import Link from 'next/link'

import useReports from '@/hooks/useReports.js'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import DeleteIcon from '@mui/icons-material/Delete'
import useNavigate from '@/hooks/useNavigate'
import { Button } from '@mui/material'
import RootLayout from '@/app/layout'

export default function Home() {
  const navigate = useNavigate()
  const {reports, remove} = useReports()

  
  const handleRemoveReport =  reportId => async () => {
    await remove(reportId)
  }

  return (
    <RootLayout>
      <h1>Informes</h1>
      <List>
        {reports.map(report => (
          <ListItem key={report.id}>
            <Link href={navigate.linkToConsolidateReport(report.id)}>{report.name}</Link>
            <Link href="#" onClick={handleRemoveReport(report.id)}><DeleteIcon /></Link>
          </ListItem>
        ))}
      </List>
      <Button href="/upload" variant="contained">Nuevo informe</Button>
    </RootLayout>
  )
}
