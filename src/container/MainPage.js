import React, { useEffect, useState } from "react";
import '../styles/MainPage.css';
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import CenterContent from "./CenterContent";
import { NavigationContext } from "../context/NavigationContext";


function Mainpage(props) {

    const [ToggleWorkPage, SetToggleWorkPage] = useState(false);
    const [ToggleExperiencePage, SetToggleExperiencePage] = useState(false);

    return (
            <div className="MainContainer">
                <NavigationContext.Provider value={ {ToggleWorkPage, SetToggleWorkPage, ToggleExperiencePage, SetToggleExperiencePage} }>
                    <CenterContent/>
                    <Footer/>
                </NavigationContext.Provider>
            </div>
    )
}

export default Mainpage;