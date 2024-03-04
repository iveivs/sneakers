
export default function Drawer({ onClose, items =[] }) {
    return (
        <div  className="overlay">
            <div className="drawer">
                <h2 className="mb-30  d-flex justify-between">
                    Корзина <img onClick={onClose} src="/img/close.svg" />
                </h2>

                <div className="items">
                    {
                        items.map((obj) => (
                            <div key={obj.title} className="cartItem d-flex align-center mb-20">
                                <img
                                    className="cartItemImg"
                                    width={70}
                                    height={70}
                                    src={obj.imageUrl}
                                    alt=""
                                />
                                {/* <div 
                                    style={{ backgroundImage: `url(${obj.imageUrl})`}}
                                    className="cartItemImg"
                                    >
                                </div> */}
                                <div className="ml-20 mr-20">
                                    <p className="mb-5">
                                        {obj.title}
                                    </p>
                                    <b>{obj.price}</b>
                                </div>
                                <img src="/img/close.svg" />
                            </div>
                            )
                        )
                    }
                    
                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого</span>
                            <div></div>
                            <b>21.498</b>
                        </li>

                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <button className="greenButton">
                        <span>Оформить заказ</span>
                        <img src="/img/arrow.svg" />
                    </button>
                </div>
            </div>
        </div>
    );
}
