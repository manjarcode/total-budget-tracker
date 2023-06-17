import RootLayout from "@/app/layout"
import FileUploader from "@/components/fileUploader"
import Button from '@mui/material/Button'
import useUploadFile from "@/hooks/useUploadFile"

export default function UploadPage() {
  const { upload } = useUploadFile()
  const handleFileUpload = (file) => {
    upload(file)
  }
  return <>
    <FileUploader onFileUpload={handleFileUpload} />
    <Button variant="contained">Continuar</Button>
  </>
  
}
