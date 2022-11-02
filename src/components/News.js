import { useState } from "react";
import lerma1 from "../media/river.jpg";
import lerma2 from "../media/river2.jpg";
import close from "../media/crossout.png";
import "./styles/News.css";
import Modal from "react-modal";

const posts = [
  {
    img: lerma1,
    title: "aguas",
    resume: "resume1",
    content: `Matar un ruiseñor (título original en inglés: To Kill a Mockingbird) es una novela de 1960 de la escritora estadounidense Harper Lee. Su publicación tuvo un éxito instantáneo, ganando el premio Pulitzer y pasando a convertirse en un clásico de la literatura estadounidense. La novela está inspirada en las observaciones de la autora sobre su familia y sus vecinos, así como en un incidente ocurrido cerca de su ciudad en 1936, cuando tenía 10 años de edad.

Aunque la novela trata sobre temas polémicos como la violación sexual y la desigualdad racial, también es alabada por su calidez y humor. El padre de la narradora, Atticus Finch, ha servido como ejemplo de moral para muchos lectores y como modelo de integridad para los abogados. Un crítico explicaba el impacto de la novela diciendo: «En el siglo XX, Matar un ruiseñor es el libro más leído sobre el tema racial en Estados Unidos, y su protagonista, Atticus Finch, es la imagen de ficción más duradera del heroísmo racial».

Leer
`,
  },
  {
    img: lerma2,
    title: "loli",
    resume: "resume2",
    content: "contenido2",
  },
  {
    img: lerma1,
    title: "test",
    resume: "resume2",
    content: "contenido3",
  },
];

const customStyles = {
  content: {
    color: "white",
    width: "95vw",
    height: "90vh",
    backgroundColor: "#16181Cef",
    outline: "none",
    borderRadius: "10px",
    overflow: "auto",
  },
  overlay: { zIndex: 999, backgroundColor: "rgba(0, 0, 0, 0)" },
};

const News = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentContent, setcurrentContent] = useState("");

  const openModal = () => {
    modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true);
  };
  const handleData = (title, content) => {
    openModal();
    setCurrentTitle(title);
    setcurrentContent(content);
  };
  return (
    <>
      <Modal
        className="modal-post"
        ariaHideApp={false}
        style={customStyles}
        isOpen={modalIsOpen}
      >
        <img onClick={openModal} className="tache" src={close} alt="" />
        <div>
          <h1 className="title-info-modal">{currentTitle}</h1>
          <p className="parrafo-info">{currentContent}</p>
        </div>
      </Modal>
      <section id="info">
        <h1 style={{ textAlign: "center" }}>Más información...</h1>
        <div className="cards-lerma">
          {posts.map((post, key) => {
            return (
              <div key={key} className="card" style={{ width: "18rem" }}>
                <img
                  //   style={{ height: "100%" }}
                  className="card-img-top"
                  src={post.img}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.resume}</p>
                  <button
                    onClick={() => handleData(post.title, post.content)}
                    className="btn btn-primary"
                  >
                    Leer más
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default News;
