import React from 'react'
import AddFishForm from './AddFishForm'

class Inventory extends React.Component {

   render() {
      const props = this.props
      return (
       <div>
          <h2>Inventory</h2>
          <AddFishForm addFish={props.addFish}/>
          <button onClick={props.loadSamples}>Load Sample Fishes</button>
       </div>
      )
   }
}

export default Inventory