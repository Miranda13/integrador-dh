import "./Policy.css";

function Policy({ list }) {
    return (
        <div className="product__toknow">
            <h2>Qué tenes que saber</h2>
            <hr />
            <div className="product__toknow-content">
                <div className="product__toknow-column">
                    <h3>Normas de la casa</h3>
                    <ul>
                        <li>{list?.rule}</li>
                    </ul>
                </div>
                <div className="product__toknow-column">
                    <h3>Salud y seguridad</h3>
                    <ul>
                        <li>{list?.safety}</li>
                    </ul>
                </div>
                <div className="product__toknow-column">
                    <h3>Política de cancelación</h3>
                    <ul>
                        <li>{list?.policy}</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Policy;