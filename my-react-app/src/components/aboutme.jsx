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
        <div className="flex flex-col md:flex-row items-center justify-center w-full h-screen px-4 py-4 space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-center md:items-start">
                {/* ข้อความสไลด์เข้ามา */}
                <p
                    className={`text-3xl md:text-4xl font-bold transform transition-all duration-1000 self-start 
                        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                >
                    I'm
                </p>
                <p
                    className={`text-5xl md:text-6xl font-semibold transform transition-all duration-1000 
                        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                >
                    Wimolpa Inkong
                </p>
            </div>
            <div>
                <img
                    className={`w-32 h-32 md:w-48 md:h-48 object-cover rounded-full transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                    src={image}
                    alt="Profile"
                />
            </div>
        </div>
    );
};

export default AboutMe;
