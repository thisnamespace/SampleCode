import React from "react";
import { fetch } from "whatwg-fetch";
import styled from "styled-components";

import Products from "./../components/Products.jsx";
import { Loader } from "./../components/Loader.jsx"
import sizes from "./../const/sizes";

const Header = styled.header`
  background: #def1f4;
  display: flex;
  align-items: center;
  padding: 0.5em;
  margin-bottom: 1em;
  h1 {
    flex-grow: 1;
  }
  select {
    font-size: 1em;
    height: 28px;
    width: 50px;
    @media (min-width: 450px) {
      width: 100px;
    }
    @media (min-width: 720px) {
      width: 200px;
    }
  }
`;


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      filter: "",
      products: []
    };
  }

  componentDidMount() {
    fetch("https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3")
      .then(response => {
        return response.json();
      })
      .then(products => {

        this.setState({ products, loading: false });
      });
  }

  getProducts = () => {
    if (this.state.filter == "") return this.state.products;
    return this.state.products.filter(elem => {
      return elem.size.includes(this.state.filter);
    });
  };

  onFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    console.log(this.state);
    return (
      //React fragment lets you group a list of children without adding extra nodes to the DOM.
      <>
        <Header>
          <h1>Women's Tops</h1>
          <select onChange={this.onFilterChange} value={this.state.filter}>
            <option value="">Filter by Size</option>
            {sizes.map((size, i) => (
              <option key={i} value={size}>{size}</option>
            ))}
          </select>
        </Header>
        {!this.state.loading ?
          <Products items={this.getProducts()} />
          : <Loader />
        }
      </>
    );
  }
}

export default Home;