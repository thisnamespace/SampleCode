import React from "react";
import styled from "styled-components";

const ProductGrid = styled.section`
  display: flex;
  flex: 1 1 0;
  min-width: 0;
  flex-wrap: wrap;
  align-items: space-evenly;
  border: 1px rgb(225, 225, 225) solid;
  border-bottom: none;
  border-right: none;
`;

const ProductItem = styled.div`
  flex-direction: column;
  padding: 2em 0.5em;
  box-sizing: border-box;
  border: 1px rgb(225, 225, 225) solid;
  border-top: none;
  border-left: none;
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

const ProductButtons = styled.div`
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

class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ProductGrid>
          {this.props.items.map((product, i) => (
            <ProductItem key={i}>
              <img
                src={"src/assets/" + product.productImage}
                alt={product.productName}
              />
              <ProductButtons>
                {product.isSale && <ProductBadge>Sale</ProductBadge>}
                {product.isExclusive && (
                  <ProductBadge background="#009900">Exclusive</ProductBadge>
                )}
              </ProductButtons>
              <ProductInfo>
                <ProductName title={product.productName}>
                  {product.productName}
                </ProductName>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductInfo>
            </ProductItem>
          ))}
          {this.props.items.length == 0 && 
            <span>No items available</span> 
          }
      </ProductGrid>
    );
  }
}

export default Products;