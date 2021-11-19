import "./Policy.css";

function Policy() {
    return (
        <div className="product__toknow">
            <h2>Qué tenes que saber</h2>
            <hr />
            <div className="product__toknow-content">
                <div className="product__toknow-column">
                    <h3>Normas de la casa</h3>
                    <li>
                        <ul>Check-out:10:00</ul>
                        <ul>No se permiten fiestas</ul>
                        <ul>No fumar</ul>
                    </li>
                </div>
                <div className="product__toknow-column">
                    <h3>Salud y seguridad</h3>
                    <li>
                        <ul>Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus.</ul>
                        <ul>Detector de humo</ul>
                        <ul>Depósito de seguridad</ul>
                    </li>
                </div>
                <div className="product__toknow-column">
                    <h3>Política de cancelación</h3>
                    <li>
                        <ul>Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.</ul>
                    </li>
                    
                </div>
            </div>
        </div>
    )
}

export default Policy;