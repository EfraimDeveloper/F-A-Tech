import image1 from "../../assets/image/photo1.jpg";
import image2 from "../../assets/image/photo2.jpg";
import image3 from "../../assets/image/photo3.jpg";
import image4 from "../../assets/image/photo4.jpg";
import "./carousel.css";

function Carousel() {
  return (      
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={image1}
            className="d-block w-100"
            alt="Suporte técnico informático"
          />

          <div className="carousel-caption d-none d-md-block">
            <h5>Suporte Técnico Informático</h5>
            <p>
              Assistência especializada para empresas,
              com rapidez e profissionalismo.
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={image2}
            className="d-block w-100"
            alt="Manutenção de equipamentos informáticos"
          />

          <div className="carousel-caption d-none d-md-block">
            <h5>Manutenção Informática</h5>
            <p>
              Prevenção e resolução de problemas para
              garantir o bom funcionamento dos sistemas.
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={image3}
            className="d-block w-100"
            alt="Segurança dos sistemas informáticos"
          />

          <div className="carousel-caption d-none d-md-block">
            <h5>Segurança Informática</h5>
            <p>
              Proteção dos equipamentos e dos sistemas
              informáticos da sua empresa.
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={image4}
            className="d-block w-100"
            alt="Assistência técnica para empresas"
          />

          <div className="carousel-caption d-none d-md-block">
            <h5>F&A Tech — Tecnologia e Informática</h5>
            <p>
              Soluções de suporte técnico para garantir
              a continuidade e eficiência do seu negócio.
            </p>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
        aria-label="Slide anterior"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
        aria-label="Slide seguinte"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
      </button>
    </div>
  );
  }

  export default Carousel;