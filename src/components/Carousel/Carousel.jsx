import image1 from "../../assets/image/VISA-SERVICES-PATTAYA-823612.jpg";
import image2 from "../../assets/image/Mobile-responsive-771966.png";
import image3 from "../../assets/image/NEK-Kabel-AS-820452.jpg";
import image4 from "../../assets/image/Realestate-Webdesign-823662.jpg";

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
            alt="Slide 1"
          />

          <div className="carousel-caption d-none d-md-block">
            <h5>Desenvolvimento Web</h5>
            <p>Construímos aplicações modernas.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={image2}
            className="d-block w-100"
            alt="Slide 2"
          />

          <div className="carousel-caption d-none d-md-block">
            <h5>React & .NET</h5>
            <p>Soluções profissionais para empresas.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={image3}
            className="d-block w-100"
            alt="Slide 3"
          />

          <div className="carousel-caption d-none d-md-block">
            <h5>FA Tech</h5>
            <p>Tecnologia para o seu negócio.</p>
          </div>
        </div>

          
        <div className="carousel-item">
          <img
            src={image4}
            className="d-block w-100"
            alt="Slide 4"
          />

          <div className="carousel-caption d-none d-md-block">
            <h5>FA Tech</h5>
            <p>Tecnologia para o seu negócio.</p>
          </div>
        </div>
        
        

      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
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