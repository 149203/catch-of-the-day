import React from 'react'

const not_found_style = {
   textAlign: 'center'
}

class NotFound extends React.Component {
   render() {
      return (
       <p style={not_found_style}>NOT FOUND</p>
      )
   }
}

export default NotFound