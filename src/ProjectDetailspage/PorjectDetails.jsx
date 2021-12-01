import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from 'swiper';
import NavigationBar from './../Shared/NavigationBar'
import './projectdetails.css';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { Link } from 'react-router-dom';


SwiperCore.use([EffectCoverflow,Pagination,Autoplay]);


const ProjectDetails = () => {
    const {id} = useParams();
    const [project, setProject] = useState([]);
    const [picture, setPicture] = useState([]);
    const [points, setPoints] = useState([]);
    // const {id} = location();
    console.log(id)

    useEffect(()=>{
        fetch("/project-data.json")
            .then(res => res.json())
            .then(res =>{
                const singleProject = res.filter(project=> project.id == id);
                setProject(singleProject[0]);
                console.log("hello chandan",singleProject[0].pic)
                setPicture(singleProject[0].pic)
                setPoints(singleProject[0].bullet_points)
            })
    }, [])

    return ( 
        <div>
            <NavigationBar />
            {/* {project.pic.map? console.log("hello"): null} */}
            <div className="pt-10">
                <Swiper className="w-3/4 container" effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'}  autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
                }} coverflowEffect={{
                "rotate": 20,
                "stretch": 0,
                "depth": 100,
                "modifier": 1,
                "slideShadows": true
                }} pagination={true} className="mySwiper">
                    {picture.map(pic=>

                <SwiperSlide>
                    <div className="h-full flex flex-col items-center justify-center">
                        <img src={pic} alt="" className="w-4/5 h-96"  />
                    </div>
                </SwiperSlide>
                )}
                {/* <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-5.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-6.jpg" /></SwiperSlide> */}
                </Swiper>
            </div>
            <div className="container">
                <h1 className="mt-5 text-4xl font-semibold">{project.title}</h1>
                <div className="title-underline rounded-full"></div>
                <article className="w-3/4 text-justify mt-3">{project.des}</article>
                <ul className="mt-3">
                    {points.map(point=>
                    <li className="list-disc">{point}</li>
                    )}
                </ul>
                <div className="mb-4">
                    <a href={`${project.live_site}`} target="_blank" className="project-site-btn">
                        <span>Live Site</span>
                    </a>
                    <a href={`${project.github_client}`} target="_blank" className="project-site-btn">
                        <span>Github Client</span>
                    </a>
                    <a href={`${project.github_server}`} target="_blank" className="project-site-btn">
                        <span>Github Server</span>
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectDetails;