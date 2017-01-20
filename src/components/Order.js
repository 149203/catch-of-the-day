import React from 'react'
import { formatPrice } from '../helpers'

class Order extends React.Component {

   constructor() {
      super()
      this.renderOrder = this.renderOrder.bind(this)
   }

   renderOrder(key) {
      // this could be its own component
      const { fishes, order } = this.props
      const fish = fishes[ key ]
      const count = order[ key ]
      const isAvailable = fish && fish.status === 'available'

      if (isAvailable)
         return (
          <li key={key}>
             <span>{count}lbs {fish.name}</span>
             <span className="price">
             {formatPrice(count * fish.price)}
          </span>
          </li>
         )
      else return (
       <li key={key}>
          Sorry, {fish ? fish.name : 'fish'} is no longer available!
       </li>
      )
   }

   render() {
      const { fishes, order } = this.props
      const orderIds = Object.keys(order)
      const total = orderIds.reduce((prev, curr) => {
         const fish = fishes[ curr ]
         const count = order[ curr ]
         const isAvailable = fish && fish.status === 'available'
         // it exists and has 'available' status
         if (isAvailable) {
            return prev + (count * fish.price || 0)
         }
         else return prev
      }, 0) // prev starts at zero

      return (
       <div className="order-wrap">
          <h2>Your Order</h2>
          <ul className="order">
             {orderIds.map(this.renderOrder)}
             {/* instead of breaking into a separate component, we can make a separate method that will render inside. You pass the callback function instead of an anonymous arrow function like usual.*/}
             <li className="total">
                <strong>Total:</strong>
                {formatPrice(total)}
             </li>
          </ul>
       </div>
      )
   }
}

export default Order