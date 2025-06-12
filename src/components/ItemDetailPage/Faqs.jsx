import react from "react";
import Filter from "../../images/itemDetailPage/Filter.svg";
import FaqsStyle from "./Faqs.css";
import Arrow from "../../images/itemDetailPage/ArrovBottom.svg";




const Faqs = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-flex justify-content-between">
          <h2 className="Reviews_title">All Reviews</h2>

          <div className="d-flex align-items-center ">
            <button className="filter_button">
              <img src={Filter} alt="" />
            </button>

            <div class="dropdown">
              <div class="dropbtn">
                <button>Menu</button>
                <img src={Arrow} alt="" />
              </div>

              <div class="dropdown-content">
                <p>Link 1</p>
                <p>Link 2</p>
                <p>Link 3</p>
              </div>
            </div>

            <button className="write_review_button">Write a Review</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
