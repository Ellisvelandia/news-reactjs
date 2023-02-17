import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import not from "../assets/not.webp";

const FetchData = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2c428aa742b240fda9949bbdbe0153ec"
        )
        .then((res) => setData(res.data.articles));
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="my-4">
      <h1 className="text-center text-xl">
        <u>Top Headlines</u>
      </h1>
      <div className="flex justify-center items-center flex-col my-3 ">
        {data
          ? data.map((items, index) => (
              <>
                <div className="w-[600px] my-3 shadow-xl p-4 rounded">
                  <h5 className="my-1 text-center">{items.title}</h5>
                  <div className="flex justify-center items-center my-2">
                    <img
                      src={items.urlToImage ? items.urlToImage : not}
                      alt="image"
                      className="object-fill w-full h-72"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-justify my-2">{items.content}</p>
                  <a
                    href={items.url}
                    target="_blank"
                    className="flex items-center gap-2 justify-center"
                  >
                    <BsEyeFill /> View more
                  </a>
                </div>
              </>
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default FetchData;
