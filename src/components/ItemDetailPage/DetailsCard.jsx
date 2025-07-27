import react from "react";
import { useState } from "react";
import right from "../../images/itemDetailPage/Vector(2).svg";
import DetailsCardStyles from "./DetailsCard.css";
import plusImage from "../../images/itemDetailPage/plus.svg";
import minusImage from "../../images/itemDetailPage/minus.svg";
import Switch from "./Switch";

const DetailsCard = ({ product }) => {
  const [count, setCount] = useState(1);

  const ProductPlus = () => {
    if (count < 12) {
      setCount(count + 1);
    } else {
      console.log("ERROR");
    }
  };

  const ProductMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      console.log("ERROR");
    }
  };

  const saveProductId = () => {
    // localStorage.removeItem("productIds") 
    const storedIds = JSON.parse(localStorage.getItem("productIds")) || [];
    if (!storedIds.includes(product.id)) {
      const updatedIds = [...storedIds, product.id];
      localStorage.setItem("productIds", JSON.stringify(updatedIds));
    }
    
  };

  return (
    <div className=" col-12   detail_box">
      <div className="d-flex gap-3 ps-lg-5 ps-sm-0 pt-4">
        <p className="minor_path">Products</p>
        <img src={right} alt="" />
        <p className="minor_path">Сlothes</p>
        <img src={right} alt="" />
        <p className="main_path">{product.name}</p>
      </div>

      <div className="col-md-12 d-flex flex-lg-row flex-sm-column flex-column detail_box">
        <div className="col-1 ps-5 gap-lg-4 gap-xxl-5 gap-2 col-md-2  d-lg-flex d-sm-none justify-content-md-between flex-lg-column flex-row ">
          <img className="col-11" src={product.image} alt="" />
          <img className="col-11" src={product.image} alt="" />
          <img className="col-11" src={product.image} alt="" />
        </div>

        <div className="col-12 col-lg-10 col-sm-12 ps-0 detail_box_item_info d-flex flex-row">
          <div className="d-flex flex-lg-row flex-sm-column flex-column col-lg-10 col-sm-12 col-12">
            <div className="col-lg-7 col-xxl-7 col-sm-12 col-12 d-flex ">
              <img
                className="col-12 col-lg-12 col-sm-12 "
                src={product.image}
                alt=""
              />
            </div>

            <div className="col-1 ps-sm-5  pt-5  gap-5 col-3 d-lg-none d-sm-flex d-flex  flex-row ">
              <img className="col-12" src={product.image} alt="" />
              <img className="col-12" src={product.image} alt="" />
              <img className="col-12" src={product.image} alt="" />
            </div>

            <div className="col-12 col-lg-6 col-xxl-7 ps-4 detail_box">
              <p className="productCardDetailName">One Life Graphic T-shirt</p>
              <p>{"⭐️".repeat(product.rating)}</p>

              <div className="d-flex flex-row">
                {product.discount > 0 ? (
                  <div className="d-flex flex-row" style={{ gap: 10 }}>
                    <p className="product_price">{product.price * count -
                      ((product.price * product.discount) / 100).toFixed(1)}</p>

                    <p className="product_price_with_discount">
                      {(product.price * count).toFixed(1) + "₽"}
                    </p>
                    <p className="product_discount_percent">
                      {product.discount + "%"}{" "}
                    </p>
                  </div>
                ) : (
                  <p className="product_price">{product.price + "₽"}</p>
                )}
              </div>

              <p>{product.description}</p>
              <hr />
              <p className="color_text">Select Colors</p>
              <div className="color_button_box">
                <button className="color_butoon1"></button>
                <button className="color_butoon2"></button>
                <button className="color_butoon3"></button>
              </div>

              <hr />

              <p className="color_text">Choose Size</p>

              <div className="d-flex gap-2 size_buttons">
                {product.availableSizes.map((size) => {
                  switch (size) {
                    case "M":
                      return <p className="col-2 sizes">Medium</p>;
                      break;

                    case "S":
                      return <p className="col-2 sizes">Small</p>;

                    case "L":
                      return <p className="col-2 sizes">Large</p>;

                    case "XL":
                      return <p className="col-3 sizes">X-Large</p>;

                    case "XXL":
                      return <p className="col-3 sizes">XX-Large</p>;
                    default:
                      break;
                  }
                  return <p className="col-2 sizes">{size}</p>;
                })}
              </div>
              <hr />

              <div className="col-11 d-flex gap-2">
                <div className="col-6 col-xxl-4 col-md-5 d-flex justify-content-around  product_count_box">
                  <button className="col-4 count_btn" onClick={ProductMinus}>
                    <img src={minusImage} alt="button-" />
                  </button>
                  <p className="col-1">{count}</p>
                  <button className="col-4 count_btn" onClick={ProductPlus}>
                    <img src={plusImage} alt="button+" />
                  </button>
                </div>
                {/* deddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd */}




                <button onClick={saveProductId} className="col-6 col-xxl-7 col-md-6 add_to_cart_button">
                  Add to Cart
                </button>

              </div>
            </div>
          </div>
        </div>


      </div>
      {/* <div className="col-12 d-flex justify-content-around detail_reviews_category ">
          
          <div className="col-4 d-flex flex-column justify-content-center  ">
            <h2 className="text-center">Product Details</h2>
            
          </div>

          <div className="col-4 d-flex flex-column justify-content-around detail_reviews_category">
            <h2 className="text-center">Rating & Reviews</h2>
           
          </div>

          <div className="col-4 d-flex flex-column justify-content-around detail_reviews_category">
            <h2 className="text-center">FAQs</h2>
           
          </div>
          
        </div> */}

      <Switch product={product} />
    </div>
  );
};

export default DetailsCard;
