import React from "react";
import "./blog.css"
import Image from "../assets/programmer.png"

const Blog = () =>{
    return(
    <section className={"blog container section"} id={"blog"}>
        <h2 className={"section__title"}>Links and Videos</h2>
        <div className={"blog__container grid"}>
            <div className={"blog__card"}>
                <div className={"blog__thumb"}>
                    <a href={"#"}><span className={"blog__category"}>Interview</span></a>
                    <a href={"#"}><img src={Image} className={"link__img"}/></a>
                </div>
                <div className={"blog__details"}>
                    <h3 className={"blog__title"}>My first interview</h3>
                    <div className={"blog__meta"}>
                        <span>10 February 2021</span>
                        <span className={"blog__dot"}>.</span>
                        <span>Kocew</span>
                    </div>

                </div>
            </div>

            <div className={"blog__card"}>
                <div className={"blog__thumb"}>
                    <a href={"#"}><span className={"blog__category"}>Interview</span></a>
                    <a href={"#"}><img src={Image} className={"link__img"}/></a>
                </div>
                <div className={"blog__details"}>
                    <h3 className={"blog__title"}>My first interview</h3>
                    <div className={"blog__meta"}>
                        <span>10 February 2021</span>
                        <span className={"blog__dot"}>.</span>
                        <span>Kocew</span>
                    </div>

                </div>
            </div>

            <div className={"blog__card"}>
                <div className={"blog__thumb"}>
                    <a href={"#"}><span className={"blog__category"}>Interview</span></a>
                    <a href={"#"}><img src={Image} className={"link__img"}/></a>
                </div>
                <div className={"blog__details"}>
                    <h3 className={"blog__title"}>My first interview</h3>
                    <div className={"blog__meta"}>
                        <span>10 February 2021</span>
                        <span className={"blog__dot"}>.</span>
                        <span>Kocew</span>
                    </div>

                </div>
            </div>

        </div>
    </section>
    )
}

export default Blog