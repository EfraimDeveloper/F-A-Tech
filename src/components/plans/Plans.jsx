import plans from "../../Data/plans";
import "./plans.css";
export default function Plans() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold mb-5 text-start">
          Planos Empresariais
        </h2>

        <div className="row g-4">
          {plans.map((plan) => (
            <div className="col-md-6 col-lg-4" key={plan.title}>
              <div className="card plan-card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title text-primary fw-bold">
                    {plan.title}
                  </h4>

                  <p className="text-muted">{plan.subtitle}</p>

                    <ul className="list-group list-group-flush">
            {plan.items.map((item, index) => (
                <li key={index} className="list-group-item border-0">
                <i className="fa-solid fa-circle-check text-success me-2"></i>
                {item}
                </li>
            ))}
            </ul>
<a href="#contact" className="btn btn-primary mt-auto text-white text-decoration-none">
    Solicitar Orçamento
</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}