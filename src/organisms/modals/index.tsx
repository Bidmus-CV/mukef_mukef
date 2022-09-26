import React, { ReactNode } from "react";
import CloseIcon from "../../vectors/CloseIcon";
import "./Modal.scss";

const Modal = ({
  openModal,
  children,
  closeModal,
  width = "30rem",
  title,
}: {
  openModal: Boolean;
  children: ReactNode;
  closeModal: Function;
  title: string;
  width?: string;
}) => {
  return (
    <>
      {openModal && (
        <div className="modal-layout" onClick={() => closeModal()}></div>
      )}
      <div className={`Modal ${openModal ? "open" : ""}`} style={{ width }}>
        <div className="flex justify-between px-10 py-6">
          <h1 className="text-black3 text-xl">{title}</h1>
          <div className="cursor-pointer" onClick={() => closeModal()}>
            <CloseIcon />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Modal;
