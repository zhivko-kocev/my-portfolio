import React from "react";
import "./home.css"
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Image from "../assets/programmer.png"

const Home = () => {
    return (
        <section className={"home container"} id={"home"}>

            <div className={"intro"}>
                <span className={"home__img"}><img src={Image} alt={"logo"} id={"logo"}/></span>
                <h1 className={"home__name"}>Zhivko Kocev</h1>
                <span className={"home__education"}>I am a computer science student...</span>
                <HeaderSocials/>
                <a href={"#contact"} className={"btn"}>Hire Me</a>
                <ScrollDown/>
            </div>

        </section>
    )
}

export default Home