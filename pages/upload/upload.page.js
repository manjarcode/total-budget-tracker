import FileUploader from '@/components/fileUploader/index.js'

import ViewModel from './upload.viewModel'
import ReportForm from '@/components/reportForm/index.js'
import RootLayout from '@/app/layout'

export default function UploadPage() {

  const {isFileUploaded, filename, expenses, handleFileUpload} = ViewModel()

  return (
    <RootLayout>
      <h1>Subir archivo</h1>
      {!isFileUploaded && <>
        <p>Añade un archivo para poder generar el informe</p>
        <FileUploader onFileUpload={handleFileUpload} />
      </>}
      {isFileUploaded && 
      <>
        <p>Fichero: {filename}</p>
        <ReportForm expenses={expenses} />
      </>}
    </RootLayout>
  )
}
