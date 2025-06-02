import react from "react";
import Header from "../components/header/Header";
import Header2 from "../components/header/Header2";
import LatestOffers from "../components/footer/LatestOffers";
import Footer from "../components/footer/footer";
import DetailsCard from "../components/ItemDetailPage/DetailsCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../app/productSlice";
import { useParams } from "react-router-dom";
const ItemDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.productsList);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (productsList.length > 0) {
      const foundProduct = productsList.find((p) => p.id === parseInt(id));
      setProduct(foundProduct);
    }
  }, [productsList, id]);

  if (!product) {
        return <div className="text-center p-5">Загрузка товара...</div>;
    }

  return (
    <div>
      <Header />
      <Header2 />
      <DetailsCard product={product} />
      <LatestOffers />
      <Footer />
    </div>
  );
};

export default ItemDetails;
