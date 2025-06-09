import react from "react";
import { useState } from "react";
import Faqs from "./Faqs";
import { Button } from "bootstrap";
const Reviews = () => {

     const [click, setClick] = useState(0);

     const switchComponent = () =>{
        switch (click) {
            case 0:
                console.log("aboba123");
                
                break;
            case 1:
                return <Faqs/>

        
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

        <div>
          <p>Rating & Reviews</p>
          <hr />
        </div>

        <div>
          <p>FAQs</p>
          <hr />
        </div>
      </div>


      <div>

        {switchComponent()}
        
        
        
        
        
      </div>

    </div>
  );
};

export default Reviews;
