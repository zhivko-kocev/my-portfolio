import React from "react";
import WebIcon from "./shapes/WebIcon";
import UserIcon from "./shapes/UserIcon";
import TechIcon from "./shapes/TechIcon";
import "./shapes.css"
import ScriptIcon from "./shapes/ScriptIcon";
import HtmlIcon from "./shapes/HtmlIcon";
import CssIcon from "./shapes/CssIcon";
import LineIcon from "./shapes/LineIcon";
import PeopleIcon from "./shapes/PeopleIcon";
import CodeIcon from "./shapes/CodeIcon";
import MonitorIcon from "./shapes/MonitorIcon";
import TagIcon from "./shapes/TagIcon";
import MailIcon from "./shapes/MailIcon";
import AtIcon from "./shapes/AtIcon";
import JavaIcon from "./shapes/JavaIcon";

const Shapes = () => {
  return(
      <div className={"shapes"}>
          <WebIcon/>
          <UserIcon/>
          <TechIcon/>
          <ScriptIcon/>
          <HtmlIcon/>
          <CssIcon/>
          <LineIcon/>
          <CodeIcon/>
          <MonitorIcon/>
          <TagIcon/>
          <MailIcon/>
          <JavaIcon/>
      </div>
  )
}

export default Shapes