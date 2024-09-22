import FileUploader from '@/components/fileUploader/index.js'

import ViewModel from './upload.viewModel'
import ReportForm from '@/components/reportForm/index.js'

export default function UploadPage() {

  const {isFileUploaded, filename, expenses, handleFileUpload} = ViewModel()

  return (
    <>
      {!isFileUploaded && <FileUploader onFileUpload={handleFileUpload} />}
      {isFileUploaded && 
      <>
        <p>Archivo subido: {filename}</p>
        <ReportForm expenses={expenses} />
      </>}
    </>
  )
}
