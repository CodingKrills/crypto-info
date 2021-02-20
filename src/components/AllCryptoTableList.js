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

                <div class="table-responsive">

                    <table class="table table-bordered">


                        {loading ?

                            <>

                                < div className="card AllCryptoCardTable shadow" ></div>

                            </>

                            :
                            <>

                                <thead>
                                    <tr>
                                        <th scope="col">RANK</th>
                                        <th scope="col">IMAGE</th>
                                        <th scope="col">NAME</th>
                                        <th scope="col">SYMBOL</th>
                                        <th scope="col">CURRENT PRICE</th>
                                        <th scope="col">VIEW</th>
                                    </tr>
                                </thead>

                                {data.slice(startLimit - 5, startLimit).map((item) => {

                                    return (

                                        <tbody>
                                            <tr>
                                                <td>{item.market_cap_rank}</td>

                                                <td><img className="img-fluid" width={20} src={item.image} alt='coins' /></td>
                                                <td>{item.name}</td>
                                                <td>{item.symbol}</td>
                                                <td>{item.current_price}</td>
                                                <td>
                                                    <Link to={item.id}>
                                                        <span>
                                                            VIEW
                                                        </span>
                                                    </Link>
                                                </td>
                                            </tr>
                                        </tbody>

                                    )

                                })
                                }



                            </>
                        }


                    </table>

                    <div>
                        {/* <p>You clicked {startLimit} times</p> */}

                        <button className="btn btn-md btn-danger m-4" onClick={() =>
                            setStartLimit(startLimit - 5)

                        }>
                            PREV
                    </button>

                        <button className="btn btn-md btn-danger m-4" onClick={() =>
                            setStartLimit(startLimit + 5)

                        }>
                            NEXT
                    </button>

                    </div>

                </div>
            </div>

            <div>
            </div>
        </div >
    )
}

export default AllCryptoTableList
