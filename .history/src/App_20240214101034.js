import Card from "./components/Card";
import Header from "./components/Header";

const closeSvg = <svg className="removeBtn" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
<path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
</svg>
function App() {
  return (
    <div className="wrapper clear">
    <div  className="overlay">
      <div className="drawer">
        <h2 className="mb-30  d-flex justify-between">Корзина{closeSvg}</h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <img className="cartItemImg" width={70} height={70} src="/img/image 5.jpg" alt="" />
            <div className="ml-20 mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            {closeSvg}
          </div>
          
          <div className="cartItem d-flex align-center mb-20">
            <img className="cartItemImg" width={70} height={70} src="/img/image 7.jpg" alt="" />
            <div className="ml-20 mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            {closeSvg}
          </div>

        </div>
        
        <div className="cartTotalBlock">
          <ul>
            <li >
              <span>Итого</span>
              <div></div>
              <b>21.498</b>
            </li>

            <li >
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            <span>Оформить заказ</span>
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7H14.7143" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </button>
        </div>
        
      </div>
    </div>
    
    
      < Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <input type="text" placeholder="Поиск" />
          </div>
        </div>
        <div className="sneakers d-flex">

          <Card  />
        </div>
        
      </div>
    </div>
  );
}

export default App;
