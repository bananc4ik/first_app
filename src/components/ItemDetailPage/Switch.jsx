import react from "react";
import { useState } from "react";
import Faqs from "./Faqs";
import { Button } from "bootstrap";
import SwitchStyle from './Switch.css'
import ReviewDetail from "./ReviewsDetail";
import DetailsProduct from "./DetailsProduct";
const Switch = ({product}) => {

  const [click, setClick] = useState(0);

  const switchComponent = () => {
    switch (click) {
      case 0:
        return <Faqs />

      case 1:
        return <DetailsProduct product={product}/>

      case 2:
        return <ReviewDetail product={product}/>

        break;
      case 3:
        let RatingReviews = document.getElementById("rating_button");
       
        
        return <Faqs />
        break;

      default:
        break;
    }

  }

  return (
    <div>
      <div className="d-flex justify-content-center">



        <button className="col-4 switch_button" onClick={() => setClick(1)}>
          <p>Product Detail</p>
          
        </button>

        <button className="col-4 switch_button" onClick={() => setClick(2)}>
          <p>Rating & Reviews</p>
          
        </button>

        <button id="rating_button" className="col-4 switch_button" onClick={() => setClick(3)}>
          <p>FAQs</p>
          
        </button>
      </div>


      <div>

        {switchComponent()}





      </div>

    </div>
  );
};

export default Switch;
