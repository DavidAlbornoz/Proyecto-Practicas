
import data from './data';
function App() {
    return (
        <div className="grid- container">

            <header className="row">
                <div>
                    <a className="brand" href="/">Las Ex del DT</a>
                </div>
                <div>
                    <a href="/cart">Carrito</a>
                    <a href="/sign">Registrarse</a>
                </div>
            </header>
            <main>
                <div className="row center">
                    {   data.products.map((products) => (
                            <div key={products._id} className="card">
                                <a href={`/product/${products._id}`}>
                                    <img className="medium" 
                                    src={products.image} 
                                    alt={products.name}
                                    />
                                </a>
                                <div className="card-body"></div>
                                <a href={`/product/${products._id}`}>
                                    <h2>{products.name}</h2>
                                </a>
                                <div className="rating">
                                    <span> <i className="fa fa-star"></i></span>
                                    <span> <i className="fa fa-star"></i></span>
                                    <span> <i className="fa fa-star"></i></span>
                                    <span> <i className="fa fa-star"></i></span>
                                </div>
                                <div className="price">
                                    {products.price}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </main>
            <footer className="row center">Todos los derechos reservados</footer>
        </div>
    );
}

export default App;
