import "./Hero.css";
import image1 from "../../assets/image/Visually-appealing-Design-771230.png";
import image2 from "../../assets/image/MOBILE-RESPONSIVENESS-771228.png";
import image3 from "../../assets/image/SEO-771229.png";

function Hero() {
    return (
        <section className="hero">

            <div className="container">

                <div className="row align-items-center">

                    <div className="col-sm-12 col-md-12 col-lg-12">

                        <span className="text-primary fw-bold">
                          SITES PERSONALIZADOS
                        </span>

                        <h1 className="display-4 fw-bold mt-3">
                            Soluções Digitais para Empresas
                        </h1>

                        <p className="lead mt-4">
                            Desenvolvemos websites, aplicações web e APIs modernas
                            utilizando React e .NET.
                        </p>

                        <h3>
                                Podemos <span className="text-primary">criar o site</span> que sua empresa precisa.
                        </h3>

                        <p>Com muitos anos de experiência na criação de websites de todos os tipos, 
                        podemos oferecer a melhor consultoria para garantir o sucesso do seu projeto. 
                        Não criamos websites baseados em modelos padrão; desenvolvemos o modelo ideal para o seu negócio.</p>

                                <div className="car">
                                
                              <div className="row">
                                <div className="col-sm-4">
                                      <img src={image1} alt="" />
                                      <p>Design visualmente atraente</p>
                                </div>

                                <div className="col-sm-4">
                                      <img src={image2} alt="" />
                                      <p>Responsividade em dispositivos móveis</p>
                                </div>


                                <div className="col-sm-4">
                                      <img src={image3} alt="" />
                                      <p>Otimização de SEO excepcional</p>
                                </div>


                              </div>

                                </div>
        
                        <div className="mt-4">

                            <button className="btn btn-primary btn-lg me-3">
                             Vamos Começar!
                            </button>

                            {/* <button className="btn btn-outline-dark btn-lg">
                                Contacte-nos
                            </button> */}

                        </div>

                    </div>
{/* 
                    <div className="col-lg-6 text-center">

                  

                    </div> */}

                </div>

            </div>

        </section>
    );
}

export default Hero;