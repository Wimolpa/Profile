import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Card, CardHeader, CardBody, Typography } from '@material-tailwind/react';
import c from '../assets/c.png';
import java from '../assets/java.png';
import dart from '../assets/dart.png';
import css from '../assets/css.png';
import flask from '../assets/Flask.png';
import flutter from '../assets/Flutter.png';
import html from '../assets/html.png';
import js from '../assets/js.png';
import python from '../assets/python.png';
import ts from '../assets/typescript.png';
import { useState } from 'react';

const Skills = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveSlide(swiper.activeIndex);
    };

    return (
        <div className="mx-auto px-4">
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                onSlideChange={handleSlideChange}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                <SwiperSlide>
                    <Card className="w-full max-w-xs mx-auto">
                        <CardHeader floated={false} className="h-full">
                            <img src={js} alt="JavaScript" className="w-full h-32 object-contain" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h6" color="blue-gray" className="mb-2 text-sm sm:text-base">
                                JavaScript
                            </Typography>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className="w-full max-w-xs mx-auto">
                        <CardHeader floated={false} className="h-full">
                            <img src={ts} alt="TypeScript" className="w-full h-32 object-contain" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h6" color="blue-gray" className="mb-2 text-sm sm:text-base">
                                TypeScript
                            </Typography>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className="w-full max-w-xs mx-auto">
                        <CardHeader floated={false} className="h-full">
                            <img src={python} alt="Python" className="w-full h-32 object-contain" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h6" color="blue-gray" className="mb-2 text-sm sm:text-base">
                                Python
                            </Typography>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className="w-full max-w-xs mx-auto">
                        <CardHeader floated={false} className="h-full">
                            <img src={java} alt="Java Programming Language" className="w-full h-32 object-contain" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h6" color="blue-gray" className="mb-2 text-sm sm:text-base">
                                Java Programming Language
                            </Typography>
                        </CardBody>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className="w-full max-w-xs mx-auto">
                        <CardHeader floated={false} className="h-full">
                            <img src={dart} alt="Dart Programming Language" className="w-full h-32 object-contain" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h6" color="blue-gray" className="mb-2 text-sm sm:text-base">
                                Dart Programming Language
                            </Typography>
                        </CardBody>
                    </Card>
                </SwiperSlide>
            </Swiper>

            {/* แสดงหมายเลขสไลด์ปัจจุบัน */}
            <div className="mt-4 text-center">
                <Typography variant="h5" color="blue-gray">
                    Slide {activeSlide + 1} of 10
                </Typography>
            </div>
        </div>
    );
};

export default Skills;
