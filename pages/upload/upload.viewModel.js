'use client'
import {useState} from 'react'
import useUploadFile from '@/hooks/useUploadFile.js'

export default function ViewModel() {
  const [response, setResponse] = useState()
  const {upload} = useUploadFile()

  const handleFileUpload = file => {
    upload(file).then(setResponse)
  }

  const isFileUploaded = Boolean(response)

  const filename = response?.filename
  const expenses = response?.expenses

  return {isFileUploaded, filename, expenses, handleFileUpload}
}

export async function getServerSideProps() {
  return {
    props: {}
  }
}
