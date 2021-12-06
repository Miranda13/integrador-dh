
import notFoundImage from '../../src/assets/images/notfound.jpg';
import "./NotFoundPage.css";
export default function NotFound() {
    return (
        <div className="page-not-found">
            <div className="wrapper">
                <div className="content-superior">
                    <img src={notFoundImage} alt="maletas de viaje" />
                    <div className="page-not-found__info">
                        <h1 className="page-not-found__info__status">404</h1>
                        <h3 className='page-not-found__info__message'>No hemos podido encontrar la página que buscas</h3>
                    </div>
                </div>
            </div>
        </div>

    );
}