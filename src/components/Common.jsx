import React from 'react'
import './index1.css'
import { NavLink } from "react-router-dom";

function Common(props) {
    return (
        <div>
            <section id="header" className="d-flex align-items-center">
            <div className="container full nav_bg ">
            <div className="row">
            <div className="col-10 mx-auto"></div>
            <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>{props.name}</h1>
                    <h2 className="my-3">We are group 3-MCA Students created this V-Company with the aim to provide you the best of knowledge about letast technologies up there and keep you up-to date with the programming sport.</h2>
                    <div className="mt-3 ">
                        <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
                    </div>
                </div>
                <div className="col-lg-6 order-lg-2 header-img">
                <img src={props.imgsrc} className="img-fluid animated" alt="" />

                </div>
            </div>

            </div>  

            </div>

            </section>
        </div>
    )
}

export default Common
