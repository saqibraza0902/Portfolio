import React, { useEffect, useState } from 'react'
import myimg from './images/click.png'
import { SiWebmoney } from 'react-icons/si'
import { GiComputerFan, GiPhotoCamera } from 'react-icons/gi'
import { BsGlobe, BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs'
import { MdPhone, MdEmail } from 'react-icons/md'
import { FaMapSigns, FaPaperPlane, FaFacebookF } from 'react-icons/fa'
import { CgArrowLongRight } from 'react-icons/cg'
import { ImLocation } from 'react-icons/im'
import emailjs from '@emailjs/browser'
import swal from 'sweetalert'
import CV from './mern.pdf'


const App = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [sub, setSub] = useState('')
    const [msge, setMsge] = useState('')
    const [show, setShow] = useState(false)



    const handleSubmit = (e) => {

        e.preventDefault();
        emailjs
            .send("service_lwpxykc", "template_9bb5gan", { name, email, sub, msge }, "lLaaw4kL2QxWrMoK7")
            .then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                },
                function (error) {
                    console.log("FAILED...", error);
                }
            );
        setName(''); setEmail(''); setSub(''); setMsge('')
        swal('Success', 'Your message has been recoreded', { timer: 2000 })
    }
    useEffect(() => {
        window.addEventListener("scroll", scrollBar)
    }, [])

    const scrollBar = () => {
        if (window.scrollY > 250) {
            setShow(true)
        } else if (window.screenY <= 250) {
            setShow(false)
        }
    }

    return (
        <div id="home-section">
            <nav className={show === true ? "navbar abc sticky-top navbar-expand-sm navbar-dark" : "navbar abc navbar-expand-sm navbar-dark"} style={{ background: 'black' }}>
                <div className="container">
                    <span  className="navbar-brand">Saqib</span>
                    <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse nav-ul navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav ml-auto ">
                            <li className="nav-item"><a href="#home-section" className="nav-link"><span className='header-item'>Home</span></a></li>
                            <li className="nav-item"><a href="#about-section" className="nav-link"><span className='header-item'>About</span></a></li>
                            <li className="nav-item"><a href="#services-section" className="nav-link"><span className='header-item'>Services</span></a></li>
                            <li className="nav-item"><a href="#skills-section" className="nav-link"><span className='header-item'>Skills</span></a></li>
                            <li className="nav-item"><a href="#projects-section" className="nav-link"><span className='header-item'>Projects</span></a></li>
                            <li className="nav-item"><a href="#contact-section" className="nav-link"><span className='header-item'>Contact</span></a></li>
                        </ul>

                    </div>
                </div>
            </nav>
            <section  className="hero home-sect">
                <div className="text-white name-detail">
                    <span className="subheading">Hello!</span>
                    <h1 className="mb-4 mt-3">I'm <span>Saqib Raza</span></h1>
                    <h2 className="mb-4">A Professional<span> Web </span>Developer</h2>
                    <span className='hire'><a className='text-white' href='#contact-section'>Hire me</a></span>
                    <span className='mywork ms-3'><a className='text-white' href='#projects-section'>My works</a></span>
                </div>
            </section>
            <section className="about-sect img ftco-section ftco-no-pb" id="about-section">
                <div className="container">
                    <div className="row d-flex pt-5">
                        <div className="col-md-6 col-lg-5 d-flex">
                            <div className="img-about img">
                                <div className="overlay"></div>
                                <div className='d-flex justify-content-center align-items-center '>
                                    <img style={{ height: '500px' }} className='img-fluid' src={myimg} alt='' />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
                            <div className="row justify-content-start pb-3">
                                <div className="col-md-12 heading-section">
                                    <h1 className='big-about'>About</h1>
                                    <h2 className="mb-4 big-1">About Me</h2>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    <ul className="about-info mt-4 px-md-0 px-2">
                                        <li className="d-flex"><span>Name:</span> <span>Saqib Raza</span></li>
                                        <li className="d-flex"><span>Date of birth:</span> <span>February 09, 2000</span></li>
                                        <li className="d-flex"><span>Address:</span> <span>Jhang Road Faisalabad, Pakistan</span></li>
                                        <li className="d-flex"><span>Zip code:</span> <span>38000</span></li>
                                        <li className="d-flex"><span>Email:</span> <span>saqibraza0902@gmail.com</span></li>
                                        <li className="d-flex"><span>Phone: </span> <span>+92 335 7275 136</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="counter-wrap ftco-animate d-flex mt-md-3">
                                <div className="text">
                                    <span><a className='text-white' href={CV}>Download CV</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services-sect" id="services-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 heading-section text-center ftco-animate">
                            <h1 className="big-service">Services</h1>
                            <h2 className="big-2 mb-5">Services</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 text-center d-flex ftco-animate">
                            <span className="services-1">
                                <span className="icon">
                                    <i><SiWebmoney /></i>
                                </span>
                                <div className="desc">
                                    <h3 className="mb-5">Web Design</h3>
                                </div>
                            </span>
                        </div>
                        <div className="col-md-4 text-center d-flex ftco-animate">
                            <span className="services-1">
                                <span className="icon">
                                    <i><GiPhotoCamera /></i>
                                </span>
                                <div className="desc">
                                    <h3 className="mb-5">Phtography</h3>
                                </div>
                            </span>
                        </div>
                        <div className="col-md-4 text-center d-flex ftco-animate">
                            <span className="services-1">
                                <span className="icon">
                                    <i><GiComputerFan /></i>
                                </span>
                                <div className="desc">
                                    <h3 className="mb-5">Web Developer</h3>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="skill-sect" id="skills-section">
                <div className="container ">
                    <div className="row justify-content-center pb-5 mb-5">
                        <div className="col-md-12 heading-section text-center ftco-animate">
                            <h1 className="big big-skill">Skills</h1>
                            <h2 className="mb-4 big-3">My Skills</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 animate-box">
                            <div className="progress-wrap ftco-animate">
                                <h3>React JS</h3>
                                <div className="progress">
                                    <div className="progress-bar color-1" role="progressbar" aria-valuenow="75"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}>
                                        <span>75%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box">
                            <div className="progress-wrap ftco-animate">
                                <h3>Node JS</h3>
                                <div className="progress">
                                    <div className="progress-bar color-2" role="progressbar" aria-valuenow="80"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                        <span>80%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box">
                            <div className="progress-wrap ftco-animate">
                                <h3>HTML5</h3>
                                <div className="progress">
                                    <div className="progress-bar color-3" role="progressbar" aria-valuenow="95"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: "95%" }}>
                                        <span>95%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box">
                            <div className="progress-wrap ftco-animate">
                                <h3>CSS3</h3>
                                <div className="progress">
                                    <div className="progress-bar color-4" role="progressbar" aria-valuenow="90"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                                        <span>90%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box">
                            <div className="progress-wrap ftco-animate">
                                <h3>WordPress</h3>
                                <div className="progress">
                                    <div className="progress-bar color-5" role="progressbar" aria-valuenow="70"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
                                        <span>70%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate-box">
                            <div className="progress-wrap ftco-animate">
                                <h3>MongoDB</h3>
                                <div className="progress">
                                    <div className="progress-bar color-6" role="progressbar" aria-valuenow="80"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                        <span>80%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section ftco-project" id="projects-section">
                <div className="container">
                    <div className="row justify-content-center pb-5">
                        <div className="col-md-12 heading-section text-center ftco-animate">
                            <h1 className="big big-project">Projects</h1>
                            <h2 className="big-4">Our Projects</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="project img img-1 ftco-animate d-flex justify-content-center align-items-center" >
                                <div className="overlay"></div>
                                <div className="text d-flex justify-content-end ">
                                    <span className='fs-3 me-3'><a href='https://github.com/saqibraza0902/simple-static-website'><i><BsGithub /></i></a></span>
                                    <span className='fs-3'><a href='https://restaurants-static.netlify.app/'><i><BsGlobe /></i></a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="project img img-2 ftco-animate d-flex justify-content-center align-items-center">
                                <div className="overlay"></div>
                                <div className="text text-center p-4">
                                    <span className='fs-3 me-3'><a href='https://github.com/saqibraza0902/online-library'><i><BsGithub /></i></a></span>
                                    <span className='fs-3'><a href='https://online-library-client.herokuapp.com/'><i><BsGlobe /></i></a></span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="project img img-3 ftco-animate d-flex justify-content-center align-items-center" >
                                <div className="overlay"></div>
                                <div className="text text-center p-4">
                                    <span className='fs-3 me-3'><a href='https://github.com/saqibraza0902/Charity-static'><i><BsGithub /></i></a></span>
                                    <span className='fs-3'><a href='https://charity-react-app.herokuapp.com'><i><BsGlobe /></i></a></span>
                                </div>
                            </div>

                            <div className="project img img-4 ftco-animate d-flex justify-content-center align-items-center" >
                                <div className="overlay"></div>
                                <div className="text text-center p-4">
                                    <span className='fs-3 me-3'><a href='https://github.com/saqibraza0902/library-management-system'><i><BsGithub /></i></a></span>
                                    <span className='fs-3'><a href='https://library-system-client.herokuapp.com/'><i><BsGlobe /></i></a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="project img img-5 ftco-animate d-flex justify-content-center align-items-center" >
                                        <div className="overlay"></div>
                                        <div className="text text-center p-4">
                                            <span className='fs-3 me-3'><a href='https://github.com/saqibraza0902/react-e-commerce'><i><BsGithub /></i></a></span>
                                            <span className='fs-3'><a href='https://react-e-commerce-client.vercel.app'><i><BsGlobe /></i></a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <h1 className="big big-contact">Contact</h1>
                            <h2 className="big-5">Contact Me</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-between contact-info mb-5">
                        <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                            <div className="align-self-stretch box p-4 text-center ">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span><i><FaMapSigns /></i></span>
                                </div>
                                <h3 className="mb-4 text-white">Address</h3>
                                <p style={{ color: '#999999', fontWeight: '300' }}>Paradise Garden Jhang Road Faisalabad, Pakistan</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                            <div className="align-self-stretch box p-4 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span><i><MdPhone /></i></span>
                                </div>
                                <h3 className="mb-4 text-white">Contact Number</h3>
                                <p style={{ color: '#999999', fontWeight: '300' }}>+92 335 7275 136</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                            <div className="align-self-stretch box p-4 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span><i><FaPaperPlane /></i></span>
                                </div>
                                <h3 className="mb-4 text-white">Email Address</h3>
                                <p style={{ color: '#999999', fontWeight: '300' }}>saqibraza0902@gmail.com</p>
                            </div>
                        </div>

                    </div>

                    <div className="row no-gutters block-9">
                        <div className="col-md-6 order-md-last d-flex p-0">
                            <form onSubmit={(e) => handleSubmit(e)} className="bg-secondary p-4 p-md-5 contact-form">
                                <div className="form-group">
                                    <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" name='sub' value={sub} onChange={(e) => setSub(e.target.value)} placeholder="Subject" required />
                                </div>
                                <div className="form-group">
                                    <textarea name='msge' value={msge} onChange={(e) => setMsge(e.target.value)} id="" cols="30" rows="7" placeholder="Message" required></textarea>
                                </div>
                                <div className="form-group d-grid">
                                    <button type="submit" className="text-white send-btn" >Send Message</button>
                                </div>
                            </form>

                        </div>

                        <div className="col-md-6 d-none d-lg-flex" style={{ backgroundColor: '#1e1e1e' }}>
                            <img style={{ height: '500px', marginLeft: '120px' }} className='img-fluid' src={myimg} alt='' />                        </div>
                    </div>
                </div>
            </section>
            <footer className="ftco-footer ftco-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">About</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                    <li className="ftco-animate"><span><i><BsTwitter /></i></span></li>
                                    <li className="ftco-animate"><span><i><FaFacebookF /></i></span></li>
                                    <li className="ftco-animate"><span><i><BsInstagram /></i></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4 ml-md-4">
                                <h2 className="ftco-heading-2">Links</h2>
                                <ul className="list-unstyled">
                                    <li><span className="me-2"><CgArrowLongRight /></span>Home</li>
                                    <li><span className="me-2"><CgArrowLongRight /></span>About</li>
                                    <li><span className="me-2"><CgArrowLongRight /></span>Services</li>
                                    <li><span className="me-2"><CgArrowLongRight /></span>Projects</li>
                                    <li><span className="me-2"><CgArrowLongRight /></span>Contact</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Services</h2>
                                <ul className="list-unstyled-service m-0 p-0">
                                    <li><span className="me-2"><CgArrowLongRight /></span>Web Design</li>
                                    <li><span className="me-2"><CgArrowLongRight /></span>Web Development</li>
                                    <li><span className="me-2"><CgArrowLongRight /></span>Business Strategy</li>
                                    <li><span className="me-2"><CgArrowLongRight /></span>Data Analysis</li>
                                    <li><span className="me-2"><CgArrowLongRight /></span>Graphic Design</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Have a Questions?</h2>
                                <div className="block-23 mb-3">
                                    <ul className='list-unstyled-about'>
                                        <li><span className="me-2"><ImLocation /></span>Paradise Garden Jhang Road Faisalabad, Pakistan</li>
                                        <li><span className="me-2"><MdPhone /></span>+92 335 7275 136</li>
                                        <li><span className="me-2"><MdEmail /></span>saqibraza0902<br></br>@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center" style={{ color: '#999999' }}>
                            Copyright ©2022 All rights reserved
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App
