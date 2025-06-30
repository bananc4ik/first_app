import react from "react";
import FilterIcon from '../images/ProductsFilter/FilterIcon.svg'
import PriceSlider from "../components/PriceSlider";
import FilterCss from '../styles/filters.css'
import Header from '../components/header/Header'
import Header2 from '../components/header/Header2'
import LatestOffers from "../components/footer/LatestOffers";
import Footer from '../components/footer/footer'

const ProductFilter = () => {




    return (
        <div className="container-fluid" style={{padding:0}}>

            <Header/>
            <Header2/>

            <div className="row">

                <div className="col-3">

                    <div className="col-12 filters">

                        <div className="col-12 filters_title d-flex ilign-items-start justify-content-between">

                            <p className="filters_text">Filters</p>
                            <img src={FilterIcon} alt="" />
                            

                        </div>
                        

                        <div className="col-9 d-flex flex-column">
                            <input id="radius"  className="min_inputFilter filter_price" type="range" min="1" max="100" />
                            <input className="max_inputFilter filter_price" type="range" min="1" max="100" />
                            

                            


                        </div>



                        <div className="col-5 colors_box_filters d-flex flex-wrap justify-content-start ">
                            <div id="red" className=" color_filter_element"></div>
                            <div id="green" className=" color_filter_element"></div>
                            <div id="blue" className=" color_filter_element"></div>
                            <div id="pink" className=" color_filter_element"></div>
                            <div id="purple" className=" color_filter_element"></div>
                            <div id="blue" className="  color_filter_element"></div>
                            <div id="yellow" className="color_filter_element"></div>
                        </div>

                    </div>

                    {/* hcxfcyuhovgilidu */}

                    

                </div>

                <LatestOffers/>
                <Footer/>



            </div>


        </div>


    )
}

export default ProductFilter;