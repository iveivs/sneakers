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
  const [cartItems, setCartItems] = useState([
    // {title: 'Мужские Кроссовки Nike Blazer Mid Suede 2', price: 11999, imageUrl: '/img/image9.jpg'},
    // {title: 'Кроссовки Puma X Aka Boku Future Rider', price: 10999, imageUrl: '/img/image 1.jpg'},
  ])
  const [cartOpened, setCartOpened] = useState(false)

  useEffect(() => {
    fetch('https://65c398c639055e7482c13885.mockapi.io/items').then((res) => {
      return res.json()
    }).then(json => {
      setItems(json);
    })
  }, [])

  const onAddToCard = (obj) => {
    cartItems.filter(elem)
    setCartItems(prev => [...prev, obj])
    
  }

  return (
    <div className="wrapper clear">
      { cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} /> }
      < Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z" stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers d-flex flex-wrap">
        {
          items.map((item) => (
            <Card 
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
