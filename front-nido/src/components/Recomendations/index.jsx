
import Card from "./Card";
import './styles/Card.css';
import ContentLoader from 'react-content-loader';
function Recomendations({ products, isLoadingProducts, pages, handleChangePage, currentPage }) {
    const handleClickNumberPage = (e) => {
        handleChangePage(e.target.textContent)
    }
    const handleClickPrevPage = (e) => {
        if (currentPage > 1) {
            handleChangePage(currentPage - 1)
        }
    }
    const handleClickNextPage = (e) => {
        if (currentPage < pages) {
            handleChangePage(currentPage + 1)
        }
    }
    return (
        <div className="recommendation">
            <h2 className="title-recommendation">Recomendaciones</h2>
            <div className="cards">

                {
                    isLoadingProducts ? <><ContentLoader
                        width={700}
                        height={300}
                        viewBox="0 0 700 300"
                        backgroundColor="#f5f5f5"
                        foregroundColor="#dbdbdb"
                    >
                        <rect x="4" y="8" rx="3" ry="3" width="7" height="288" />
                        <rect x="6" y="289" rx="3" ry="3" width="669" height="8" />
                        <rect x="670" y="9" rx="3" ry="3" width="6" height="285" />
                        <rect x="55" y="42" rx="16" ry="16" width="274" height="216" />
                        <rect x="412" y="113" rx="3" ry="3" width="102" height="7" />
                        <rect x="402" y="91" rx="3" ry="3" width="178" height="6" />
                        <rect x="405" y="139" rx="3" ry="3" width="178" height="6" />
                        <rect x="416" y="162" rx="3" ry="3" width="102" height="7" />
                        <rect x="405" y="189" rx="3" ry="3" width="178" height="6" />
                        <rect x="5" y="8" rx="3" ry="3" width="669" height="7" />
                        <rect x="406" y="223" rx="14" ry="14" width="72" height="32" />
                        <rect x="505" y="224" rx="14" ry="14" width="72" height="32" />
                        <rect x="376" y="41" rx="3" ry="3" width="231" height="29" />
                    </ContentLoader>
                        <ContentLoader
                            width={700}
                            height={300}
                            viewBox="0 0 700 300"
                            backgroundColor="#f5f5f5"
                            foregroundColor="#dbdbdb"
                        >
                            <rect x="4" y="8" rx="3" ry="3" width="7" height="288" />
                            <rect x="6" y="289" rx="3" ry="3" width="669" height="8" />
                            <rect x="670" y="9" rx="3" ry="3" width="6" height="285" />
                            <rect x="55" y="42" rx="16" ry="16" width="274" height="216" />
                            <rect x="412" y="113" rx="3" ry="3" width="102" height="7" />
                            <rect x="402" y="91" rx="3" ry="3" width="178" height="6" />
                            <rect x="405" y="139" rx="3" ry="3" width="178" height="6" />
                            <rect x="416" y="162" rx="3" ry="3" width="102" height="7" />
                            <rect x="405" y="189" rx="3" ry="3" width="178" height="6" />
                            <rect x="5" y="8" rx="3" ry="3" width="669" height="7" />
                            <rect x="406" y="223" rx="14" ry="14" width="72" height="32" />
                            <rect x="505" y="224" rx="14" ry="14" width="72" height="32" />
                            <rect x="376" y="41" rx="3" ry="3" width="231" height="29" />
                        </ContentLoader>
                        <ContentLoader
                            width={700}
                            height={300}
                            viewBox="0 0 700 300"
                            backgroundColor="#f5f5f5"
                            foregroundColor="#dbdbdb"
                        >
                            <rect x="4" y="8" rx="3" ry="3" width="7" height="288" />
                            <rect x="6" y="289" rx="3" ry="3" width="669" height="8" />
                            <rect x="670" y="9" rx="3" ry="3" width="6" height="285" />
                            <rect x="55" y="42" rx="16" ry="16" width="274" height="216" />
                            <rect x="412" y="113" rx="3" ry="3" width="102" height="7" />
                            <rect x="402" y="91" rx="3" ry="3" width="178" height="6" />
                            <rect x="405" y="139" rx="3" ry="3" width="178" height="6" />
                            <rect x="416" y="162" rx="3" ry="3" width="102" height="7" />
                            <rect x="405" y="189" rx="3" ry="3" width="178" height="6" />
                            <rect x="5" y="8" rx="3" ry="3" width="669" height="7" />
                            <rect x="406" y="223" rx="14" ry="14" width="72" height="32" />
                            <rect x="505" y="224" rx="14" ry="14" width="72" height="32" />
                            <rect x="376" y="41" rx="3" ry="3" width="231" height="29" />
                        </ContentLoader>
                        <ContentLoader
                            width={700}
                            height={300}
                            viewBox="0 0 700 300"
                            backgroundColor="#f5f5f5"
                            foregroundColor="#dbdbdb"
                        >
                            <rect x="4" y="8" rx="3" ry="3" width="7" height="288" />
                            <rect x="6" y="289" rx="3" ry="3" width="669" height="8" />
                            <rect x="670" y="9" rx="3" ry="3" width="6" height="285" />
                            <rect x="55" y="42" rx="16" ry="16" width="274" height="216" />
                            <rect x="412" y="113" rx="3" ry="3" width="102" height="7" />
                            <rect x="402" y="91" rx="3" ry="3" width="178" height="6" />
                            <rect x="405" y="139" rx="3" ry="3" width="178" height="6" />
                            <rect x="416" y="162" rx="3" ry="3" width="102" height="7" />
                            <rect x="405" y="189" rx="3" ry="3" width="178" height="6" />
                            <rect x="5" y="8" rx="3" ry="3" width="669" height="7" />
                            <rect x="406" y="223" rx="14" ry="14" width="72" height="32" />
                            <rect x="505" y="224" rx="14" ry="14" width="72" height="32" />
                            <rect x="376" y="41" rx="3" ry="3" width="231" height="29" />
                        </ContentLoader>
                    </>
                        :
                        products.length === 0 ?
                            <h3 style={{ "color": "var(--medium-color)" }}>Por el momento no contamos con establecimientos con esa caracteristica</h3>
                            :
                            products.map(card => {
                                return (<Card key={card.productId} card={card} />)
                            })
                }
            </div>
            <div className="pagination">
                <div className="pagination-content">
                    <div className="pagination-content__btn-prev">
                        <button onClick={handleClickPrevPage} className={currentPage <= 1 ? "inactive" : ""} type="button">
                            <span className="pagination-content__btn-prev__icon">
                                <i className="fas fa-chevron-left"></i>
                            </span>
                        </button>
                    </div>
                    <div className="pagination-content__pages">
                        <ol className="pagination-content__number-pages">
                            {
                                Array(pages).fill(0).map((page, index) => {
                                    if (index + 1 <= pages) {
                                        let activePage = currentPage === index + 1 ? "pagination-content__number-pages__element active" : "pagination-content__number-pages__element";
                                        return (<li>
                                            <button onClick={handleClickNumberPage} key={page + index} type="button" className={activePage}>{index + 1}</button>
                                        </li>)
                                    }
                                })
                            }
                        </ol>
                    </div>
                    <div className="pagination-content__btn-next">
                        <button onClick={handleClickNextPage} className={currentPage >= pages ? "inactive" : ""} type="button">
                            <span className="pagination-content__btn-next__icon">
                                <i className="fas fa-chevron-right"></i>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recomendations;