export default function useFormatDate() {
  return formatDate
}

const formatDate = date => {
  const formattedDate = date.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
  
  return formattedDate
}