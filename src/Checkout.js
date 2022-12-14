import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
function Checkout() {
  const [{basket},dispatch]= useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img src="https://www.mydrinkbeverages.com/wp-content/uploads/bfi_thumb/beer-210197_1280-2z3mo2ovakhjet5y99gey0sm7m34grtk7w7c3vrysfqc86jgg.jpg" alt="" className='checkout__ad'/>
            <div>
                <h2 className='checkout__title'>Your Shopping</h2>
                {
                    basket.map(item=>(
                      <CheckoutProduct
                      id ={item.id}
                      title = {item.title}
                      image = {item.image}
                      price = {item.price}
                      rating = {item.rating}
                      />
                        

                    ))
                }
            </div>
        </div>
        <div className='checkout__right'>
     <Subtotal/>
        </div>

       
    </div>
  )
}

export default Checkout