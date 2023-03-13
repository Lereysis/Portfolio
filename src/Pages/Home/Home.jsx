import React from 'react'
import style from './Home.module.css'
import imglere from '../../assets/img/imglere.png'
import imgCountry from "../../assets/img/portadaCountry.png"
import imgHuellitas from '../../assets/img/huellitas.png'
import imgWedding from '../../assets/img/wedding.png'
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";
import { BsSuitHeartFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { AiFillBehanceSquare } from "react-icons/ai";
import { GrMail } from "react-icons/gr";

const Home = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.firstSection} >
                    <div className={style.desktop}>
                        <div>Medicenlere</div>
                        <div className={style.desktopMenu}>
                            <a href="#about">About me</a>
                            <a href="#whatIDo">What I do</a>
                            <a href="#LestsTalk">Let's Talk</a>
                        </div>
                    </div>
                    <div className={style.firstSectionInformation}>
                        <div className={style.about}>
                            <p>¡Hi! My name is Lereysis, But you can call me Lere</p>
                            <h2>I'm Full Stack Developer, I really enjoy design and make it real</h2>
                            <p>Frontend developer with experience in developing web applications. I
                                have worked on projects using technologies such as JavaScript, React,
                                Redux, Bootstrap, Mui, NodeJs; I have knowledge in Git version control,
                                Scrum agile development, I am currently studying English and improving
                                my skills with styles. I describe myself as passionate about the latest
                                trends in technology and I like working as a team to create innovative
                                and scalable solutions. </p>
                            <a className={style.icon} href="https://github.com/Lereysis" target='_blank'><AiFillGithub /></a>
                            <a className={style.icon} href="https://www.linkedin.com/in/lereysis-quezada-814a2a21a/" target='_blank'><AiFillLinkedin /></a>
                            <a className={style.icon} href="https://www.instagram.com/lereysisq/" target='_blank'><AiFillInstagram /></a>
                            <a className={style.icon} href="https://www.behance.net/lereysisquezada2022" target='_blank'><AiFillBehanceSquare /></a>
                            <div className={style.firstSectionButtons}>
                                <div>
                                    <a href="#portfolio" className={style.buttonsPorfolio}>Portfolio</a>
                                </div>
                                <div>
                                    <a href="#LestsTalk" className={style.buttonsPorfolioActive}>  ¡Let's Talk!</a>
                                </div>
                            </div>
                        </div>
                        <div className={style.imgAbout}>
                            <img src={imglere} alt="" />
                        </div>
                    </div>
                </div>
                {/* <!-- CARD --> */}

                <div id="about" className={style.cards}>
                    <div className={style.card}>
                        <div className={style.header}>
                            <div className={style.date}><h4>About me</h4></div>
                            <div className={style.title}>
                                <p>Lereysis Quezada</p>
                                <p>Venezuelan</p>
                                <p>23 years old</p>
                                <p>Front End Developer</p>
                                <p>Comunnity Manager</p>
                            </div>
                        </div>

                        <div className={style.footer}>
                            <div className={style.autor}>
                                <a href="#">
                                    <img src={imglere} alt="logo-lere" />
                                    <span>Lereysis Quezada</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- CARD --> */}
                    <div className={`${style.card} ${style["element-1"]}`}>
                        <div className={style.header}>
                            <div className={style.date}><h4>Skills</h4></div>
                            <div className={style.title}>
                                <p>React</p>
                                <p>JavaScript</p>
                                <p>Redux Toolkit</p>
                                <p>Adobe Illustrator</p>
                            </div>
                        </div>

                        <div className={style.footer}>
                            <div className={style.autor}>
                                <a href="#">
                                    <img src={imglere} alt="logo-lere" />
                                    <span>Lereysis Quezada</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- CARD --> */}
                    <div className={`${style.card} ${style["element-2"]}`}>
                        <div className={style.header}>
                            <div className={style.date}><h4>Soft skills</h4></div>
                            <div className={style.title}>
                                <ul>
                                    <li>Group leader</li>
                                    <li>Adaptability</li>
                                    <li>Leaning towards the customer</li>
                                </ul>
                            </div>
                        </div>

                        <div className={style.footer}>
                            <div className={style.autor}>
                                <a href="#">
                                    <img src={imglere} alt="logo-lere" />
                                    <span>Lereysis Quezada</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- CARD -->k */}
                    <div className={`${style.card} ${style["element-3"]}`}>
                        <div className={style.header}>
                            <div className={style.date}><h4>Hobbies</h4></div>
                            <div className={style.title}>
                                <p>Read</p>
                                <p>Bake desserts</p>
                                <p>Find trends in social media</p>
                            </div>
                        </div>

                        <div className={style.footer}>
                            <div className={style.autor}>
                                <a href="#">
                                    <img src={imglere} alt="logo-lere" />
                                    <span>Lereysis Quezada</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 id="whatIDo" className={style.titles}>What I Do</h1>
                <div className={style.secondSectionInformation} >
                    <div className={style.whatIDo}>
                        <a style={{ fontSize: '100px', color: '#f6ce90' }}><RiPagesLine /></a>
                        <p>Do you need a person who help to pass a design to code <br></br> <b>I can do it</b> </p>
                    </div>
                    <div className={style.whatIDo}>
                        <a style={{ fontSize: '100px', color: '#f6ce90' }}><HiOutlineDesktopComputer /></a>
                        <p>Do you need to create a web site like the one you are seing? <br></br> <b>I can help you with that</b></p>

                    </div>
                    <div className={style.whatIDo}>
                        <a style={{ fontSize: '100px', color: '#f6ce90' }}><CgWebsite /></a>
                        <p>Do you need a responsive funtionality website <br /> <b>Let me know</b> </p>
                    </div>
                </div>
                <h1 id="portfolio" className={style.titles}>Porfolio</h1>
                <div>
                    <div className={style.portfolioContainer}>
                        <div>
                            <h1>Country Api</h1>
                            <p> Development of a project in Javascript, React, Redux, Node, Sequelize, and Postman to search for information about countries and create customized tourist activities, with filtering, sorting, and search options by country </p>
                            <a href='https://github.com/Lereysis/PI-Country' target='_blank' className={style.buttonsPorfolio}>See more</a>
                        </div>
                        <div className={style.portfolioImg} style={{ textAlign: 'center' }}>
                            <img src={imgCountry} alt="portada-proyecto-pokemon" />
                            <p>Personal Project</p>
                        </div>
                    </div>
                    <div className={style.portfolioContainer}>
                        <div>
                            <h1>Huellitas de amor</h1>
                            <p>Allow me to present ❤️ "Huellitas de Amor" ❤️ a website created to facilitate the pet adoption process for individuals, foundations, NGOs, and foster homes.
                                <br />
                                Our challenge was to develop: <br />
                                💸 Payment Gateway <br />
                                💬 Translation into three languages: English, Spanish, and Portuguese  <br />
                                📱 Responsive Design <br />
                                💌 Email Notifications <br />
                                🗑 Logical Deletion <br />
                                🗄 Data Persistence (LocalStorage and SessionStorage) <br />
                                🏠 Local and Third-Party Login (Github and Google) <br />
                                📊 User Dashboard with Admin role..</p>
                            <a href='https://huellitas-de-amor.vercel.app/' target="_blank" className={style.buttonsPorfolio}>See more</a>
                        </div>
                        <div className={style.portfolioImg} style={{ textAlign: 'center' }}>
                            <img src={imgHuellitas} alt="portada-proyecto-pokemon" />
                            <p>Group Project</p>
                        </div>
                    </div>
                    <div className={style.portfolioContainer}>
                        <div>
                            <h1>App Invitation</h1>
                            <p>The system is designed to handle event invitations and manage guests, utilizing technologies such as React, Javascript, Redux Toolkit, Bootstrap, and others.</p>
                            <a href='https://wedding-invitation-umber.vercel.app/' className={style.buttonsPorfolio} target='_blank'>See more</a>
                        </div>
                        <div className={style.portfolioImg} style={{ textAlign: 'center' }}>
                            <img src={imgWedding} alt="portada-proyecto-pokemon" />
                            <p>Group Poject</p>
                        </div>
                    </div>
                </div>
                <div className={style.thirdSectionInformation}>
                    <div className={style.moreInformationContainer}>
                        <h4>Academic experience</h4>
                        <h4>Full Stack Developer-Henry Pokemons Single Project:</h4>
                        <ul>
                            <li>The Front-end of the application was made with technologies such as React, Redux.</li>
                            <li>The back-end implements NodeJS, Express, MySQL, and Sequelize.</li>
                            <li>Creation of reusable components.</li>
                            <li>From the store to manage application states.</li>
                        </ul>
                        <h4>Little Footprints of Love Group Project:</h4>
                        <ul>
                            <li>Technologies such as React, Redux Toolkit, MUI js, JavaScript, Fomik and more are used in the Front-end of the application.</li>
                            <li>The back-end implements NodeJS, Express, MySQL, and Sequelize.</li>
                            <li>Creation of reusable components.</li>
                            <li>from the store to manage application states.</li>
                        </ul>
                    </div>
                    <div className={style.moreInformationContainer}>
                        <h4>Work experience</h4>
                        <h4>Design - Community manager</h4>
                        <ul>
                            <li>Development of content plans under organic strategy.</li>
                            <li>Social media account management.</li>
                            <li>Elaboration of pieces of designs according to the brand branding.</li>
                            <li> Sectors of experience: Real Estate Sector, Event Planner,
                                Gift shop, Restaurants.</li>
                        </ul>
                        <h4>Wordpress developer</h4>
                        <ul>
                            <li>Development of web page for advertising agency.</li>
                            <li>Development of a web page for an academy of Argentine tango.</li>
                            <li>Development of a website for the company BIMDAO</li>
                            <li>Elaboration of E-Commerce for gift shop.</li>
                            <li>Elaboration of Landing Page of sales.</li>
                        </ul>
                    </div>
                    <div className={style.moreInformationContainer}>
                        <h4>Education</h4>
                        <h4>Jose Antonio Paez University</h4>
                        <ul>
                            <li>4th semester of marketing 2016-2018</li>
                        </ul>
                        <h4>U.E Industrial Technology High School</h4>
                        <ul>
                            <li>Bachelor's degree 2012-2016</li>
                        </ul>
                        <h4>Colombo american student</h4>
                        <ul>
                            <li>Last level of English course 8 level B1</li>
                        </ul>
                        <h4>Full Stack Developer Bootcamp - Henry - 2022</h4>
                        <ul>
                            <li>800 hours intensive mode, HTML, CSS, JavaScript,
                                React, Redux, NodeJS, ExpressJS, PostgreSQL and Best practices.</li>
                        </ul>
                        <h4>Bamboo Digital School</h4>
                        <ul>
                            <li>Certified as Community manager.</li>
                        </ul>
                        <h4>Platzi</h4>
                        <ul>
                            <li>Html and CSS basics.</li>
                        </ul>

                    </div>
                </div>
                <div className={style.lastSection}>
                    <div id="LestsTalk">
                        <h1>Let's Talk</h1>
                        <div className={style.lastSectionContact}>
                            <div className={style.contact}>
                                <h3><AiFillPhone /> Phone </h3>
                                <p> +57 311 607 45 74</p>
                            </div>
                            <div className={style.contact}>
                                <h3> <GrMail /> Email</h3>
                                <p>designlere@gmail.com</p>
                            </div>
                        </div>
                        <div className={style.lastSectionContact}>
                            <div className={style.contact}>
                                <h3> <AiFillLinkedin />  Linkedin</h3>
                                <p>/Lereysis</p>
                            </div>
                            <div className={style.contact}>
                                <h3><AiFillGithub /> Github</h3>
                                <p>/Lereysis</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={style.imgAbout}>
                            <img src={imglere} alt="" />
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <p>
                        Made by lere
                    </p>
                    <BsSuitHeartFill style={{ color: 'var(--primary-color)' }} />
                </div>


            </div>
        </>
    )
}

export default Home