export default function Drawer() {
    return (
        <div style={{ display: "none" }} className="overlay">
            <div className="drawer">
                <h2 className="mb-30  d-flex justify-between">
                    Корзина{closeSvg}
                </h2>

                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <img
                            className="cartItemImg"
                            width={70}
                            height={70}
                            src="/img/image 5.jpg"
                            alt=""
                        />
                        <div className="ml-20 mr-20">
                            <p className="mb-5">
                                Мужские Кроссовки Nike Blazer Mid Suede
                            </p>
                            <b>12 999 руб.</b>
                        </div>
                        {closeSvg}
                    </div>

                    <div className="cartItem d-flex align-center mb-20">
                        <img
                            className="cartItemImg"
                            width={70}
                            height={70}
                            src="/img/image 7.jpg"
                            alt=""
                        />
                        <div className="ml-20 mr-20">
                            <p className="mb-5">
                                Мужские Кроссовки Nike Blazer Mid Suede
                            </p>
                            <b>12 999 руб.</b>
                        </div>
                        {closeSvg}
                    </div>
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
                        <svg
                            width="16"
                            height="14"
                            viewBox="0 0 16 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 7H14.7143"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M8.71436 1L14.7144 7L8.71436 13"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
