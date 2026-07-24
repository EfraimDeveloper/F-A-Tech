import websiteServices from "../../Data/websiteServices";

export default function WebsiteServices() {

  return (
    <section className="container py-5">

      <div className="text-center mb-5">
        <h5 className="text-primary">
          SITE TOTALMENTE FUNCIONAL
        </h5>

        <h2 className="fw-bold">
          Serviços de Website
        </h2>
      </div>


      <div className="row g-4">

        {websiteServices.map((service, index) => (

          <div className="col-md-6 col-lg-4" key={index}>

            <div className="card h-100 shadow-sm border-0">

              <div className="card-body">
                
              <img src={service.img} alt={service.img} />
               
                <h4 className="text-primary">
                  {service.title}
                </h4>

                <h6>
                  {service.subtitle}
                </h6>

                <p className="text-muted">
                  {service.description}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}