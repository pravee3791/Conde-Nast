import { useState } from "react";
import "../newsItem/newsItem.css";
function Loader() {
    const loaderArray = new Array(10).fill(0);
    return (
        <>
            <div className="container">
                {
                    loaderArray.map((item, index) => {
                        return (
                            <div key={index} className="card is-loading">
                                <div className="image">

                                </div>
                                <div className="content">
                                    <h2></h2>
                                    <p></p>
                                </div>
                            </div>
                        )
                    }

                    )

                }
            </div>
        </>

    )
}

export default Loader;