import { useState } from "react"

export default function ViewModel() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const onCloseModal = () => {
    setIsModalOpen(false)
  } 

  return {
    isModalOpen,
    handleOpenModal,
    onCloseModal
  }
}