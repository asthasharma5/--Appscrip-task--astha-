"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import "./HomePage.css";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [showSidebar, setShowSidebar] = useState(true);
  const [sortOption, setSortOption] = useState("recommended");

  const [idealDropdownOpen, setIdealDropdownOpen] = useState(false);
  const [selectedIdealFor, setSelectedIdealFor] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const sortProducts = (option) => {
    let sortedProducts = [...products];
    switch (option) {
      case "newest":
        sortedProducts = sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "popular":
        sortedProducts = sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      case "priceHighToLow":
        sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "priceLowToHigh":
        sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }
    setProducts(sortedProducts);
  };

  useEffect(() => {
    sortProducts(sortOption);
  }, [sortOption]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Discover Our Products",
    "description": "Curated collection of high quality and sustainable items.",
    "url": "https://your-netlify-deployed-url.com",
  };

  const handleIdealForChange = (value) => {
    setSelectedIdealFor((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Handling the opening and closing of the dropdown
  const handleDropdownToggle = () => {
    setIdealDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>

      <main className="main-container">
        <div className="page-header">
          <h1 className="page-title">DISCOVER OUR PRODUCTS</h1>
          <p className="page-description">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.
            Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </div>

        <div className="products-header">
          <div className="desktop-only">
            <div className="left-group">
              <span className="product-count">3425 ITEMS</span>
              <span
                className="hide-filter"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                {showSidebar ? "← HIDE FILTER" : "> SHOW FILTER"}
              </span>
            </div>
            <div className="sort-option">
              <select
                className="sort-select"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="recommended">RECOMMENDED</option>
                <option value="newest">Newest first</option>
                <option value="popular">Popular</option>
                <option value="priceHighToLow">Price: high to low</option>
                <option value="priceLowToHigh">Price: low to high</option>
              </select>
            </div>
          </div>

          <div className="mobile-only">
            <span className="hide-filter" onClick={() => setShowSidebar(!showSidebar)}>
              FILTER
            </span>
            <span className="divider">|</span>
            <select
              className="sort-select"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="recommended">RECOMMENDED</option>
              <option value="newest">Newest first</option>
              <option value="popular">Popular</option>
              <option value="priceHighToLow">Price: high to low</option>
              <option value="priceLowToHigh">Price: low to high</option>
            </select>
          </div>
        </div>

        <div className="content-wrapper">
          {showSidebar && (
            <aside className="sidebar">
              {[ "Ideal For" ].map((filter) => (
                <div key={filter} className="filter-group">
                  <h3 className="filter-title">{filter.toUpperCase()}</h3>

                  {filter === "Ideal For" && (
                    <div className="custom-dropdown">
                      <div
                        className="dropdown-toggle"
                        onClick={handleDropdownToggle}
                      >
                        {selectedIdealFor.length > 0
                          ? selectedIdealFor.join(", ")
                          : "Ideal For"}
                        <span className="arrow">{idealDropdownOpen ? "▲" : "▼"}</span>
                      </div>

                      {idealDropdownOpen && (
                        <div className="dropdown-menu">
                          {["Men", "Women"].map((gender) => (
                            <label key={gender}>
                              <input
                                type="checkbox"
                                checked={selectedIdealFor.includes(gender)}
                                onChange={() => handleIdealForChange(gender)}
                              />
                              {gender}
                            </label>
                          ))}
                          <button
                            className="unselect-btn"
                            onClick={() => setSelectedIdealFor([])}
                          >
                            Unselect All
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </aside>
          )}

          <section className="products-section">
            <div className="product-grid">
              {products
                .filter((product) => {
                  // Show all products if no filters are selected
                  if (selectedIdealFor.length === 0) return true;
                  return selectedIdealFor.some((gender) =>
                    product.category.toLowerCase().includes(gender.toLowerCase())
                  );
                })
                .map((product) => (
                  <div key={product.id} className="product-card">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="product-image"
                    />
                    <h3 className="product-name">{product.title}</h3>
                    <div className="product-note-row">
                      <p className="product-note">Sign in or Create an account to see pricing</p>
                      <img
                        src="/images/heart.png"
                        alt="Wishlist"
                        className="heart-icon"
                        onClick={(e) => {
                          const img = e.target;
                          const isFilled = img.src.includes("heart-filled");
                          img.src = isFilled ? "/images/heart.png" : "/images/heart-filled.png";
                        }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
