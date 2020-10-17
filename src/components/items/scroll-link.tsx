import React,{ ReactChild } from "react";
import { Link } from "react-scroll";
import { scrollDuration } from "../../bin/scroll-params";
import "../../style/items/scroll-link.css"

export const ScrollLinkComponent = ({children, to, className} : {children : ReactChild, to : string, className? : string})=> (
    <Link
    smooth={true}
    duration={scrollDuration}
    to={to}
    className={"scroll-link " + (className ?? "")}
    >
        {children}
    </Link>
)