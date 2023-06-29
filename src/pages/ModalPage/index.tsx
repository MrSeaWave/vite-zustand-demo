import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Father from './CheckPropsChange';

const ModalPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  console.log('IsModelOpen', isModalOpen);
  return (
    <>
      <Father />
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <button onClick={handleCancel}>
          close (会触发modal里的afterClose逻辑)
        </button>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default ModalPage;
