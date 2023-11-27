import React from "react";

const HeaderSocials = () =>{
    return(
        <div className={"home__socials"}>
            <a href={"https://www.instagram.com/kocew/"} className={"home__social-link"} target={"_blank"}>
                <i className={"fa-brands fa-instagram"}></i>
            </a>

            <a href={"https://www.facebook.com/zike.kocev.5"} className={"home__social-link"} target={"_blank"}>
                <i className={"fa-brands fa-facebook"}></i>
            </a>

            <a href={"https://www.linkedin.com/in/zike-kocev-30b884219/"} className={"home__social-link"} target={"_blank"}>
                <i className={"fa-brands fa-linkedin"}></i>
            </a>

            <a href={"https://github.com/Kocew57"} className={"home__social-link"} target={"_blank"}>
                <i className={"fa-brands fa-github"}></i>
            </a>


        </div>
    )
}

export default HeaderSocials