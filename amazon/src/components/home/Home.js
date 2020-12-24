import React from 'react';
import "./Home.css";
import Product from "../product/Product"
import Banner from "../../images/bodybackground.jpg"

function Home() {
    return (
        <>
            <div className="home">
                <div className="home__container">
                    <img src={Banner} alt="banner" className="home__image" />


                    <div className="home__row">
                        <Product
                            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – Illustrated, September 13, 2011"
                            price="19.99"
                            image="https://blog.newrelic.com/wp-content/uploads/the-lean-startup-book-400x376.png"
                            rating={3}
                        />
                        <Product
                            title="Echo Frames (2nd Gen) | Smart glasses with open-ear audio and Alexa | Classic Black"
                            price="249.99"
                            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MWQ0NzdiNzQt/MWQ0NzdiNzQt-NDFlZjdlZDIt-w379._SY304_CB412115001_.jpg"
                            rating={4} />
                    </div>

                    <div className="home__row">
                        <Product
                            title="Amazon Smart Plug, works with Alexa – A Certified for Humans Device"
                            price="24.99"
                            image="https://m.media-amazon.com/images/I/41uF7hO8FtL._AC_UL320_.jpg"
                            rating={4} />
                        <Product
                            title="Fire TV Stick with Alexa Voice Remote (includes TV controls) | HD streaming device"
                            price="29.99"
                            image="https://m.media-amazon.com/images/I/51GF9vRAnFL._AC_UL320_.jpg"
                            rating={4} />
                        <Product
                            title="Echo Dot (4th Gen) | Smart speaker with Alexa | Glacier White"
                            price="29.99"
                            image="https://m.media-amazon.com/images/I/61R+1DLe-uL._AC_UL320_.jpg"
                            rating={5} />

                    </div>

                    <div className="home__row">
                        <Product
                            title="
                            Roll over image to zoom in
                            Samsung UH850 Series 31.5 inch 4K QHD 3840x2160 QLED Desktop Monitor for Business, AMD FreeSync, DisplayPort, USB Hub, 3-Year Warranty (U32H850UMN)"
                            price="599.99"
                            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                            rating={4} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
