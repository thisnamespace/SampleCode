import React from "react";
import styled from "styled-components";

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
  }

  getProducts = () => {
    let products = [
      {
        size: ["XS", "S", "L", "XL"],
        productName: "Striped shirt",
        productImage: "product-1.jpg",
        price: "$18.88",
        isExclusive: false,
        isSale: true,
        index: 0
      },
      {
        size: ["XS", "S"],
        productName: "Denim shirt",
        productImage: "product-2.jpg",
        price: "$25.44",
        isExclusive: false,
        isSale: false,
        index: 1
      },
      {
        size: ["S", "M"],
        productName: "Plain cotton t-shirt",
        productImage: "product-3.jpg",
        price: "$12.93",
        isExclusive: true,
        isSale: false,
        index: 2
      },
      {
        size: ["XL"],
        productName: "Plain 3/4 sleeve cotton t-shirt",
        productImage: "product-4.jpg",
        price: "$26.32",
        isExclusive: false,
        isSale: false,
        index: 3
      },
      {
        size: ["M", "L"],
        productName: "White dress shirt",
        productImage: "product-5.jpg",
        price: "$12.16",
        isExclusive: false,
        isSale: false,
        index: 4
      },
      {
        size: ["XS", "S", "M"],
        productName: "Long Sleeve Skivvy Top",
        productImage: "product-6.jpg",
        price: "$30.27",
        isExclusive: false,
        isSale: false,
        index: 5
      },
      {
        size: ["M", "L", "XL"],
        productName: "Puffer Vest with Hood",
        productImage: "product-7.jpg",
        price: "$24.26",
        isExclusive: false,
        isSale: true,
        index: 6
      },
      {
        size: ["XS", "S", "XL"],
        productName: "Funnel Neck Swing Top",
        productImage: "product-8.jpg",
        price: "$17.73",
        isExclusive: true,
        isSale: false,
        index: 7
      }
    ];
    return products;
  };

  render() {
    return (
      <>
        <Header>
          <h1>Women's Tops</h1>
          <select>
            <option value="">Filter by Size</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
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
