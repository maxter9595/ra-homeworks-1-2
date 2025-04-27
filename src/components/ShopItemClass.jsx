import React from "react";
import "./ShopItemClass.css";

class ShopItemClass extends React.Component {
  render() {
    const { item } = this.props;
    const formattedPrice = `${item.currency}${item.price.toFixed(2)}`;

    return (
      <div className="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title.toUpperCase()}</h1>
        <h3>{item.description.toUpperCase()}</h3>
        <div className="description">
          {item.descriptionFull.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{formattedPrice}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

export default ShopItemClass;
