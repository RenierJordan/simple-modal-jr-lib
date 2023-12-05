import React, { useState } from 'react'
import Modal from 'simple-modal-jr-lib'
import 'simple-modal-jr-lib/dist/index.css'

export default function App() {
  const [openModal, setOpenModal] = useState(false) // this hook will determine when the modal opens or closes
  return (
    <div className='App'>
      <h1>Modal Test</h1>
      <button onClick={() => setOpenModal(true)}>Open Modal</button>{' '}
      {/* We set the OpenModal hook on true to open the modal when we click on the button */}
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <p>Exemple text !</p>
      </Modal>
      {/* The modal component needs at least the 'setIsOpen' and the onClose function  */}
    </div>
  )
}
