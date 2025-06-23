import react from "react";
import Filter from "../../images/itemDetailPage/Filter.svg";
import ReviewDetailsStyle from "./ReviewsDetail.css";
import Arrow from "../../images/itemDetailPage/ArrovBottom.svg";
import { useState } from "react";









const Faqs = () => {
  return (
    <div className="container-fluid">
      <div className="row">

        <div className="col-12 d-flex justify-content-center">
          <h1 className="faq_header_title">Faq's</h1>
        </div>

        
        


        <div className="faqs-box d-flex flex-column gap-3">


          <p className="faqs_title">Delivery and order processing</p>

          <div>
            <details className="a">
              <summary className="faq_title">How to place an order?</summary>
              <p className="faq_content">Simply select the item you like, the size you need and add it to your cart. Then go to the cart and follow the checkout steps.</p>
            </details>

          </div>




          <p className="faqs_title">How much does delivery cost?</p>

          <details className="a">
            <summary className="faq_title">How much does delivery cost?</summary>
            <div className="faq_content d-flex flex-column gap-3">
              <p>* In Russia: from 300₽ (free for orders over 5000₽)</p>
              <p>* International shipping: calculated at checkout</p>
            </div>
          </details>


          <details className="a">
            <summary className="faq_title">How long does delivery take?</summary>
            <div className="faq_content d-flex flex-column gap-3">
              <p>* In Russia: 2-7 business days</p>
              <p>* International: 7-21 days (depending on country)</p>
            </div>
          </details>


          <div>
            <details className="a">
              <summary className="faq_title">How to track an order?</summary>
              <p className="faq_content">After sending the order, you will receive a letter with a tracking number. You can also track the status in your personal account.</p>
            </details>

          </div>

          <p className="faqs_title">Returns and exchanges</p>

          <div>
            <details className="a">
              <summary className="faq_title">Is it possible to return the product?</summary>
              <p className="faq_content">Yes, you can return the item within 14 days of receipt if it has not been used and is in its original condition.</p>
            </details>

          </div>





          <div>
            <details className="a">
              <summary className="faq_title">How to return an item?</summary>
              <p className="faq_content">Fill out the return form in your account or write to us at [support@shop.co](mailto:support@shop.co). We will send you instructions.</p>
            </details>

          </div>

          <div>
            <details className="a">
              <summary className="faq_title">When will I receive my refund?</summary>
              <p className="faq_content">Refunds are processed within 5-7 business days after receiving the goods at our warehouse.</p>
            </details>

          </div>

          <p className="faqs_title">Dimensions and availability</p>


          <div>
            <details className="a">
              <summary className="faq_title">How to choose a size?</summary>
              <p className="faq_content">There is a size chart on each product page. You can also use the online size selection assistant</p>
            </details>

          </div>


          <div>
            <details className="a">
              <summary className="faq_title">My size is out - when will it be available</summary>
              <p className="faq_content">If the size you need is not available, click "Notify when available" and we will send you a message as soon as the item is available.</p>
            </details>

          </div>



          <p className="faqs_title">Payment</p>

          <div>
            <details className="a">
              <summary className="faq_title">What payment methods are available?</summary>
              <div className="faq_content d-flex flex-column gap-3">
                <p>* Bank card (Visa, MasterCard, Mir)</p>
                <p>* Google Pay / Apple Pay</p>
                <p>* PayPal</p>
                <p>* Cash on delivery (only in the Russian Federation)</p>
              </div>
            </details>

          </div>


          <div>
            <details className="a">
              <summary className="faq_title">Is payment on the site safe?</summary>
              <p className="faq_content">Yes, we use a secure connection (SSL) and the payment is processed by a certified provider.</p>
            </details>

          </div>

          <p className="faqs_title">Support and more</p>

          <div>
            <details className="a">
              <summary className="faq_title">How to contact support?</summary>
              <p className="faq_content">You can write to us at  [support@shop.co](mailto:support@shop.co) or in the chat on the website (daily from 9:00 to 21:00 Moscow time).</p>
            </details>

          </div>

          <div>
            <details className="a">
              <summary className="faq_title">Do you have a physical store?</summary>
              <p className="faq_content">For now, we work only online. Stay tuned — we may soon appear in an offline format!</p>
            </details>

          </div>














        </div>















      </div>
    </div>
  );
};

export default Faqs;
