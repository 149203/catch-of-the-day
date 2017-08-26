import Rebase from 're-base'

const base = Rebase.createClass({ // a connection to our Firebase db
   apiKey: "AIzaSyArUMOW34e4ZT_arRS0WBuHTt-MjxpIayk",
   authDomain: "catch-of-the-day-mike-ziethlow.firebaseapp.com",
   databaseURL: "https://catch-of-the-day-mike-ziethlow.firebaseio.com"
})

export default base // allows us to access base in any other file