'use client'
import FileUploader from '@/components/fileUploader/index.js'
import {Text} from 'manjark'

import ViewModel from './upload.viewModel'
import ReportForm from '@/components/reportForm/index.js'
import RootLayout from '@/app/layout'

export default function UploadPage() {

  const {isFileUploaded, filename, expenses, handleFileUpload} = ViewModel()

  return (
    <RootLayout>
      <Text.Title>Subir archivo</Text.Title>
      {!isFileUploaded && <>
        <p>Añade un archivo para poder generar el informe</p>
        <FileUploader onFileUpload={handleFileUpload} />
      </>}
      {isFileUploaded && 
      <>
        <p>Fichero: {filename}</p>
        <ReportForm expenses={expenses}/>
      </>}
    </RootLayout>
  )
}
