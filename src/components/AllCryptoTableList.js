import React, { useEffect, useState } from 'react'

import {
    Link
} from "react-router-dom";

const axios = require('axios');


const AllCryptoTableList = () => {

    var [loading, setLoading] = useState(true);
    const [data, setData] = useState()

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
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


    console.log("TABLEEEEEEEEEEEEEEEE", data)



    return (
        <div className="AllCryptoTable">
            <div className="container py-4">



                <div class="table-responsive">
                    <table class="table table-bordered">


                        {loading ? <>
                            <>

                                < div className="card AllCryptoCard shadow" ></div>

                            </>
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

                                {data.map((item) => {

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



                        {/* <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>

                            </tr>
                            <tr>

                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@fat</td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                                <th>3</th>
                                <td >Larry the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                                <td>@twitter</td>


                            </tr>
                        </tbody> */}






                    </table>
                </div>
            </div>
        </div >
    )
}

export default AllCryptoTableList
