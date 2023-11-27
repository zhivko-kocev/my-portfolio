import React from "react";
import "./about.css"
import AboutBox from "./AboutBox";
import Image from '../assets/programmer.png'
const About = () => {
    return (
        <section className={"about container section"} id={"about"}>
            <h2 className={"section__title"}>About Me</h2>
            <div className={"about__container grid"}>
                <span className={"about__img"}><img src={Image} alt={"avatar"}/></span>
                <div className={"about__data grid"}>
                    <div className={"about__info"}>
                        <p className={"about__description"}>Experienced Computer Technician with a demonstrated history
                            of working in the information technology and services industry. Skilled in Problem solving,
                            Computer repair, Adobe Illustrator, Image Editing, Software Installation,Printer Support and
                            Computer Maintenance. Strong information technology professional working at Doniraj
                            Kompjuter</p>
                        <a href={""} className={"btn"}>Download CV</a>
                    </div>
                    <div className={"about__skills grid"}>
                        <div className={"skills__data"}>
                            <div className={"skills__titles"}>
                                <h3 className={"skills__name"}>Web Development</h3>
                                <span className={"skills__number"}>90%</span>
                            </div>
                            <div className={"skills__bar"}>
                                <span className={"skills__percentage skill1"}></span>
                            </div>
                        </div>

                        <div className={"skills__data"}>
                            <div className={"skills__titles"}>
                                <h3 className={"skills__name"}>Desktop Development</h3>
                                <span className={"skills__number"}>90%</span>
                            </div>
                            <div className={"skills__bar"}>
                                <span className={"skills__percentage skill2"}></span>
                            </div>
                        </div>

                        <div className={"skills__data"}>
                            <div className={"skills__titles"}>
                                <h3 className={"skills__name"}>Mobile Development</h3>
                                <span className={"skills__number"}>90%</span>
                            </div>
                            <div className={"skills__bar"}>
                                <span className={"skills__percentage skill3"}></span>
                            </div>
                        </div>

                        <div className={"skills__data"}>
                            <div className={"skills__titles"}>
                                <h3 className={"skills__name"}>Repair and Maintenance</h3>
                                <span className={"skills__number"}>90%</span>
                            </div>
                            <div className={"skills__bar"}>
                                <span className={"skills__percentage skill4"}></span>
                            </div>
                        </div>

                        <div className={"skills__data"}>
                            <div className={"skills__titles"}>
                                <h3 className={"skills__name"}>IT Management</h3>
                                <span className={"skills__number"}>90%</span>
                            </div>
                            <div className={"skills__bar"}>
                                <span className={"skills__percentage skill5"}></span>
                            </div>
                        </div>

                        <div className={"skills__data"}>
                            <div className={"skills__titles"}>
                                <h3 className={"skills__name"}>IT Operations</h3>
                                <span className={"skills__number"}>90%</span>
                            </div>
                            <div className={"skills__bar"}>
                                <span className={"skills__percentage skill6"}></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <AboutBox/>
        </section>
    )
}

export default About