import react from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterIcon from '../images/ProductsFilter/FilterIcon.svg'
import PriceSlider from "../components/PriceSlider";
import FilterCss from '../styles/filters.css'
import Header from '../components/header/Header'
import Header2 from '../components/header/Header2'
import LatestOffers from "../components/footer/LatestOffers";
import Footer from '../components/footer/footer'
import ProductComponent from '../components/main/products/ProductComponent';
import { Link } from "react-router-dom"
import { fetchProducts } from "../app/productSlice";






const ProductFilter = () => {






    const [size, SetSize] = useState(0);

    const colorSizes = (event) => {

        let sizesList = document.getElementsByClassName("filter_size_button");
        const g = Array.from(sizesList);
        console.log(g);;

        g.forEach((el) => {
            el.style.color = "black";
            el.style.background = "#F0F0F0";

        })
        event.target.style.color = "white";
        event.target.style.background = "black";
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());

    }, [dispatch]);

    const productsFromApi = useSelector((state) => state.products.productsList);

    console.log(productsFromApi);



    // filters ///////////////////////////////////////////


    const [sizeFilter, setSizeFilter] = useState(" ");


    let filteredProducts = [];

    let filters = {
        size: "",

    };


    const updateFilters = () => {
        filters.size = sizeFilter;
        console.log(filters.size);

        productsFromApi.forEach(product => {

            if (product.availableSizes.includes(sizeFilter)) {
                console.log(product);
                filteredProducts.push(product)



            } else {
                console.log("Product is not found!");

            }




        });


        console.log(productsFromApi);




    };
















    return (
        <div className="container-fluid" style={{ padding: 0 }}>

            <Header />
            <Header2 />

            <div className="row col-12">

                <div className="col-12 d-flex ">

                    <div className="col-3 filters">

                        <div className="col-12 filters_title d-flex ilign-items-start justify-content-between">

                            <p className="filters_text">Filters</p>
                            <img src={FilterIcon} alt="" />


                        </div>

                        <hr className="col-12" />


                        <div className="col-12 d-flex flex-column">

                            <details className="d-flex details_categories">

                                <summary >
                                    <span className="categories_detail_filter">T-shirt⠀</span>


                                </summary>

                                <div>
                                    rfitngu
                                </div>


                            </details>

                            <details className="d-flex details_categories">

                                <summary >
                                    <span className="categories_detail_filter">Shorts⠀</span>


                                </summary>

                                <div>
                                    rfitngu
                                </div>


                            </details>

                            <details className="d-flex details_categories">

                                <summary >
                                    <span className="categories_detail_filter">Shirts⠀</span>


                                </summary>

                                <div>
                                    rfitngu
                                </div>


                            </details>

                            <details className="d-flex details_categories">

                                <summary >
                                    <span className="categories_detail_filter">Hoodie</span>


                                </summary>

                                <div>
                                    rfitngu
                                </div>


                            </details>

                            <details className="d-flex details_categories">

                                <summary >
                                    <span className="categories_detail_filter">Jeans⠀</span>


                                </summary>

                                <div>
                                    rfitngu
                                </div>


                            </details>




                        </div>










                        <hr className="col-12" />

                        <details className="col-9 " >

                            <summary>
                                <span className="colors_title">Price</span>
                            </summary>

                            <div className="col-12 d-flex flex-column">

                                <input id="radius" className="min_inputFilter filter_price" type="range" min="1" max="100" />
                                <input className="max_inputFilter filter_price" type="range" min="1" max="100" />

                            </div>


                        </details>




                        <hr className="col-12" />


                        <details>


                            <summary>
                                <span className="colors_title">Colors</span>
                            </summary>

                            <div className="col-5 gap-2 colors_box_filters d-flex flex-wrap justify-content-start ">
                                <div id="red" className=" color_filter_element"></div>
                                <div id="green" className=" color_filter_element"></div>
                                <div id="blue" className=" color_filter_element"></div>
                                <div id="pink" className=" color_filter_element"></div>
                                <div id="purple" className=" color_filter_element"></div>
                                <div id="blue" className="  color_filter_element"></div>
                                <div id="yellow" className="color_filter_element"></div>
                                <div id="blue" className=" color_filter_element"></div>
                                <div id="red" className=" color_filter_element"></div>
                                <div id="blue" className=" color_filter_element"></div>
                            </div>



                        </details>

                        <hr className="col-12" />



                        <details >


                            <summary>
                                <span className="colors_title">Size</span>
                            </summary>

                            <div className="d-flex flex-wrap  gap-3 col-8">

                                <p onClick={() => setSizeFilter("XXL")} className="col-5 filter_size_button ">XX-Large</p>
                                <p onClick={() => setSizeFilter("XS")} className="col-5 filter_size_button ">X-Small</p>
                                <p onClick={() => setSizeFilter("S")} className="col-5 filter_size_button ">Small</p>
                                <p onClick={() => setSizeFilter("M")} className="col-5 filter_size_button ">Medeum</p>
                                <p onClick={() => setSizeFilter("XL")} className="col-5 filter_size_button ">X-large</p>

                            </div>





                        </details>




                        <div className="col-12">
                            <button onClick={updateFilters()} className="col-12 apply_filters">Apply Filter</button>
                        </div>







                    </div>


                    <div className="col-9">

                        <p className="filte_type_clothing">Casual</p>

                        <div className="col-12 d-flex flex-wrap ">





                            {filteredProducts.map((product) => (

                                <Link style={{ textDecoration: "none" }} className="col-4" to={`/item_detail/${product.id}`}><ProductComponent className="col-12" key={product.id} product={product} /></Link>

                            ))};
                        </div>

                    </div>











                </div>

                <LatestOffers />
                <Footer />



            </div>


        </div>


    )
}

export default ProductFilter;