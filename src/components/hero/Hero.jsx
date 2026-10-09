import "./Hero.css";
import image1 from "../../assets/image/Visually-appealing-Design-771230.png";
import image2 from "../../assets/image/MOBILE-RESPONSIVENESS-771228.png";
import image3 from "../../assets/image/SEO-771229.png";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">

            <span className="text-primary fw-bold">
              F&A TECH — TECNOLOGIA E INFORMÁTICA
            </span>

            <h1 className="display-4 fw-bold mt-3">
              Suporte Informático para Empresas
            </h1>

            <p className="lead mt-4">
              Precisa de ajuda informática?
              Oferecemos suporte técnico rápido e
              soluções para manter a sua empresa a funcionar.
            </p>

            <h3 className="mt-4">
              Conte connosco para manter
              <span className="text-primary">
                {" "}a sua tecnologia em boas mãos.
              </span>
            </h3>

            <div className="car mt-4">
              <div className="row text-center">

                <div className="col-12 col-md-4 mb-4">
                  <img src={image1} alt="Assistência técnica" className="img-fluid" />
                  <h5 className="mt-3">Assistência Técnica</h5>
                 
                </div>

                <div className="col-12 col-md-4 mb-4">
                  <img src={image2} alt="Manutenção informática" className="img-fluid" />
                  <h5 className="mt-3">Manutenção Informática</h5>
                 
                </div>

                <div className="col-12 col-md-4 mb-4">
                  <img src={image3} alt="Segurança informática" className="img-fluid" />
                  <h5 className="mt-3">Segurança Informática</h5>
              
                </div>

              </div>
            </div>

            <div className="mt-4 mb-4">
              <a href="#contact" className="btn btn-primary btn-lg">
                Fale Connosco
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;