import { useState, useEffect } from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
  // {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/img/image 1.jpg'},
  // {title: 'Мужские Кроссовки Nike Air Max 270', price: 11999, imageUrl: '/img/image 7.jpg'},
  // {title: 'Мужские Кроссовки Nike Blazer Mid Suede 2', price: 12999, imageUrl: '/img/image9.jpg'},
  // {title: 'Кроссовки Puma X Aka Boku Future Rider', price: 10999, imageUrl: '/img/image 5.jpg'},
]
function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cartOpened, setCartOpened] = useState(false)

  useEffect(() => {
    fetch('https://65c398c639055e7482c13885.mockapi.io/items').then((res) => {
      return res.json()
    }).then(json => {
      setItems(json);
    })
  }, [])

  const onAddToCard = (obj) => {
    setCartItems(prev => [...prev, obj])
    // console.log('cartItems', cartItems);
  }

  const onChangeSearchInput = (event) => {
    
    console.log()
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">
      { cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} /> }
      < Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block">
            <img src="/img/search.svg" />
            <input value={searchValue} onChange={onChangeSearchInput} type="text" placeholder="Поиск..." />
            <img src="/img/close.svg" alt= />
          </div>
        </div>
        <div className="sneakers d-flex flex-wrap">
        {
          items.map((item, index) => (
            <Card 
              key={index}
              title={item.title} 
              price={item.price} 
              imageUrl={item.imageUrl}
              onPlus={(obj) => onAddToCard(obj)}
              onClickFavorite={() => console.log('Favorite')}
            />
          ))
        }
          
        </div>
        
      </div>
    </div>
  );
}

export default App;
