// import React from "react";
// import ReactDOM from "react-dom";
// import Modal from "react-modal";

// const customStyles = {
//   overlay: {
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     border: "none",
//     background: "none",
//     overflow: "visible",
//   },
// };

// Modal.setAppElement("#root");

// export default function ImageModal({ isOpen, onClose, imageUrl }) {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       style={customStyles}
//       contentLabel="Image Modal"
//     >
//       <button onClick={onClose} className="close-btn">
//         &times;
//       </button>
//       <img src={imageUrl} alt="Large" />
//     </Modal>
//   );
// }

import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ imageUrl, isOpen, isClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        overlay: { background: "#000000cd" },
        content: {
          borderRadius: "4px",
          width: "600px",
          height: "500px",

          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      }}
      onRequestClose={isClose}
      ariaHideApp={false}
      shouldFocusAfterRender={true}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      shouldReturnFocusAfterClose={true}
      preventScroll={false}
      aria={{
        labelledby: "heading",
        describedby: "full_description",
      }}
    >
      <div className={css.imageContainer}>
        <img className={css.image} src={imageUrl} alt="" />
      </div>
    </ReactModal>
  );
};
export default ImageModal;