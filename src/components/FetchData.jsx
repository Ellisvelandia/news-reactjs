import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { RiBatteryChargeFill } from "react-icons/ri";
import not from "../assets/not.webp";

const FetchData = ({ cat }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          cat
            ? `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=2c428aa742b240fda9949bbdbe0153ec`
            : "https://newsapi.org/v2/top-headlines?country=us&apiKey=2c428aa742b240fda9949bbdbe0153ec"
        )
        .then((res) => setData(res.data.articles))
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [cat]);

  return (
    <div className="my-4">
      <h1 className="text-center text-xl">
        <u>Top Headlines</u>
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 place-content-center w-full px-2 flex-col my-4 min-h-screen gap-2">
        {data ? (
          data.map((items, index) => (
            <div
              key={index}
              className="w-full h-full object-cover my-3 mx-auto shadow-lg p-4 rounded text-center font-semibold text-lg font-serif"
            >
              <h5 className="my-2">{items.title}</h5>
              <div className="flex justify-center items-center my-4">
                <img
                  src={items.urlToImage ? items.urlToImage : not}
                  alt="image"
                  className="object-fill w-full h-72"
                  loading="lazy"
                />
              </div>
              <p className="my-2">{items.content}</p>
              <a
                href={items.url}
                target="_blank"
                className="flex items-center gap-2 justify-center"
              >
                <BsEyeFill /> View more
              </a>
            </div>
          ))
        ) : (
          <RiBatteryChargeFill
            size={80}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        )}
      </div>
    </div>
  );
};

export default FetchData;
