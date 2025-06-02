import react from "react";
import right from "../../images/itemDetailPage/Vector(2).svg";
import DetailsCardStyles from "./DetailsCard.css";
const DetailsCard = ({ product }) => {
  return (
    <div>
      <div className="d-flex">
        <p className="minor_path">Home</p>
        <img src={right} alt="" />
        <p className="minor_path">Men</p>
        <img src={right} alt="" />
        <p className="main_path">{product.name}</p>
      </div>

      <div className="col-md-12 d-flex flex-lg-row flex-sm-column  flex-column detail_box" >

        <div className="col-1 gap-lg-4 gap-xxl-5 gap-2 col-md-3  d-flex flex-lg-column flex-row ">
          <img className="col-12"  src={product.image} alt="" />
          <img className="col-12"  src={product.image} alt="" />
          <img className="col-12" src={product.image} alt="" />
        </div>

        <div>

          <div className="d-flex ps-5 ">
            <div className="col-5 col-xxl-7">
              <img   className="col-12" src={product.image} alt="" />
            </div>

            <div className="col-6 col-xxl-7 detail_box">
              <p className="productCardDetailName">One Life Graphic T-shirt</p>
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

              <p>{product.description}</p>
              <hr />
              <div className="color_button_box">
                <button className="color_butoon1"></button>
                <button className="color_butoon2"></button>
                <button className="color_butoon3"></button>
              </div>

              <hr />


              <div className="size_button">

                {product.availableSizes.map(size =>{
                  return<p>{size}</p>
                }) }

              </div>






            </div>

            <div></div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default DetailsCard;
