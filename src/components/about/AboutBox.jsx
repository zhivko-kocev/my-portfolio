import React from "react";

const AboutBox = () =>{
    return(
        <div className={"about__boxes grid"}>
            <div className={"about__box"}>
                <i className={"about__icon icon-fire"}></i>
                <div>
                    <h3 className={"about__title"}>10</h3>
                    <span className={"about__subtitle"}>Projects completed</span>
                </div>
            </div>

            <div className={"about__box"}>
                <i className={"about__icon icon-cup"}></i>
                <div>
                    <h3 className={"about__title"}>125</h3>
                    <span className={"about__subtitle"}>Cups of coffee</span>
                </div>
            </div>

            <div className={"about__box"}>
                <i className={"about__icon icon-people"}></i>
                <div>
                    <h3 className={"about__title"}>48</h3>
                    <span className={"about__subtitle"}>Satisfied Clients</span>
                </div>
            </div>

            <div className={"about__box"}>
                <i className={"about__icon icon-badge"}></i>
                <div>
                    <h3 className={"about__title"}>18</h3>
                    <span className={"about__subtitle"}>Awards won</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox