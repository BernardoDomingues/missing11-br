import React from "react";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";

const Modal = ({ children, visible, onClose }) =>
  visible && (
    <>
      <OutsideModal onClick={() => onClose()}/>
      <ModalWindow>
        <Header>
          <Close
            onClick={() => {
              onClose();
            }}
          />
        </Header>
        {children}
      </ModalWindow>
    </>
  );

const OutsideModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 898;
  display: block;
`;

const ModalWindow = styled.div`
  background-color: #fff;
  position: fixed;
  height: auto;
  max-height: 90vh;
  top: 50%;
  left: 50%;
  text-align: left;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  z-index: 899;
  text-align: left;
  @media screen and (max-width: 400px) {
    max-width: 90vw;
  }
`;

const Header = styled.div`
  border-radius: 4px;
  width: 85%;
  height: 10px;
  background-color: #bbb;
  padding: 15px;
  font-size: 20px;
  color: #fff;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  @media screen and (max-width: 400px) {
    width: 91%;
  }
`;

const Close = styled(IoIosClose)`
  position: fixed;
  right: 15px;
  cursor: pointer;
  color: #fff;
  font-size: 25px;
`;

export default Modal;
