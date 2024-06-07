import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import '../styles/Footer.css';
import { NavLink } from "react-router-dom";
import { NavigationContext } from "../context/NavigationContext";

function Footer() {

    const {SetToggleWorkPage, ToggleWorkPage} = useContext(NavigationContext);
    const {SetToggleExperiencePage, ToggleExperiencePage} = useContext(NavigationContext);

    return(
        <div className="Selection">
            <ul>
                <li onClick={ () => {SetToggleWorkPage(!ToggleWorkPage)} }>WORKS</li>
                <li onClick={ () => {SetToggleExperiencePage(!ToggleExperiencePage)} }>EXPERIENCE</li>
            </ul>
        </div>
    )

}

export default Footer;