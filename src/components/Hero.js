import React from 'react'

const Hero = () => {
    return (
        <div>
            <section className="bgimage">
                <div className="jumbotron jumb">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-8 col-sm-12">
                                <h1 className="hero-white-h1">Take a step into the </h1>
                                <h1 className="hero-gold-h1">Crypto world !</h1>
                                <a className="btn btn-primary btn-lg" href="/" role="button">Learn more</a>
                            </div>
                            <div className="col-12 col-md-4 col-sm-12">
                                <img className="img-fluid" src={'https://preview.colorlib.com/theme/cryptos/img/bg-img/bg-2.png'} alt="crypto" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
