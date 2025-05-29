import react from "react";
import ProductStyles from "./ProductStyle.css";
const ProductComponent = ({ product }) => {
  return (
    <div className="col-12 d-flex flex-column justify-content-center ps-5  ">
      <div>
        <img className="col-11 product_images" src={product.image} alt="" />
      </div>

      <div className="d-flex flex-column justify-content-start">
        <p className="product_name">{product.name}</p>

        <p>{"⭐️".repeat(product.rating)}</p>

        <div className="d-flex flex-row">
          {product.discount > 0 ? (
            <div className="d-flex flex-row" style={{ gap: 10 }}>
              <p className="product_price">{product.price + "₽"}</p>

              <p className="product_price_with_discount">
                {product.price -
                  ((product.price * product.discount) / 100).toFixed(2)}
                ₽
              </p>
              <p className="product_discount_percent">
                {product.discount + "%"}{" "}
              </p>
            </div>
          ) : (
            <p className="product_price">{product.price + "₽"}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
