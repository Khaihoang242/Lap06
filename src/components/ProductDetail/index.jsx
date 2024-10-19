import React from "react";
import { useLocation } from "react-router-dom";
export default function ProductDetail() {
  const location = useLocation();
  const { product } = location.state || {};
  return (
    <section className="container mx-auto p-6">
      <h2 className="w-full py-1 px-3 bg-green-500 text-white">
        Chi tiết sản phẩm
      </h2>
      <div>
        <div key={product.id} className="bg-white shadow-lg p-4 rounded-lg">
          <img
            src={product.productImg}
            alt={product.productName}
            className="w-80 object-cover rounded-tl-lg"
          />
          <p className="text-lg font-semibold">{product.productName}</p>
          <p>
            Giá: {product.price.toLocaleString()}
            <sup>đ</sup>
          </p>
          <button className="w-full py-1 px-3 bg-blue-500 text-white mt-2">
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </section>
  );
}
