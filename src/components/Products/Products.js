import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Products.css";

const Products = () => {
  let { proId } = useParams();

  const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  let maxPages = Math.round(products.length / 5);
  let items = [];
  let leftSide = currentPage - 2;
  if (leftSide <= 0) leftSide = 1;
  let rightSide = currentPage + 2;
  if (rightSide > maxPages) rightSide = maxPages;
  for (let number = leftSide; number <= rightSide; number++) {
    items.push(
      <div
        key={number}
        className={
          number === currentPage ? "round-effect active" : "round-effect"
        }
        onClick={() => {
          setCurrentPage(number);
        }}
      >
        {number}
      </div>
    );
  }

  const nextPage = () => {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
	
  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${proId}`)
      .then((res) => res.json())
      .then((result) => {
        setProducts(result.products);
				setLoading(false)
      });
  }, []);

  return (
    <>
      {loading && <div className="loader"></div>}
      <div className="pro-box">
        {products.slice(0, 3 * currentPage)?.map((item) => {
          return (
            <div className="card">
              <img
                src={item.images[0]}
                alt={item.brand}
                style={{ width: "100%" }}
              />
              <h1>{item.brand}</h1>
              <p className="price">${item.price}</p>
              <p>{item.description}</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex-container">
        <div className="paginate-ctn">
          <div className="round-effect" onClick={prevPage}>
            {" "}
            &lsaquo;{" "}
          </div>
          {items}
          <div className="round-effect" onClick={nextPage}>
            {" "}
            &rsaquo;{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
