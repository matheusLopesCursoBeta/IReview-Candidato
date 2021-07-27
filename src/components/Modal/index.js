import React from 'react';
import Modal from 'react-modal';

import { ContainerClose, Close, Title } from './style';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    paddingRight: '45px',
    paddingLeft: '45px',
    paddingTop: '30px',
    paddingBottom: '30px',
  },
};

export default function ModalComponent({ children, title, isOpen, isClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={isClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ContainerClose>
        <Title>{title}</Title>
      </ContainerClose>
      <Close>X</Close>
      {children}
    </Modal>
  );
}
