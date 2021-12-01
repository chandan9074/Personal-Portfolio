import React from 'react';
import NavigationBar from '../Shared/NavigationBar';
import chandan_a from './../pictures/chandan_a.png';
import github from './../pictures/git.png'
import fb from './../pictures/fb.png'
import lk from './../pictures/lk.png'
import ins from './../pictures/ins.png'

const Aboutme = () => {
    return ( 
        <div>
            <NavigationBar />
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
            <div id="contact" className="contact_me">
                <p className="_me_title" data-aos="fade-down">Connect Me</p>
                <div>
                    <div className="under_line_p" data-aos="fade-left"></div>
                </div>
                <div className="address_margin flex" data-aos="zoom-out">
                    <a href="https://github.com/chandan9074/" ><img className="add_size g_btn" src={github} alt="github..." /></a>
                    <a href="https://www.facebook.com/ChandanRaj0110/" ><img className="add_size f_btn" src={fb} alt="fb..." /></a>
                    <a href="https://www.linkedin.com/in/chandan-kumar-das-53093720b/" ><img className="add_size l_btn" src={lk} alt="lk..." /></a>
                    <a href="https://www.instagram.com/chandanraj0110/" ><img className="add_size i_btn" src={ins} alt="ins..." /></a>
                </div>
                <a className="mail" href="mailto:chandanraj9074@gmail.com">chandanraj9074@gmail.com</a>
                <p className="qout">I  AM  ALWAYS  THERE  TO  TALK  TO  YOU</p>
            </div>
        </div>
     );
}
 
export default Aboutme;