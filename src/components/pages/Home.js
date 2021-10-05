import React from "react";
import Carousel from '../inc/Carousel'


function Home() {
    return(
        <div>
            <Carousel />
            <div className="container">
                <div className="card shadow mt-5">
                    <div className="card-body">
                        <h2>Home Page</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;