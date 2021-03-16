import React, { useEffect, useState } from 'react'

import {
    Link
} from "react-router-dom";

const axios = require('axios');

const AllCryptoTableList = () => {

    var [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [startLimit, setStartLimit] = useState(5);

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        try {
            const response = await axios
                .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')

            console.log(response.data);
            let d = response.data
            setData(d);
            setLoading(false)
        } catch (error) {
            console.error(error);
        }
    }


    console.log("TABLEEEEEEEEEEEEEEEE", data)

    return (
        <div className="AllCryptoTable">
            <div className="container py-4">

                <div className="table-responsive">


                    {loading ?

                        <>
                            <div style={{ padding: "20% 0 " }}>
                                <div className='loader2'></div>
                            </div>
                        </>

                        :
                        <>
                            <table >

                                <thead>
                                    <tr>
                                        <th className="text-theme" scope="col">RANK</th>
                                        <th className="text-theme" scope="col">IMAGE</th>
                                        <th className="text-theme" scope="col">NAME</th>
                                        <th className="text-theme" scope="col">SYMBOL</th>
                                        <th className="text-theme" scope="col">CURRENT PRICE</th>

                                    </tr>
                                </thead>

                                {data.slice(startLimit - 5, startLimit).map((item) => {

                                    return (

                                        <tbody>

                                            <tr>
                                                <td>{item.market_cap_rank}</td>
                                                <td><img className="img-fluid" width={20} src={item.image} alt={item.name} /></td>
                                                <td><Link to={item.id}>
                                                    <span>
                                                        {item.name}
                                                    </span>
                                                </Link></td>
                                                <td>{item.symbol}</td>
                                                <td>{item.current_price}</td>
                                            </tr>

                                        </tbody>

                                    )

                                })
                                }

                            </table>

                        </>
                    }

                </div>

                {/* PAGINATIOn */}

                <div className="text-center">
                    {(startLimit > 5) ?
                        <button className="btn btn-md btn-circle m-4 shadow grow" onClick={() =>
                            setStartLimit(startLimit - 5)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                            </svg>
                        </button>
                        : <button className="btn btn-md btn-circle m-4 shadow grow" disabled>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-caret-left" viewBox="0 0 16 16">
                                <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753l-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
                            </svg>
                        </button>

                    }

                    {(startLimit < 100) ?
                        <button className="btn btn-md  btn-circle m-4 shadow grow" onClick={() =>
                            setStartLimit(startLimit + 5)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                            </svg>
                        </button>
                        : <button className="btn btn-md btn-circle m-4 shadow grow" disabled>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-caret-right" viewBox="0 0 16 16">
                                <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                            </svg>
                        </button>}
                </div>

            </div>

            <div>
            </div>
        </div >
    )
}

export default AllCryptoTableList
