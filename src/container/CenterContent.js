import React, { useContext, useEffect, useState } from "react";
import WorkPage from "./WorksPage";
import '../styles/CenterContent.css';
import { NavigationContext } from "../context/NavigationContext";

function CenterContent() {

    const [Toggle, setToggle] = useState(true);
    const [AboutToggle, setAboutToggle] = useState(false);
    const [Profileclass, setProfileClass] = useState("ProfilePicture");
    const [CurrentImage, setCurrentImage] = useState('./dennis-portfolio-website/assets/BARSTOOL 1.jpg');

    const {SetToggleWorkPage,ToggleWorkPage} = useContext(NavigationContext);
    const {ToggleExperiencePage, SetToggleExperiencePage} = useContext(NavigationContext);


    function ClickMeProfileToggle () {
        if (Toggle == false) {
            setToggle(true);
            setAboutToggle(false);
            SetToggleWorkPage(false)
            SetToggleExperiencePage(false);
            setProfileClass("ProfilePicture");
        } 
        else if(Toggle == true) {
            setToggle(false);
            SetToggleWorkPage(false)
            setAboutToggle(true);
            SetToggleExperiencePage(false);
        }
    }

    useEffect(() => {
        if (ToggleWorkPage == true) {
            setToggle(false);
            setAboutToggle(false);
            SetToggleExperiencePage(false);
        }

        if (ToggleWorkPage == false && Toggle == false && ToggleExperiencePage == false){
            setToggle(true);
            SetToggleExperiencePage(false);
        }
    },[ToggleWorkPage])

    useEffect(() => {
        if (ToggleExperiencePage == true) {
            setToggle(false);
            SetToggleWorkPage(false)
            setAboutToggle(false);
        }

        if(ToggleExperiencePage == false && Toggle == false && ToggleWorkPage == false){
            setToggle(true);
        }
    },[ToggleExperiencePage])

    return(
        <div className="CenterContainer">
            {!ToggleWorkPage ?
                <div className="ProfileContent">
                {!ToggleWorkPage ? 
                <div className="ProfilePicture" onClick={ClickMeProfileToggle}>
                    <span className="clickable">CLICK ME</span>
                </div>
                :
                ''
                }
                { Toggle ?                 
                <div>
                    <p className={Toggle ? "NameText" : "Hidden"}>DENNIS T. DAYON</p>
                    <p className={Toggle ? "OccupationText" : "Hidden"}>FURNITURE DESIGNER</p>
                    <p className={Toggle ? "Experience" : "Hidden"}>26</p>
                    <p className={Toggle ? "ExperienceText" : "Hidden"}>Years of Experience</p>
                </div> 
                : ''}
                { AboutToggle ?
                <div className="AboutContainer">
                    <div className="AboutMe">
                        <h2>ABOUT ME</h2>
                        <p>
                            Highly skilled and passionate Furniture Designer with long years of experience in creating bespoke furniture design. 
                            Interested in long term career, involving extensive people interaction and diverse corporate projects, would like a challenging position
                            which rewards ambition, initiative and offers opportunities for
                            professional and financial growth.
                        </p>
                    </div>
                    <div className="StrengthProfile">
                        <h2>STRENGTHS</h2>
                        <p>
                            Strong ability to analyze and solve complex design challenges, resulting in
                            innovative solutions that enhance functionality and aesthetics.
                            Skilled in working effectively with cross-functional teams, clients and suppliers
                            to ensure seamless project execution and customer satisfaction.
                        </p>
                    </div>
                    <div className="SkillProfile">
                    <h2>SKILLS</h2>
                        <ul>
                            <li>Furniture Construction</li>
                            <li>AutoCAD</li>
                            <li>3Ds Max</li>
                            <li>Photoshop</li>
                        </ul>
                    </div>
                </div>
                : ''
                }

                { ToggleExperiencePage ? 
                    <div className="WorkExperienceContainer">
                        <h2 className="WorkExperienceText">WORK EXPERIENCE</h2>
                        <div>
                            <h2>Furniture Designer/Draftsman</h2>
                            <h2>Pacific Traders and Manufacturing Corporation 1992-1997</h2>
                            <ul>
                                <li>Collaborate with clients to understand their unique 
                                requirements and translated their vision to stunning furniture designs.
                                </li>
                                <li>Provide full size detailed technical drawings for sample and production</li>
                                <li>Provide route ticket for production</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Product Engineering</h2>
                            <h2>Maitland Smith limited 1997-2000.</h2>
                            <ul>
                                <li>Collaborate with R&D team to finalize the design and 
                                    provide final detailed full-size drawing with constructions for production.
                                </li>
                                <li>Provide route ticket based on final drawing for production</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Furniture Designer</h2>
                            <h2>Shing Mark Enterprises (China) 2001-2007.</h2>
                            <ul>
                                <li>Collaborate with clients to understand their unique requirements and translated their  
                                vision to stunning furniture designs.
                                </li>
                                <li>Utilize CAD software to develop Technical detailed full-size drawing for sample.</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Furniture Designer</h2>
                            <h2>HDF Furniture (USA) 2007 to present.</h2>
                            <ul>
                                <li>Collaborate with teams and clients to understand their unique requirements and 
                                translated their vision to stunning furniture designs.
                                </li>
                                <li>Utilize CAD software to develop detailed technical drawings and provide 3D renderings or
                                Photoshop renderings ensuring accurate production.
                                </li>
                            </ul>
                        </div>
                    </div>
                :
                ''
                }
            </div>
            :
            ''
            }
            { ToggleWorkPage ?
                <div className="MainWorksContainer">
                    <div className="WorksContainer">
                        <div className="Image-Container">
                            <img className='Image1' src='./dennis-portfolio-website/assets/BARSTOOL 1.jpg' alt="BarStool1" onClick={(e) => {setCurrentImage(e.target.src)}}/>
                            <img className='Image2' src='./dennis-portfolio-website/assets/BARSTOOL 2.jpg' alt="BarStool2" onClick={(e) => {setCurrentImage(e.target.src)}}/>
                            <img className='Image3' src='./dennis-portfolio-website/assets/BARSTOOL 3.jpg' alt="BarStool3" onClick={(e) => {setCurrentImage(e.target.src)}}/>
                            <img className='Image4' src='./dennis-portfolio-website/assets/(Montecillo)DRESSER-MIRROR.jpg' alt="Dresser Mirror" onClick={(e) => {setCurrentImage(e.target.src)}}/>
                            <img className='Image5' src='./dennis-portfolio-website/assets/(Noah)DINING CHAIR 2.jpg' alt="Dining Chair" onClick={(e) => {setCurrentImage(e.target.src)}}/>
                            <img className='Image6' src='./dennis-portfolio-website/assets/Noah Chair Draft.jpg' alt="Dining Chair Draft" onClick={(e) => {setCurrentImage(e.target.src)}}/>
                            <img className='Image6' src='./dennis-portfolio-website/assets/CHEST.jpg' alt="Dining Chair Draft" onClick={(e) => {setCurrentImage(e.target.src)}}/>
                            <img className='Image6' src='./dennis-portfolio-website/assets/DRESSER.jpg' alt="Dining Chair Draft" onClick={(e) => {setCurrentImage(e.target.src)}}/>
                            <img className='Image6' src='./dennis-portfolio-website/assets/EXTENSION DINING TABLE.jpg' alt="Dining Chair Draft" onClick={(e) => {setCurrentImage(e.target.src)}}/>
                            <img className='Image6' src='./dennis-portfolio-website/assets/GAME TABLE.jpg' alt="Dining Chair Draft" onClick={(e) => {setCurrentImage(e.target.src)}}/>
                            <img className='Image6' src='./dennis-portfolio-website/assets/LEATHER SOFA.jpg' alt="Dining Chair Draft" onClick={(e) => {setCurrentImage(e.target.src)}}/>
                            <img className='Image6' src='./dennis-portfolio-website/assets/METAL DINING CHAIR.jpg' alt="Dining Chair Draft" onClick={(e) => {setCurrentImage(e.target.src)}}/>
                            <img className='Image6' src='./dennis-portfolio-website/assets/METAL QUEEN BED.jpg' alt="Dining Chair Draft" onClick={(e) => {setCurrentImage(e.target.src)}}/>
                            <img className='Image6' src='./dennis-portfolio-website/assets/NIGHTSTAND 1.jpg' alt="Dining Chair Draft" onClick={(e) => {setCurrentImage(e.target.src)}}/>
                            <img className='Image6' src='./dennis-portfolio-website/assets/NIGHTSTAND 2.jpg' alt="Dining Chair Draft" onClick={(e) => {setCurrentImage(e.target.src)}}/>
                            <img className='Image6' src='./dennis-portfolio-website/assets/NIGHTSTAND 3.jpg' alt="Dining Chair Draft" onClick={(e) => {setCurrentImage(e.target.src)}}/>
                            <img className='Image6' src='./dennis-portfolio-website/assets/ROTATING TOP DESK.jpg' alt="Dining Chair Draft" onClick={(e) => {setCurrentImage(e.target.src)}}/>
                            <img className='Image6' src='./dennis-portfolio-website/assets/TV CONSOLE 1.jpg' alt="Dining Chair Draft" onClick={(e) => {setCurrentImage(e.target.src)}}/>
                            <img className='Image6' src='./dennis-portfolio-website/assets/VANITY DRESSER.jpg' alt="Dining Chair Draft" onClick={(e) => {setCurrentImage(e.target.src)}}/>
                            <img className='Image6' src='./dennis-portfolio-website/assets/wallpaper2.jpg' alt="Dining Chair Draft" onClick={(e) => {setCurrentImage(e.target.src)}}/>
                        </div>
                    </div>
                    <div className="SelectedImage">
                        <img className='Image2' src={CurrentImage} alt="BarStool2"/>
                    </div>
                </div>
                :
                ''
            }
        </div>
    )

}

export default CenterContent;