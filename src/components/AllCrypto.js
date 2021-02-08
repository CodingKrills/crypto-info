import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
const axios = require('axios');

const AllCrypto = () => {

    var [loading, setLoading] = useState(true);
    const [data, setData] = useState()

    useEffect(() => {
        getUser();
    }, [])

    async function getUser() {
        try {
            const response = await axios
                .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
            console.log(response.data);
            let d = response.data
            setData(d);
            setLoading(false)
        } catch (error) {
            console.error(error);
        }
    }


    console.log("XXXXXXXXXXXXXXXXXXXXXXXX", data)

    var settings = {
        dots: false,
        infinite: true,
        lazyLoad: true,
        autoplaySpeed: 2000,
        autoplay: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className="AllCrypto">
            <h1>AllCrypto</h1>


            <div className="container">
                <h2> Responsive </h2>


                {loading ? <>
                    <h1>Loading ... .. ... .....</h1>
                </>
                    :
                    <>
                        <Slider {...settings}>

                            {data.map((item) => {

                                return (
                                    <div>
                                        <div className="card AllCrypto-card shadow" key={item.id}>
                                            <div className="card-body">
                                                <img src={item.image} className="card-img-top img-fluid" alt="coins" />
                                                <h5 className="card-title">{item.name}</h5>
                                                <p className="card-text">{item.symbol}</p>
                                            </div>
                                        </div>
                                    </div>
                                )

                            })
                            }
                        </Slider>

                    </>
                }
            </div>

        </div >
    )
}

export default AllCrypto
