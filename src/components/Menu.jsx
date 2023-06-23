import React from 'react'
import '../components/Menu.css'
import Products from './Products'

function Menu() {

  const products = [
    { id: '1', name: 'Robertson 750ml', price: 'R 85.50', image: 'https://media.takealot.com/covers_tsins/47753382/47753382-1-pdpxl.jpg' },
    { id: '2', name: 'Wine Merlot 750ml', price: ' R50.10', image: 'https://www.checkers.co.za/medias/10163177EA-checkers515Wx515H?context=bWFzdGVyfGltYWdlc3w3NjIzN3xpbWFnZS9wbmd8aW1hZ2VzL2gzZi9oYWQvMTA0MzI3NDQ5MTQ5NzQucG5nfGYyMWIxNTdjNDAxMTgxOThkOGM0NjkyOGRjM2ExOThmMDg0OTUwZmNmNjlhMTViN2FkMjU2MGRjMTBlYjNiNzk' },
    { id: '3', name: 'Sweet Red Wine 750ml', price: 'R58.20', image: 'https://www.shoprite.co.za/medias/10178859EA-checkers515Wx515H?context=bWFzdGVyfGltYWdlc3w5NDAwNnxpbWFnZS9wbmd8aW1hZ2VzL2g5Ni9oODcvMTAxNzYzODQ5NTg0OTQucG5nfDFjYWNhZDk0MjFlY2YyZjA0NDlkM2RjYjYyNTM2ZWQyZTI1MzY5N2U4NWYzMWY0ZmQyOTA1ZGI3Yjk4YzcwNTM' },
    { id: '4', name: 'Rupert & Rothschild', price: 'R 36.80', image: 'https://media.takealot.com/covers_tsins/56313778/56313778_1-pdpxl.jpg' },
    { id: '5', name: 'Kanonkop Kadette 750ml', price: 'R61.20', image: 'https://media.takealot.com/covers_images/fd376fe638264a49a747e2b6e4091d1e/s-pdpxl.file' },
    { id: '6', name: 'La Chanson Sparkling', price: 'R32.90', image: 'https://media.takealot.com/covers_images/d71f025af1774dfb848143c36940c089/s-pdpxl.file' },
    { id: '6', name: 'Nederburg - Baronne - 750ml', price: 'R32.90', image: 'https://media.takealot.com/covers_images/94abb276dfc04afbab51b97cf5a4d682/s-pdpxl.file' },
    { id: '6', name: 'Robertson Winery', price: 'R32.90', image: 'https://media.takealot.com/covers_tsins/45347329/45347329-13-pdpxl.jpg' },
]


    return (
        <div>

          <Products item={products}/>
        </div>

    )
}

export default Menu