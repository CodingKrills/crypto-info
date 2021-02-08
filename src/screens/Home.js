import React from 'react'

import Hero from "../components/Hero";
import AllCryptoCarosel from "../components/AllCryptoCarosel";
import AllCryptoTableList from "../components/AllCryptoTableList";

const Home = () => {
    return (
        <div>
            <Hero />
            <AllCryptoCarosel />
            <AllCryptoTableList />
        </div>
    )
}

export default Home
