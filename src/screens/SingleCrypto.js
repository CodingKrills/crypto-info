import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const axios = require("axios");

const SingleCrypto = () => {
  var { id } = useParams();

  var [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    getSingleCrytobyId();
  });

  const getSingleCrytobyId = async () => {
    try {
      var cid = id;
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${cid}`
      );
      console.log(response.data);
      let d = response.data;
      setData(d);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(id);

  return (
    <div>
      <section className="SingleCrypto">
        <div className="container" style={{ marginTop: "8rem" }}>
          <Link to="/">
            <button className="btn btn-md btn-circle m-4 shadow grow">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
              </svg>
            </button>
          </Link>

          {loading ? (
            <>
              <div className='loader'></div>
              <p className="text-center text-theme">Please Wait While Its Been Loading</p>
              <div className='loader2'></div>
            </>
          ) : (
            <div className="row">
              <div className="col col-12 col-md-8 col-sm-12 mt-4">
                <h1 className="hero-white-h1"> {data.name} </h1>
                <p
                  className="coin-info SingleCryptoCard"
                  style={{ padding: "1.5rem" }}
                  dangerouslySetInnerHTML={{ __html: data.description.en }}
                ></p>
              </div>
              <div className="col col-12 col-md-4 col-sm-12">
                <img
                  className="img-fluid"
                  src={data.image.large}
                  alt="crypto"
                />
                <div className="coin-info">
                  <p>
                    Official Site:
                    <a href={data.links.homepage[0]}>
                      {data.links.homepage[0]}
                    </a>
                  </p>
                  <p>
                    Launch Date:{" "}
                    <span>
                      {data.genesis_date !== "" ? data.genesis_date : "N/A"}
                    </span>
                  </p>
                  <p>
                    Country of Origin:{" "}
                    <span>
                      {data.country_origin !== "" ? data.country_origin : "N/A"}
                    </span>
                  </p>
                  <p>
                    Hashing Algorithm:{" "}
                    <span>
                      {data.hashing_algorithm !== ""
                        ? data.hashing_algorithm
                        : "N/A"}
                    </span>
                  </p>
                  <p>
                    Change %(7 Days):
                    <span style={{}}>
                      {data.market_data.price_change_percentage_7d}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SingleCrypto;
