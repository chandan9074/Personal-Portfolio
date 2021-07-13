import React, { useState } from 'react';

import './home_style.css';
import chandan_h from './/pictures/chandan_h.png';
import chandan_a from './/pictures/chandan_a.png';
import html from './/pictures/html.png';
import js from './/pictures/js.png';
import css from './/pictures/css.png';
import c from './/pictures/c.png';
import c_p from './/pictures/c++.png';
import py from './/pictures/python.png';
import pr from './/pictures/pr.png';
import ps from './/pictures/ps.png';
import ai from './/pictures/ai.png';
import dj from './/pictures/dj.png';
import r_js from './/pictures/r_js.png';
import b_c from './/pictures/b_c.png';
import git from './/pictures/git.png';
import fb from './/pictures/fb.png';
import lk from './/pictures/lk.png';
import github from './/pictures/github.png';
import ins from './/pictures/ins.png';
import ck_logo from './/pictures/ck_logo.png';



import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    delay: 0,
    offset: 120,
    duration: 900, 
    easing: 'ease-in-out-back',
    mirror: true,
});

const Home = () => {


    const [web, setWeb] = useState(true)
    const [prog, setProg] = useState(false)
    const [design, setDesign] = useState(false)
    const [fram, setFram] = useState(false)

    const handleWeb = () =>{
        setWeb(true);
        setProg(false);
        setDesign(false);
        setFram(false);
    }

    const handleProg = () =>{
        setWeb(false);
        setProg(true);
        setDesign(false);
        setFram(false);
    }

    const handleDesign = () =>{
        setWeb(false);
        setProg(false);
        setDesign(true);
        setFram(false);
    }

    const handleFram = () =>{
        setWeb(false);
        setProg(false);
        setDesign(false);
        setFram(true);
    }

    return ( 
        <div>
            <div className="navbar">
                <img className="ck_logo_img" src={ck_logo} alt="ck_logo..." />
                <div className="navbar1"> 
                    <a href="#home" className="nav_h">Home</a>
                    <a href="#about" className="nav_a">About me</a>
                    <a href="#skill" className="nav_s">Skill</a>
                    <a href="#proj" className="nav_p">Projects</a>
                </div>
            </div>
            <div>
                <div className="home">
                    <div id="home" className="home_card_pos">
                        <div className="home_card" data-aos="fade">
                            <div className="card_h_des">
                                <p className="home_t_1" data-aos="fade-down">Hello, I'm</p>
                                <p className="home_t_2" data-aos="zoom-in">Chandan Kumar Das</p>
                                <div className="ul_chandan" data-aos="fade"></div>
                                <p className="home_t_3" data-aos="fade-up-left">Full Stack Developer</p>
                                <a href={require('./pictures/chandan.pdf').default} target="_blank"><button className="resume_btn" data-aos="fade">RESUME</button></a>
                            </div>
                            <img className="chandan_h_style" data-aos="fade" src={chandan_h} alt="chandan_h..." />
                        </div>
                    </div>
                </div>
                <div id="about" className="about">
                    <img className="chandan_a_style" src={chandan_a} alt="chandan_a..." data-aos="zoom-in" />
                    <div className="about_me_pos">
                        <p className="about_me_title" data-aos="fade-down">About me</p>
                        <div className="ul_about" data-aos="fade-left"></div>
                        <p className="about_me_des" data-aos="zoom-in">Creating Something is a great satisfaction
                        of life. In my time there is no exception. Myself Chandan
                        Kumar Das, a full stack Web Developer. I create
                        many web application based on Django and
                        Django Rest API in backend and JavaScripts,
                        React JS, Html, CSS, Jquery, Bootstrap in
                        frontend part. <br /><br />
                        Now I am studing at Daffodil International 
                        University in Computer Science and Engineering 
                        Department.
                        </p>
                    </div>
                </div>

                <div id="skill" className="skills">
                    <div className="skill_card" data-aos="fade">
                        <p className="skill_card_heading" data-aos="fade-down">What I do</p>
                        <div className="under_line" data-aos="fade-right"></div>
                        <p className="skill_des" data-aos="zoom-out">I am working with some Web Language for creating web applications. Besides, make my application more 
                            responsible and user friendly I also use some framworks. For designing a UI, I use some Adobe Tools.
                            Todays, Problem solving is a big agenda. For solving porblem, I learn some programing language. 
                        </p>
                        <div className="skill_card_property" data-aos="zoom-out">
                            <p className="txt_skill">Skills</p>
                            <div className="skill_property_box">
                                {web?<div className="web_language">
                                    <div className="html_card move_card">
                                        <img className="img_style_1" src={html} alt="html.." />
                                    </div>
                                    <div className="css_card move_card">
                                        <img className="img_style_2" src={css} alt="css.." />
                                    </div>
                                    <div className="js_card move_card">
                                        <img className="img_style_3" src={js} alt="js.." />
                                    </div>
                                </div>:null}
                                {prog?<div className="prog_language">
                                    <div className="c_card move_card">
                                        <img className="img_style_1" src={c} alt="c.." />
                                    </div>
                                    <div className="c_p_card move_card">
                                        <img className="img_style_4" src={c_p} alt="c++.." />
                                    </div>
                                    <div className="py_card move_card">
                                        <img className="img_style_5" src={py} alt="py.." />
                                    </div>
                                </div>:null}
                                {design?<div className="design">
                                    <div className="ps_card move_card">
                                        <img className="img_style_1" src={ps} alt="ps.." />
                                    </div>
                                    <div className="pr_card move_card">
                                        <img className="img_style_6" src={pr} alt="pr.." />
                                    </div>
                                    <div className="ai_card move_card">
                                        <img className="img_style_4" src={ai} alt="ai.." />
                                    </div>
                                </div>:null}
                                {fram?<div className="framework">
                                    <div className="dj_card move_card">
                                        <img className="img_style_4" src={dj} alt="ps.." />
                                    </div>
                                    <div className="r_js_card move_card">
                                        <img className="img_style_4" src={r_js} alt="pr.." />
                                    </div>
                                    <div className="b_c_card move_card">
                                        <img className="img_style_7" src={b_c} alt="ai.." />
                                    </div>
                                </div>:null}
                            </div>
                        </div>
                        <div className="buttons_pos" data-aos="zoom-in">
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <button onClick={handleWeb} className="web_btn">Web Language</button>
                                {web?<div className="btn_w_ul" data-aos="zoom-in" data-aos-duration="200"></div>:null}
                            </div>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <button onClick={handleProg} className="pr_btn">Programing Language</button>
                                {prog?<div className="btn_p_ul" data-aos="zoom-in" data-aos-duration="200"></div>:null}
                            </div>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <button onClick={handleDesign} className="des_btn">Design</button>
                                {design?<div className="btn_d_ul" data-aos="zoom-in" data-aos-duration="200"></div>:null}
                            </div>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <button onClick={handleFram} className="fram_btn">Framwork</button>
                                {fram?<div className="btn_f_ul" data-aos="zoom-in" data-aos-duration="200"></div>:null}
                            </div>
                        </div>
                    </div>
                </div>

                <div id="proj" className="projects">
                    <p className="projects_title" data-aos="fade-down">Few Projects</p>
                    <div >
                        <div className="under_line_p" data-aos="fade-left"></div>
                    </div>
                    <div className="project_pos">
                        <div className="hack_card" data-aos="fade-right">
                            <p className="hack_title" data-aos="zoom-out">Hacksprint</p>
                            <div className="hack_ul" data-aos="fade-left"></div>
                            <p className="hack_des" data-aos="zoom-out">In this application people can easily make their skill by problem solving, developing, hackathon and this
                                awesome application build by Django, JS(React JS), MySQL.
                            </p>
                            <a className="git" href="https://github.com/chandan9074/Hacksprint/"><img src={git} alt="git" className="git_img"  /></a>
                        </div>
                        <div className="vote_card" data-aos="zoom-in">
                            <p className="vote_title" data-aos="zoom-out">Vote!!</p>
                            <div className="vote_ul" data-aos="fade-left"></div>
                            <p className="vote_des" data-aos="zoom-out">By this we can easily find out other's peoples opinion. User can create
                            private or public poll. React JS, Django, MySQL is use for create this application.
                            </p>
                            <a className="git" href="https://github.com/chandan9074/Vote-Client/"><img src={git} alt="git" className="git_img"  /></a>
                        </div>
                        <div className="link_card"data-aos="fade-left">
                            <p className="link_title" data-aos="zoom-out">Link Short</p> 
                            <div className="vote_ul" data-aos="fade-left"></div>
                            <p className="link_des" data-aos="zoom-out">In this platform user can uasily convert their big link
                            into short and editable link. React JS, Django, MySQL is use for create this application. 
                            </p>
                            <a className="git" href="https://github.com/chandan9074/Link-Short-Client/"><img src={git} alt="git" className="git_img"  /></a>
                        </div>

                    </div>
                </div>

                <div id="contact" className="contact_me">
                    <p className="_me_title" data-aos="fade-down">Contact Me</p>
                    <div>
                        <div className="under_line_p" data-aos="fade-left"></div>
                    </div>
                    <div className="address_margin" data-aos="zoom-out">
                        <a href="https://github.com/chandan9074/" ><img className="add_size g_btn" src={github} alt="github..." /></a>
                        <a href="https://www.facebook.com/ChandanRaj0110/" ><img className="add_size f_btn" src={fb} alt="fb..." /></a>
                        <a href="https://www.linkedin.com/in/chandan-kumar-das-53093720b/" ><img className="add_size l_btn" src={lk} alt="lk..." /></a>
                        <a href="https://www.instagram.com/chandanraj0110/" ><img className="add_size i_btn" src={ins} alt="ins..." /></a>
                    </div>
                    <a className="mail" href="mailto:chandanraj9074@gmail.com">chandanraj9074@gmail.com</a>
                    <p className="qout">I  AM  ALWAYS  THERE  TO  TALK  TO  YOU</p>
                </div>
            </div>
        </div>
     );
}
 
export default Home;