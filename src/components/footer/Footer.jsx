import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer ">
            <div className="container">
                <div className="row g-4">

                    {/* Empresa */}
                    <div className="col-lg-4 col-md-6">
                        <h2 className="footer-logo">
                            F&A <span>Tech</span>
                        </h2>

                        <p className="footer-text">
                            Soluções tecnológicas inteligentes para empresas.
                            Desenvolvimento de sistemas, suporte informático
                            e transformação digital.
                        </p>
                    </div>


                    {/* Contactos */}
                    <div className="col-lg-4 col-md-6">

                        <h4>
                            <i className="fa-solid fa-address-book"></i>
                            {" "}Informações de contato
                        </h4>

                        <p>
                            <i className="fa-solid fa-location-dot"></i>
                            {" "}Luanda: Morro Bento, Rua dos Generais,
                            Casa nº106 - Angola
                        </p>

                        

                        <p>
                            <i className="fa-solid fa-phone"></i>
                            {" "}+244 927 168 971
                        </p>

                        <p>
                            <i className="fa-solid fa-envelope"></i>
                            {" "}fatechtecnologia.info@gmail.com
                        </p>

                        <p>
                            <i className="fa-solid fa-clock"></i>
                            {" "}Segunda a sexta: 09:00 - 18:00
                        </p>

                    </div>


                    {/* Redes */}
                    <div className="col-lg-4 col-md-12">

                        <h4>
                            <i className="fa-solid fa-share-nodes"></i>
                            {" "}Siga-nos
                        </h4>


                        <div className="social">

                            <a href="https://www.facebook.com/share/193e26GffU/" target="_bank" rel="noopener noreferrer">
                                <i className="fa-brands fa-facebook"></i>
                            </a>

                            <a href="https://www.linkedin.com/in/efraim-marcelino-68119a345/" target="_bank"rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>

                            <a href="https://www.linkedin.com/in/efraim-marcelino-68119a345/" target="_bank"rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram"></i>
                            </a>

                            <a href="https://www.tiktok.com/@fatech_tecnologiainfolda?_r=1&_t=ZS-98SmlOva6z6" target="_bank"rel="noopener noreferrer" >
                                <i className="fa-brands fa-tiktok"></i>
                            </a>

                            <a href="https://api.whatsapp.com/send/?phone=244927168971&text&type=phone_number&app_absent=0" target="_bank" rel="noopener noreferrer">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>

                        </div>

                    </div>

                </div>


                <hr />

                <div className="copyright">
                    © {new Date().getFullYear()} F&A Tech. Todos os direitos reservados.
                    | Desenvolvido por <a href="https://github.com/EfraimDeveloper?tab=repositories" className="footer-link" target="_bank"> Efraim Luis Marcelino</a> | <a href="https://alicesoft.netlify.app/" className="footer-link" target="_bank">AliceSoft </a>
                </div>

            </div>
        </footer>
    );
}