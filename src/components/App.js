import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'
import Fish from './Fish'
import base from '../base'

class App extends React.Component {

   constructor() {
      super()

      // bind method to the component
      this.addFish = this.addFish.bind(this)
      this.loadSamples = this.loadSamples.bind(this)
      this.addToOrder = this.addToOrder.bind(this)

      // instead of getIntitalState()
      this.state = {
         fishes: {},
         order: {}
      }
   }

   componentWillMount() {
      // syncs once on client & server before component (App) mounts
      // this.x can be anything we want. we're assigning base.syncState to it because this is global and
      this.base_state = base.syncState(`${this.props.params.storeId}/fishes`,
       {
          context: this,
          state: 'fishes'
       }
      )
   }

   componentWillUnmount() {
      // removes the binding if you switch components
      base.removeBinding(this.base_state)
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Something changed!')
      console.log({nextProps, nextState})
   }

   addFish(fish) {
      // create a copy of the state obj we want and save to new const
      const fishes = { ...this.state.fishes }
      const timestamp = Date.now()
      // use bracket notation to create a property under fishes
      // set it equal to the fish argument we've passed in
      fishes[ `fish-${timestamp}` ] = fish

      // set state
      this.setState({ fishes }) // the ES6 way of saying {fishes: fishes}
   }

   loadSamples() {
      this.setState({
         fishes: sampleFishes
      })
   }

   addToOrder(fish) {
      const order = { ...this.state.order }
      order[ fish ] = order[ fish ] + 1 || 1
      this.setState({ order })
   }

   render() {
      const { fishes, order } = this.state // destructuring
      // Object.keys creates an array of object keys
      const keys_arr = Object.keys(fishes)
      return (
       <div className="catch-of-the-day">
          <div className="menu">
             <Header tagline="Fresh Seafood Market"/>
             <ul className="list-of-fishes">
                {keys_arr.map((fish, i) =>
                 <Fish key={i}
                       index={fish}
                       details={fishes[ fish ]}
                       addToOrder={this.addToOrder}
                  // bracket notation to find this fish in the state.fishes object
                 />)}

             </ul>
          </div>
          <Order fishes={fishes} order={order}/>
          <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
       </div>
      )
   }
}

export default App