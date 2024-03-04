// import './App.css';

function App() {
  return (
    <div className="wrapper clear">
    <div className="overlay">
      <div className="drawer">
        <h2>Корзина</h2>
        <div className="cartItem d-flex align-center">
          <img className="cartItemImg" width={70} height={70} src="/img/image 5.jpg" alt="" />
          <div className="ml-20 mr-20">
            <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <b>12 999 руб.</b>
          </div>
          <svg className="removeBtn" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
              <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
            </svg>
        </div>
      </div>
    </div>
    
    
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center ">
          {/* <img width={40} height={40} src="/img/image 4.png" alt="" /> */}
          <img width={40} height={40} src="/img/logo.png" alt="" />
          <div>
            <h3 className="text-uppercase">Sneakers Buy</h3>
            <p className="opacity-5">Лучший выбор</p>
          </div>
        </div>
        <ul className="headerRight d-flex">
          <li className="mr-30">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091" stroke="#9B9B9B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <span className="opacity-6">1205 rub</span>
          </li>
          <li>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 9C0 4.1211 4.1211 0 9 0C13.8789 0 18 4.1211 18 9C18 11.871 16.5672 14.4702 14.4 16.1316V16.2H14.3082C12.807 17.3205 10.9683 18 9 18C7.0317 18 5.193 17.3205 3.6918 16.2H3.6V16.1316C1.4328 14.4702 0 11.8701 0 9ZM6.41112 13.7124C5.93239 14.0975 5.59923 14.6344 5.4666 15.2343C6.5178 15.8436 7.7256 16.2 9 16.2C10.2744 16.2 11.4822 15.8436 12.5334 15.2343C12.4006 14.6344 12.0674 14.0977 11.5887 13.7126C11.11 13.3275 10.5144 13.1169 9.9 13.1157H8.1C7.48557 13.1168 6.88986 13.3272 6.41112 13.7124ZM12.391 12.0705C13.129 12.5617 13.7057 13.2596 14.049 14.0769C15.3693 12.7638 16.2 10.9584 16.2 9C16.2 5.0967 12.9033 1.8 9 1.8C5.0967 1.8 1.8 5.0967 1.8 9C1.8 10.9584 2.6307 12.7638 3.951 14.0769C4.2943 13.2596 4.87104 12.5617 5.60904 12.0705C6.34704 11.5794 7.21351 11.3168 8.1 11.3157H9.9C10.7865 11.3168 11.653 11.5794 12.391 12.0705ZM5.40001 7.2C5.40001 5.148 6.94801 3.6 9.00001 3.6C11.052 3.6 12.6 5.148 12.6 7.2C12.6 9.252 11.052 10.8 9.00001 10.8C6.94801 10.8 5.40001 9.252 5.40001 7.2ZM7.20001 7.2C7.20001 8.2602 7.93981 9 9.00001 9C10.0602 9 10.8 8.2602 10.8 7.2C10.8 6.1398 10.0602 5.4 9.00001 5.4C7.93981 5.4 7.20001 6.1398 7.20001 7.2Z" fill="#9B9B9B"/>
          </svg>
          </li>
        </ul>
      </header>
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


          <div className="card">
            <div className="favorite">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="31" height="31" rx="6.5" fill="white" stroke="#F8F8F8"/>
                <path d="M21.8609 11.0746C21.5204 10.7339 21.1161 10.4636 20.6711 10.2793C20.2261 10.0949 19.7492 10 19.2675 10C18.7859 10 18.3089 10.0949 17.864 10.2793C17.419 10.4636 17.0147 10.7339 16.6742 11.0746L15.9675 11.7812L15.2609 11.0746C14.5731 10.3868 13.6402 10.0004 12.6675 10.0004C11.6948 10.0004 10.762 10.3868 10.0742 11.0746C9.3864 11.7623 9 12.6952 9 13.6679C9 14.6406 9.3864 15.5734 10.0742 16.2612L10.7809 16.9679L15.9675 22.1546L21.1542 16.9679L21.8609 16.2612C22.2015 15.9207 22.4718 15.5164 22.6561 15.0715C22.8405 14.6265 22.9354 14.1495 22.9354 13.6679C22.9354 13.1862 22.8405 12.7093 22.6561 12.2643C22.4718 11.8193 22.2015 11.4151 21.8609 11.0746Z" stroke="#EAEAEA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            <img width={133} height={112} src="/img/image 5.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена</span>
                <b> 12 999 руб.</b>
              </div>
              <button className="button">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="card">
          <img width={133} height={112} src="/img/image 3.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена</span>
              <b> 12 999 руб.</b>
            </div>
            <button className="button">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
              </svg>
            </button>
          </div>
        </div>


        <div className="card">
          <img width={133} height={112} src="/img/image 2.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена</span>
              <b> 12 999 руб.</b>
            </div>
            <button className="button">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
              </svg>
            </button>
          </div>
        </div>


        <div className="card">
          <img width={133} height={112} src="/img/image 1.jpg" alt="" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена</span>
              <b> 12 999 руб.</b>
            </div>
            <button className="button">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/>
              </svg>
            </button>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
