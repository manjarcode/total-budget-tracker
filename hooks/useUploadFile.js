export default function useUploadFile() {
  const upload = async file => {
    const formData = new FormData()
    formData.append('file', file)
    const promise = fetch('/upload', {
      method: 'POST',
      body: formData
    })

    return promise
  }
  return {upload}
}
