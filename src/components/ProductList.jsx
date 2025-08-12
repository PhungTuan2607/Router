import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
    <Link to="/products/:id">Chi tiết sản phẩm</Link>
    </div>
  );
};

export default ProductList;