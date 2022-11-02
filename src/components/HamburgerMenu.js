import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";
import Modal from "react-modal";
import "./styles/HamburgerMenu.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const customStyles = {
  content: {
    color: "white",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#16181Cef",
    outline: "none",
  },
  overlay: { zIndex: 998, backgroundColor: "rgba(0, 0, 0, 0)" },
};
const HamburgerMenu = () => {
  const openModal = (e) => {
    modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true);
    isOpen ? setOpen(false) : setOpen(true);
    console.log("modal");
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="hamburger">
        <Hamburger
          hideOutline={true}
          color="#FFFF"
          label="Show menu"
          toggled={isOpen}
          toggle={setOpen}
          onToggle={(toggled) => {
            toggled ? openModal() : openModal();
          }}
          // onClick={openModal}
        ></Hamburger>
      </div>

      <Modal
        className="modal-menu"
        ariaHideApp={false}
        style={customStyles}
        isOpen={modalIsOpen}
      >
        <div onClick={openModal}>
          <AnchorLink className="anchor-text" href="#welcome">
            <h1>Inicio</h1>
          </AnchorLink>
        </div>
        <div onClick={openModal}>
          {/* <h1>menu1</h1> */}
          <AnchorLink className="anchor-text" href="#swiper-anchor">
            <h1>Galeria de imágenes</h1>
          </AnchorLink>
        </div>
        <div onClick={openModal}>
          {/* <h1>menu1</h1> */}
          <AnchorLink className="anchor-text" href="#social-media">
            <h1>Redes Sociales</h1>
          </AnchorLink>
        </div>
      </Modal>
    </>
  );
};

export default HamburgerMenu;
