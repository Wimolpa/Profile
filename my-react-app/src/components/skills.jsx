import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";

import java from "../assets/java.png";
import dart from "../assets/dart.png";
import css from "../assets/css.png";
import flask from "../assets/Flask.png";
import flutter from "../assets/Flutter.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import python from "../assets/python.png";
import ts from "../assets/typescript.png";
import tw from "../assets/tw.png"
import react from '../assets/react.jpg'
import node from '../assets/node.jpg'
const skills = [
    { img: js, name: "JavaScript" },
    { img: ts, name: "TypeScript" },
    { img: python, name: "Python" },
    { img: java, name: "Java" },
    { img: dart, name: "Dart" },
    { img: react, name: "React" },
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: tw, name: "Tailwindcss" },
    { img: node, name: "Node.js" },
    { img: flask, name: "Flask" },
    { img: flutter, name: "Flutter" },


];

const Skills = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 text-[#234160]">
            <Typography variant="h2" color="blue-gray" className="text-center font-bold mb-6 pb-3">
                --- Skills ---
            </Typography>

            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                centeredSlides={true}
                centerInsufficientSlides={true}
                pagination={{
                    clickable: true,
                    el: ".swiper-pagination",
                }}
                modules={[Pagination]}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
                className="pb-12"
            >
                {skills.map((skill, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <div className="flex justify-center w-full ">
                            <Card className="w-56 sm:w-64 md:w-72 lg:w-80 bg-white shadow-lg rounded-xl overflow-hidden  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 ...">
                                <CardHeader floated={false} className="h-40 flex justify-center items-center ">
                                    <img src={skill.img} alt={skill.name} className="h-24 object-contain" />
                                </CardHeader>
                                <CardBody className="text-center">
                                    <Typography variant="h6" color="blue-gray" className="text-lg font-semibold">
                                        {skill.name}
                                    </Typography>
                                </CardBody>
                            </Card>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="swiper-pagination !static bottom-0 flex justify-center mt-4"></div>
        </div>
    );
};

export default Skills;
