import { Link } from "react-router-dom";

const Home = () => { 
    return (
      <div>
        <h1>Trang chủ</h1>
            <Link to="/products">Danh sách sản phẩm</Link>
            <br/>
            <Link to="/add-product">Thêm sản phẩn</Link>
      </div>
    );
}
export default Home;