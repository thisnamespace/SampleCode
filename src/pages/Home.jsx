import React from "react";
import styled from "styled-components";

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

const ProductGrid = styled.section`
  display: flex;
  min-width: 0;
  flex-wrap: wrap;
  border: 1px rgb(225, 225, 225) solid;
  border-bottom: none;
  border-right: none;
`;

const ProductItem = styled.div`
  flex-direction: column;
  box-sizing: border-box;
  border: 1px rgb(225, 225, 225) solid;
  border-top: none;
  border-left: none;
  padding: 2em 0.5em;
  flex: 0 1 100%;
  max-width: 100%;
  @media (min-width: 720px) {
    max-width: 50%;
  }
  @media (min-width: 1024px) {
    max-width: 33.33%;
  }
  @media (min-width: 1280px) {
    max-width: 25%;
  }
  img {
    display: block;
    margin: auto;
  }
`;

const ProductBadgeHolder = styled.div`
  height: 50px;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: baseline;
`;

const ProductName = styled.span`
  flex-grow: 1;
  font-size: 1.5rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductPrice = styled.span`
  font-size: 2.25rem;
  padding-left: 0.5em;
  font-weight: bold;
`;

const ProductBadge = styled.span`
  color: #fff;
  display: inline-block;
  background: ${props => (props.background ? props.background : "#cc3333")};
  padding: 1em 1.5em;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        this.setState({ products });
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
    return (
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
        <ProductGrid>
          {this.getProducts().map((product, i) => (
            <ProductItem key={i}>
              <img
                src={"src/assets/" + product.productImage}
                alt={product.productName}
              />
              <ProductBadgeHolder>
                {product.isSale && <ProductBadge>Sale</ProductBadge>}
                {product.isExclusive && (
                  <ProductBadge background="#009900">Exclusive</ProductBadge>
                )}
              </ProductBadgeHolder>
              <ProductInfo>
                <ProductName title={product.productName}>
                  {product.productName}
                </ProductName>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductInfo>
            </ProductItem>
          ))}
        </ProductGrid>
      </>
    );
  }
}

export default Home;
