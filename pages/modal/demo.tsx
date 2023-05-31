import React, { useState } from "react";
import Modal from "../../components/ModalDemo";

export default function demo() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <h2> DEMO MODAL </h2>

      <button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open Modal
      </button>
    </div>
  );
}
