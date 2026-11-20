import { useState } from 'react'
import './cart.css'

const products = [
  { name: 'Laptop', price: 899, icon: '💻' },
  { name: 'Mouse', price: 24.99, icon: '🖱️' },
  { name: 'Keyboard', price: 59.99, icon: '⌨️' },
  { name: 'Monitor', price: 229, icon: '🖥️' },
  { name: 'Headphones', price: 79.99, icon: '🎧' },
  { name: 'Webcam', price: 49.99, icon: '📷' },
]

function Cart() {
  const [cartCount, setCartCount] = useState(0)

  return (
    <main className="cart-page">
      <header className="cart-heading">
        <div>
          <p className="store-name">TechCart</p>
          <h1>Products</h1>
        </div>
        <p className="cart-count" aria-live="polite">
          Cart: {cartCount}
        </p>
      </header>

      <section className="product-list" aria-label="Available products">
        {products.map((product) => (
          <article className="product-card" key={product.name}>
            <div className="product-icon" aria-hidden="true">
              {product.icon}
            </div>
            <h2>{product.name}</h2>
            <p className="product-price">₹{product.price.toFixed(2)}</p>
            <button
              className="add-to-cart"
              type="button"
              onClick={() => setCartCount((count) => count + 1)}
            >
              Add to Cart
            </button>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Cart
