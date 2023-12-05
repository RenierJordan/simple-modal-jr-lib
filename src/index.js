import React from 'react'
import styles from './styles.module.css'

const Modal = ({ children, isOpen, onClose }) => {
  return (
    isOpen && (
      <div className={styles['modal-overlay']} onClick={onClose}>
        <div
          className={styles['modal-wrapper']}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles['modal-content']}>
            {children}
            <button
              type='button'
              className={styles['modal-close']}
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  )
}

export default Modal
