import services from "../../Data/services";
import "./services.css";
import WebsiteServices from "./WebsiteServices";
export default function Services() {
        return (
    <section  className="container py-5">
      <div className="text-center mb-5">
        <h5 className="text-primary">SERVIÇOS</h5>
        <h2 className="fw-bold text-start">Nossos serviços</h2>
        <p className="text-muted text-justfy-line">
          A F&A Tech – Tecnologia e Informática, Lda, com NIF no 5003179281 é uma empresa
        especializada em Tecnologia e Informática, dedicada a fornecer soluções completas para
        empresas que procuram eficiência, segurança e continuidade operacional dos seus sistemas
        tecnológicos.
        Atuamos com profissionalismo, rapidez e foco em resultados, oferecendo suporte técnico
        especializado para pequenas, médias e grandes empresas.
        </p>
      </div>

      <div className="row g-4">
        {services.map((service, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
        
          <div className="card service-card h-100 border-0">

    <div className="card-body">

        <div className="service-icon">

            <i className={`fa-solid ${service.icon}`}></i>

        </div>

        <h4 className="card-title">
            {service.title}
        </h4>

        <ul className="list-unstyled mt-3">

            {service.items.map((item, i) => (

                <li key={i}>
                    <i className="fa-solid fa-circle-check me-2 text-primary"></i>
                    {item}
                </li>

            ))}

        </ul>

    </div>

</div>




          </div>
        ))}
      </div>
      <WebsiteServices/>
    </section>
  );
}