import react from "react";
import { useState } from "react";
import Faqs from "./Faqs";
import { Button } from "bootstrap";
const Reviews = () => {

  const [click, setClick] = useState(0);

  const switchComponent = () => {
    switch (click) {
      case 0:
        return <Faqs />

        break;
      case 3:
        return <Faqs />
        break;

      default:
        break;
    }

  }

  return (
    <div>
      <div>



        <button onClick={() => setClick(1)}>
          <p>Product Detail</p>
          <hr />
        </button>

        <button onClick={() => setClick(2)}>
          <p>Rating & Reviews</p>
          <hr />
        </button>

        <button onClick={() => setClick(3)}>
          <p>FAQs</p>
          <hr />
        </button>
      </div>


      <div>

        {switchComponent()}





      </div>

    </div>
  );
};

export default Reviews;
