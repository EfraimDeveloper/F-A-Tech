import "./About.css";

export default function About(){

    return(
        <section className="container py-5">

            <div className="text-center mb-5">

                <h5 className="text-primary fw-bold">
                    SOBRE NÓS
                </h5>

                <h1 className="fw-bold">
                    F&A Tech - Tecnologia e Informática
                </h1>

                <p className="text-muted">
                    Fornecemos soluções tecnológicas para empresas,
                    garantindo segurança, eficiência e continuidade dos sistemas.
                </p>

            </div>


            <div className="row g-4">


                <div className="col-md-6">

                    <div className="about-card">

                        <i className="fa-solid fa-bullseye"></i>

                        <h3>
                            Nossa Missão
                        </h3>

                        <p>
                            Garantir que a tecnologia da sua empresa funcione
                            com máximo desempenho, segurança e estabilidade.
                        </p>

                    </div>

                </div>



                <div className="col-md-6">

                    <div className="about-card">

                        <i className="fa-solid fa-eye"></i>

                        <h3>
                            Nossa Visão
                        </h3>

                        <p>
                            Ser referência em soluções tecnológicas empresariais
                            em Angola.
                        </p>

                    </div>

                </div>



                <div className="col-md-6">

                    <div className="about-card">

                        <i className="fa-solid fa-star"></i>

                        <h3>
                            Nossos Valores
                        </h3>

                        <ul>
                            <li>Profissionalismo</li>
                            <li>Confiança</li>
                            <li>Inovação</li>
                            <li>Rapidez</li>
                            <li>Compromisso com o cliente</li>
                        </ul>

                    </div>

                </div>



                <div className="col-md-6">

                    <div className="about-card">

                        <i className="fa-solid fa-award"></i>

                        <h3>
                            Nossos Diferenciais
                        </h3>

                        <ul>
                            <li>Atendimento rápido</li>
                            <li>Equipa qualificada</li>
                            <li>Soluções modernas</li>
                            <li>Preços competitivos</li>
                            <li>Suporte personalizado</li>
                        </ul>

                    </div>

                </div>


            </div>

        </section>
    )
}