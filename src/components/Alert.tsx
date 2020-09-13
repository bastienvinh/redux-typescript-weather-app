import React, { FC } from 'react'

interface IProps {
  message: string
  onClose: () => void
}

const Alert: FC<IProps> = ({ message, onClose }) => {
  return <div className="modal is-active">
    <div className="modal-background" onClick={onClose}></div>
    <div className="model-card">
      <header className="modal-card-head has-background-danger">
        <p className="modal-card-title has-text-white">{message}</p>
      </header>
      <footer className="modal-card-foot" style={{ justifyContent: 'center' }}>
        <button className="button" onClick={onClose}>Close</button>
      </footer>
    </div>
  </div>
}

export default Alert