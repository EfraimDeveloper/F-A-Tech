import "./site.css";
export default function Sites() {
  return (
    <div className="site">
      <div className="container">
        <div className="row">

          {/* Não mexer nesta coluna */}
          <div className="col-sm-6">
           <img
          src="https://files.expub.net/Content/Archive/47/Realestate-Webdesign-pattaya-823614.png"
          alt="Site Imobiliário"
          className="img-fluid"
        />
          </div>

          <div className="col-sm-6">
            <span className="text-primary fw-bold">PRONTO</span>

            <h1 className="my-3">
              SITES DE <strong>IMÓVEIS</strong>
            </h1>

            <p className="text-muted">
              Webdesign imobiliário em Pattaya
            </p>

            <div className="car mb-4">
              <h3>Design visualmente atraente</h3>
              <p>
                O site deve ter um design profissional e moderno,
                visualmente atraente para potenciais clientes.
              </p>
            </div>

            <div className="car mb-4">
              <h3>Navegação fácil de usar</h3>
              <p>
                O site deve ser fácil de navegar, com menus e
                ferramentas de pesquisa claros e intuitivos.
              </p>
            </div>

            <div className="car mb-4">
              <h3>Design otimizado para dispositivos móveis</h3>
              <p>
                O site adapta-se perfeitamente a diferentes tamanhos
                de ecrã, incluindo computadores, tablets e smartphones.
              </p>
            </div>

            <div className="car mb-4">
              <h3>Site imobiliário repleto de recursos</h3>
              <p>
                Uma plataforma completa para compra, venda e aluguer
                de imóveis, com ferramentas avançadas de pesquisa,
                apresentação de propriedades e gestão de anúncios.
              </p>
            </div>
            <a href="#contact">
            <button className="btn btn-primary btn-lg mb-3">
              VAMOS COMEÇAR!
            </button>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}