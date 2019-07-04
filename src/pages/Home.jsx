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
    width: 200px;
  }
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
        <div>
          {this.getProducts().map((product, i) => (
            <div key={i}>
              <img src={product.productImage} alt={product.productName} />
              <div>
                {product.isSale && <span>Sale</span>}
                {product.isExclusive && <span>Exclusive</span>}
              </div>
              <div>
                <span title={product.productName}>{product.productName}</span>
                <span>{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Home;
