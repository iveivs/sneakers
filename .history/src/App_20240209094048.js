// import './App.css';
// import heartImg from "/img/heart_gray.svg"

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/image 4.png" alt="" />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кросовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
          
          <img width={8} height={8} src={heartImg} src alt="" />
            <span>1205 rub</span>
          </li>
          <li>
            <svg />
          </li>
        </ul>
      </header>
      <h1>Все кроссовки</h1>
      ....
    </div>
  );
}

export default App;
