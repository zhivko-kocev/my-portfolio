import React from "react";
import "./services.css"

const data=[
    {
        id:"1",
        title: "Web Development",
        description:"Text here..."
    },
    {
        id:"2",
        title: "Desktop Development",
        description:"Text here..."
    },
    {
        id:"3",
        title: "Mobile Development",
        description:"Text here..."
    },
    {
        id:"4",
        title: "Repair and Maintenance",
        description:"Text here..."
    },
    {
        id:"5",
        title: "IT Management",
        description:"Text here..."
    },
    {
        id:"6",
        title: "IT Operations",
        description:"Text here..."
    }
]
const Services = () => {
    return (
        <section className={"services container section"} id={"services"}>
            <h2 className={"section__title"}>Services</h2>
            <div className={"services__container grid"}>
                {data.map(({id,title,description})=>{
                    return <div className={"services__card"} key={id}>
                        <h3 className={"services__title"}>{title}</h3>
                        <p className={"services__description"}>{description}</p>
                    </div>
                })
                }
            </div>
        </section>
    )
}

export default Services