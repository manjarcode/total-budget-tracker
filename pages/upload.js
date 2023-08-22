import FileUploader from '@/components/fileUploader/index.js'
import useUploadFile from '@/hooks/useUploadFile.js'
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
