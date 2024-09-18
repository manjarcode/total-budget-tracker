import {useState} from 'react'
import useUploadFile from '@/hooks/useUploadFile.js'

export default function ViewModel() {
  const [response, setResponse] = useState()
  const {upload} = useUploadFile()

  const handleFileUpload = file => {
    upload(file).then(setResponse)
  }

  const hasResponse = Boolean(response)

  const filename = response?.filename

  return {hasResponse, filename, response, handleFileUpload}
}