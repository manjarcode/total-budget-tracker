import FileUploader from '@/components/fileUploader/index.js'

import Button from '@mui/material/Button'
import ViewModel from './upload.viewModel'

export default function UploadPage() {

  const {hasResponse, filename, handleFileUpload} = ViewModel()

  return (
    <>
      <FileUploader onFileUpload={handleFileUpload} />
      {hasResponse && <p>Archivo subido: {filename}</p>}
      <Button disabled={!hasResponse} variant="contained">Continuar</Button>
    </>
  )
}
