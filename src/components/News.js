import { useState } from "react";
import lerma1 from "../media/river.jpg";
import lerma2 from "../media/river2.jpg";
import close from "../media/crossout.png";
import "./styles/News.css";
import Modal from "react-modal";

const posts = [
  {
    img: lerma1,
    title: " Río Lerma comienza a preocupar...",
    // resume: "resume1",
    content: `Pese a que no han iniciado formalmente la temporada de lluvias de este año, el Río Lerma ya presenta algunas zonas donde el afluente se ha incrementado y por lo mismo, se prenden las luces de alerta en vecinos que habitan a las orillas del afluente.

Las lluvias de los últimos días han abonado para aumentar el caudal del río en mención, de tal suerte que en algunas partes ya presenta un nivel considerable y preocupante. De continuar así, se espera que en el mes de mayo el río Lerma comience a tener los reflectores de las autoridades respectivas.
`,
  },
  {
    img: lerma2,
    title:
      "Gobiernos federal y estatal realizan obras para prevenir desbordamiento del Río Lerma",
    // resume: "resume2",
    content: `Para prevenir afectaciones por desbordamiento del Río Lerma, el gobierno estatal y federal realizan una inversión de casi 178 millones de pesos en el periodo del 2020 al 2022, aplicados en distintas obras que ya concluyeron, están en curso o están por finalizar, así lo informó el secretario general de gobierno de la entidad, Ernesto Nemer Álvarez.

Entre las obras contempladas destacan trabajos de desazolve de 12 kilómetros del cauce y el reforzamiento de las paredes de 6.2 kilómetros del mismo, explicó el funcionario estatal, quien subrayó que el gobierno del Estado realiza desazolve y rectificación del cauce, así como la construcción de mantenimiento de equipos de bombeo del cárcamo de más de 145 kilómetros, así como la instalación de tres campamentos del Grupo Tláloc para la prevención y atención de desastres.`,
  },
  {
    img: lerma1,
    title: "Llaman en Senado a salvar el Río Lerma de la contaminación",
    // resume: "resume2",
    content: `El senador Israel Zamora Guzmán se sumó a la campaña de la asociación “H2O Lerma con encanto” para rescatar al Río Lerma, uno de los caudales de agua más importantes de nuestro país, “que fue sinónimo de vida durante mucho tiempo”, pero que ha sido contaminado por las actividades humanas, económicas e industriales, con repercusiones negativas para el medio ambiente y la salud de las personas.

Durante una reunión con organizaciones sociales, comerciantes y vecinos de Tlatelolco, Zamora Guzmán hizo un llamado a las autoridades de los 33 municipios de la Cuenca del Valle de México, así como a los gobiernos del Estado de México, Querétaro, Michoacán, Guanajuato y Jalisco -entidades que recorre el afluente-, a fin de que colaboren con esta organización para reducir la contaminación del Río.
La asociación “H2O Lerma con encanto”, fundada por mujeres y activistas ambientales recolecta cascarones de huevo para limpiar el Río, pues se descubrió que pueden absorber minerales y residuos dañinos para el agua.`,
  },
];

const customStyles = {
  content: {
    color: "white",
    width: "95vw",
    height: "90vh",
    backgroundColor: "#000000",
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
