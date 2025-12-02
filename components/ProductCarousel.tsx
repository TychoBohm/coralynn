"use client";

import { useRef } from "react";
import {
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  hoverImage: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Lorem Ipsum Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "€89,99",
    image: "../product-images/heren-wit/Heren-Wit-Los.png",
    hoverImage: "../product-images/heren-wit/Heren-Wit-Model.png",
  },
  {
    id: 2,
    name: "Lorem Ipsum Product 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "€249,99",
    image: "../product-images/Vrouwen-Wit/Vrouwen-Wit-Los.png",
    hoverImage: "../product-images/vrouwen-wit/Vrouwen-Wit-Model.png",
  },
  {
    id: 3,
    name: "Lorem Ipsum Product 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "€129,99",
    image: "../product-images/heren-wit/Heren-Wit-Los.png",
    hoverImage: "../product-images/heren-wit/Heren-Wit-Model.png",
  },
  {
    id: 4,
    name: "Lorem Ipsum Product 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "€159,99",
    image: "../product-images/vrouwen-wit/Vrouwen-Wit-Los.png",
    hoverImage: "../product-images/vrouwen-wit/Vrouwen-Wit-Model.png",
  },
  {
    id: 5,
    name: "Lorem Ipsum Product 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "€399,99",
    image: "../product-images/heren-wit/Heren-Wit-Los.png",
    hoverImage: "../product-images/heren-wit/Heren-Wit-Model.png",
  },
  {
    id: 6,
    name: "Lorem Ipsum Product 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "€349,99",
    image: "../product-images/vrouwen-wit/Vrouwen-Wit-Los.png",
    hoverImage: "../product-images/vrouwen-wit/Vrouwen-Wit-Model.png",
  },
];

export default function ProductCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Breedte van kaart + gap
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "right" ? scrollAmount : -scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 px-2 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Titel */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Onze Collectie
          </h2>
          <p className="text-gray-600 text-lg">
            Ontdek onze exclusieve selectie van handgemaakte sieraden
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 disabled:opacity-0"
            aria-label="Scroll naar links"
          >
            <HiChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
            aria-label="Scroll naar rechts"
          >
            <HiChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Scrollable Products Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[280px] bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group/card"
              >
                {/* Product Image Container */}
                <div className="relative h-[280px] overflow-hidden bg-gray-100">
                  {/* Default Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover/card:opacity-0"
                  />
                  {/* Hover Image */}
                  <img
                    src={product.hoverImage}
                    alt={`${product.name} - hover`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                  />

                  {/* Icon Buttons - Absolute positioned */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <button
                      className="bg-white/90 hover:bg-white p-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 group/heart"
                      aria-label="Toevoegen aan wishlist"
                    >
                      <HiOutlineHeart className="w-5 h-5 text-gray-700 group-hover/heart:text-red-500 transition-colors" />
                    </button>
                    <button
                      className="bg-white/90 hover:bg-white p-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 group/cart"
                      aria-label="Toevoegen aan winkelwagen"
                    >
                      <HiOutlineShoppingCart className="w-5 h-5 text-gray-700 group-hover/cart:text-blue-600 transition-colors" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      {product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS voor scrollbar verbergen */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
