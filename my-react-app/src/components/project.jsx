import project from '../assets/project.mp4';
import fire from '../assets/fire.png';

const Project = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* คำว่า Project ชิดซ้าย พร้อม Padding */}
            <h3 className="text-2xl font-semibold text-gray-800 text-left mb-4">Project</h3>

            {/* Grid Layout สำหรับวิดีโอและรูปภาพ */}
            <div className="grid grid-cols-2 gap-4">
                {/* วิดีโอจากไฟล์ท้องถิ่น */}
                <div className="w-full p-2">
                    <video className="w-full h-56 rounded-lg" controls>
                        <source src={project} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* รูปภาพ */}
                <div className="w-full h-58 ">
                    <a href={fire} target="_blank" rel="noopener noreferrer">
                        <img src={fire} alt="Image 2" className="w-full h-full object-cover rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 ..." />
                    </a>
                </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mt-4">Finding the location of Forest Fire using the Internet of Things</h2>
            <p className="mt-2 text-gray-600">A web application that retrieves various data from IoT sensor devices,
                such as latitude and longitude coordinates, PM2.5 levels, wind speed, wind direction, etc.,
                and determines the location of a wildfire when the IoT sensor detects an hourly average PM2.5 level exceeding 121.22 micrograms per cubic meter.
                The application then displays the wildfire location coordinates on a map using the Google Maps API.</p>
        </div>
    );
};

export default Project;
