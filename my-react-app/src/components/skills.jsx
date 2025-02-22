import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // เพิ่ม Pagination
import "swiper/css";
import "swiper/css/pagination";
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import c from "../assets/c.png";
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

const skills = [
    { img: js, name: "JavaScript" },
    { img: ts, name: "TypeScript" },
    { img: python, name: "Python" },
    { img: java, name: "Java" },
    { img: dart, name: "Dart" },
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: tw, name: "Tailwindcss" },
    { img: flask, name: "Flask" },
    { img: flutter, name: "Flutter" },


];

const Skills = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <Typography variant="h4" color="blue-gray" className="text-center font-bold mb-6">
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
                    el: ".swiper-pagination", // กำหนดตำแหน่ง pagination
                }}
                modules={[Pagination]}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
                className="pb-12" // เพิ่ม padding-bottom ให้ Swiper
            >
                {skills.map((skill, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <div className="flex justify-center w-full">
                            <Card className="w-56 sm:w-64 md:w-72 lg:w-80 bg-white shadow-lg rounded-xl overflow-hidden">
                                <CardHeader floated={false} className="h-40 flex justify-center items-center">
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

            {/* เพิ่ม container สำหรับจุดด้านล่าง */}
            <div className="swiper-pagination !static bottom-0 flex justify-center mt-4"></div>
        </div>
    );
};

export default Skills;
