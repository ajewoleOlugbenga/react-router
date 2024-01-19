import { useParams, Link } from "react-router-dom";

const ProductDetailsPage = () => {
  const params = useParams();

  return (
    <>
      <h1>The product details</h1>
      <p>{params.productId}</p>
      <p><Link to='..' relative="path">Back</Link></p>
    </>
  );
};

export default ProductDetailsPage;
