import services from "../../Data/services";

export default function Services() {
        return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h5 className="text-primary">SERVIÇOS</h5>
        <h2 className="fw-bold text-start">Nossos serviços</h2>
        <p className="text-muted">
         A F&A Tech cria websites profissionais e soluções digitais à medida das pequenas e médias empresas, combinando tecnologia, inovação e design para ajudar negócios a crescer online.

        </p>
      </div>

      <div className="row g-4">
        {services.map((service, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h4 className="card-title text-primary">
                  {service.title}
                </h4>

                <ul className="mt-3 list-unstyled">
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}