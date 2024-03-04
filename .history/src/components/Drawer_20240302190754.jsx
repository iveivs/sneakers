
export default function Drawer(props) {
    // const closeSvg = <svg className="removeBtn" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                     <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
    //                     <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
    //                 </svg>

    const arrowBtn = <svg
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 7H14.7143"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8.71436 1L14.7144 7L8.71436 13"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
    return (
        <div   className="overlay">
            <div className="drawer">
                <h2 className="mb-30  d-flex justify-between">
                    Корзина <img src="/img/close.svg" />
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
                        {/* {closeSvg} */}
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
                        {/* {closeSvg} */}
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
                        {arrowBtn}
                    </button>
                </div>
            </div>
        </div>
    );
}
