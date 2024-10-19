import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const products = [
    {
      id: 1,
      productName: "Đồng hồ 1",
      productImg:
        "https://cdn.tgdd.vn/Products/Images/7264/320544/elio-ess11-03-unisex-thumb-600x600.jpg",
      price: 3000000,
    },
    {
      id: 2,
      productName: "Đồng hồ 2",
      productImg: "https://cdn.tgdd.vn/2024/09/timerseo/326306.jpg",
      price: 1000000000,
    },
    {
      id: 3,
      productName: "Đồng hồ 3",
      productImg:
        "https://cdn.tgdd.vn/Products/Images/7264/328209/casio-ws-1700h-1avdf-nam-thumb-600x600.jpg",
      price: 123456,
    },
    {
      id: 4,
      productName: "Đồng hồ 4",
      productImg:
        "https://cdn.tgdd.vn/Products/Images/7264/326941/baby-g-bgd-565sj-7dr-nu-thumb-600x600.jpg",
      price: 2300000,
    },
  ];

  return (
    <section className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center">Danh sách đồng hồ</h2>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg p-4 rounded-lg">
            <img
              src={product.productImg}
              alt={product.productName}
              className="w-full object-cover rounded-tl-lg"
            />
            <p className="text-lg font-semibold">{product.productName}</p>
            <p>
              Giá: {product.price.toLocaleString()}
              <sup>đ</sup>
            </p>

            <Link
              to={`/product-detail/${product.id}`}
              state={{ product }}
              className="w-full py-1 px-3 bg-green-500 text-white"
            >
              Chi tiết sản phẩm
            </Link>
            <button className="w-full py-1 px-3 bg-blue-500 text-white mt-2">
              Thêm vào giỏ hàng
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
