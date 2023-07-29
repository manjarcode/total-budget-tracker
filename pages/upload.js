import RootLayout from '@/app/layout'
import FileUploader from '@/components/fileUploader'
import useUploadFile from '@/hooks/useUploadFile'
import Button from '@mui/material/Button'

export default function UploadPage() {
  const {upload} = useUploadFile()
  const handleFileUpload = file => {
    upload(file)
  }
  return (
    <>
      <FileUploader onFileUpload={handleFileUpload} />
      <Button variant="contained">Continuar</Button>
    </>
  )
}
