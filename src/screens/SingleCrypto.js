import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
const axios = require('axios');

const SingleCrypto = () => {

    var { id } = useParams();

    var [loading, setLoading] = useState(true);
    const [data, setData] = useState()

    useEffect(() => {
        getSingleCrytobyId();
    })

    const getSingleCrytobyId = async () => {
        try {
            var cid = id;
            const response = await axios
                .get(`https://api.coingecko.com/api/v3/coins/${cid}`);
            console.log(response.data);
            let d = response.data
            setData(d);
            setLoading(false)
        } catch (error) {
            console.error(error);
        }
    }


    console.log(id)

    return (
        <div>

            <section className="SingleCrypto">
                <div className="jumbotron jumb">
                    <div className="container">

                        {loading ? <>
                            <h1>Loading ... .. ... .....</h1>
                        </>
                            :

                            <div className="row">
                                <div className="col col-12 col-md-8 col-sm-12">
                                    <h1 className="hero-white-h1"> {data.name} </h1>
                                    <p>{data.description.en}</p>
                                </div>
                                <div className="col col-12 col-md-4 col-sm-12">
                                    <img className="img-fluid" src={data.image.large} alt="crypto" />
                                </div>
                            </div>

                        }
                    </div>

                </div>
            </section>

        </div>
    )
}

export default SingleCrypto
