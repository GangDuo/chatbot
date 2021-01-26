import React from 'react';
import Modal from 'react-modal';

import ChatApp from './ChatApp';

export function createModalChat(appElement) {
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      padding               : 0,
    }
  };

  Modal.setAppElement(appElement);

  return function ModalChat({ modalIsOpen, onRequestClose }) {
    function afterOpenModal() {}  
  
    return (
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ChatApp />
      </Modal>
    )
  };
}