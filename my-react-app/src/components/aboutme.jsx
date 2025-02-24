import image from '../assets/image.jpg';
import { useState, useEffect } from 'react';

const AboutMe = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // ให้ข้อความแสดงเมื่อหน้าเว็บโหลดเสร็จ
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // 100ms delay ให้เริ่มแสดงหลังจากโหลดเสร็จ

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="flex flex-col items-center justify-center w-full h-screen px-4 pt-4 space-y-8 text-[#234160]">
            <div className="flex flex-col items-center text-center ">
                <div className="flex flex-col items-center ">
                    <div class="grid grid-rows-3 grid-flow-col gap-4">

                        <div class="col-span-1 ... w-10 "></div>
                        <div class="col-span-1 ... w-10 "></div>
                        <div class="col-span-1   ... w-10  ">
                            <p
                                className={`text-4xl md:text-5xl font-bold transform transition-all duration-1000 w-full text-right 
                        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}  pr-10  pt-1 sm:pt-3 md:pt-6`}
                            >
                                I'm
                            </p>
                        </div>
                        <div class="row-span-3 col-span-2 ... mx-0 md:mx-20 ">
                            <img
                                className={`max-w-43 max-h-43 md:max-w-56 md:max-h-56 lg:max-w-64 lg:max-h-64  w-43 h-43 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-full border-7 border-[#d8e6ed] transform transition-all duration-1000 
                    ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                                src={image}
                                alt="Profile"
                            />
                        </div>
                        <div class="col-span-3 ... w-10"></div>
                        <div class="col-span-3 ... w-10 "></div>
                        <div class="col-span-3 ... w-10"></div>
                    </div>

                    <p
                        className={`pb-1 text-5xl md:text-6xl font-semibold transform transition-all duration-1000 
                        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                    >
                        Wimolpa Inkong
                    </p>

                    <p
                        className={`pt-3 text-lg md:text-2xl font-semibold transform transition-all duration-1000 text-center
                    ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                    >
                        Graduated from Silpakorn University, Faculty of Science, majoring in Computer Science.
                    </p>

                </div>
            </div>
        </div>



    );
};

export default AboutMe;
