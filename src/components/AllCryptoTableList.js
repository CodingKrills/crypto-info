import React, { useEffect, useState } from 'react'

import {
    Link
} from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

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

                <table >


                        {loading ?

                            <>

<Spinner
                animation="border"
                role="status"
                size="md"
                variant="light"

                style={{padding:"10px"}}
              >
                <span className="sr-only">Loading...</span>
              </Spinner>

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
                                        
                                    </tr>
                                </thead>

                                {data.slice(startLimit - 5, startLimit).map((item) => {

                                    return (

                                        <tbody>
                                          
                                            <tr >
                                                <td >{item.market_cap_rank}</td>
                                                <td><img className="img-fluid" width={20} src={item.image} alt='coins' /></td>
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



                            </>
                        }


                    </table>


                </div>


                {/* PAGINATIOn */}


                <div className="text-center">
                    {/* <p>You clicked {startLimit} times</p> */}
                    { (startLimit>5)?
                    <button className="btn btn-md btn-danger m-4" onClick={() =>   
                        setStartLimit(startLimit - 5) }> PREV</button>
                    :<button className="btn btn-md btn-danger m-4" disabled>PREV</button>
                    
                    }
                    
                    {(startLimit<100)?
                    <button className="btn btn-md btn-danger m-4" onClick={() =>
                        setStartLimit(startLimit + 5) }>  NEXT</button>
                    :<button className="btn btn-md btn-danger m-4" disabled>NEXT</button>}
                </div>

            </div>

            <div>
            </div>
        </div >
    )
}

export default AllCryptoTableList
