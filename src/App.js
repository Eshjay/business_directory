import React from 'react';
import BusinessList from '../src/components/BusinessList/BusinessList';
import SearchBar from '../src/components/SearchBar/SearchBar';
import './App.css';
import Yelp from '../src/util/Yelp'

// const business = {
//   imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
//   name: 'Shola Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90
// };

// const businesses = [business, business, business, business, business, business ]

class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        businesses: [],
      };

      this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy){
    Yelp.searchYelp(term, location, sortBy).then((businesses) =>{
      this.setState({ businesses: businesses });
    })
  }

  render() {
    return(
      <div className="App">
          <h1>ravenous</h1>
           <SearchBar searchYelp={this.searchYelp} />
           <BusinessList businesses={this.state.businesses} /> 
     </div>
    );
  }
}

export default App;
