export default function useUploadFile() {
  const upload = async file => {
    const formData = new FormData()
    formData.append('file', file)
    const promise = fetch('/api/upload', {
      method: 'POST',
      body: formData
    }).then(async response => response.json())      
   
    return promise
  }
  return {upload}
}
