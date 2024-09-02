import { useState } from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";

Modal.setAppElement("#root");
const NotificationButton = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
      mute: 0,
    },
  };

  return (
    <div>
      <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg">
        <button
          onClick={openModal}
          className="mx-auto flex justify-between items-center"
        >
          Nhấp vào đây để ủng hộ mình :v
        </button>
      </header>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Music Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <button onClick={closeModal}>&times;</button>
        <YouTube videoId="kMg3wTAhNsY" opts={opts} />
      </Modal>
    </div>
  );
};

export default NotificationButton;
