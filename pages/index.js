import RootLayout from "@/app/layout";
import FileUploader from "@/components/fileUploader";
import Button from '@mui/material/Button';

export default function Homepage() {
  const handleFileUpload = (file) => {
    console.log(file)
  }
  return <>
    <h1>Welcome y punto</h1>
    <FileUploader onFileUpload={handleFileUpload} />
    <Button variant="contained">Continuar</Button>
  </>
  
}
