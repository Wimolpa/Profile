import a1 from "../assets/a1.jpg"
import a2 from "../assets/a2.jpg"
import a4 from "../assets/a4.jpg"
import aa1 from "../assets/aa1.jpg"
import aa2 from "../assets/aa2.jpg"
import aa3 from "../assets/aa3.jpg"

const Activities = () => {
    return (

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 text-left mb-4">Activities</h3>
            <div className="grid grid-cols-3 gap-4">
                {/* รูปที่ 1 */}
                <div className="w-full h-48">
                    <img src={a1} alt="Image 1" className="w-full h-full object-cover rounded-lg" />
                </div>

                {/* รูปที่ 2 */}
                <div className="w-full h-48">
                    <img src={a2} alt="Image 2" className="w-full h-full object-cover rounded-lg" />
                </div>

                {/* รูปที่ 3 */}
                <div className="w-full h-48">
                    <img src={a4} alt="Image 3" className="w-full h-full object-cover rounded-lg" />
                </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4"> Lab Assistant / Teacher Assistant</h2>
            COMPUTER PROGRAMMING SKILL I (C programming) : Lab Assistant <br />
            COMPUTER PROGRAMMING SKILL II (Java programming) : Lab Assistant <br />
            Object-Oriented Software Development (Java language) : Lab Assistant <br />
            Data Structure : Lab Assistant <br />
            EMBEDDED SYSTEM : Teacher Assistant
            <div className="grid grid-cols-3 gap-4 pt-5">
                {/* รูปที่ 1 */}
                <div className="w-full h-48">
                    <img src={aa1} alt="Image 1" className="w-full h-full object-cover rounded-lg" />
                </div>

                {/* รูปที่ 2 */}
                <div className="w-full h-48">
                    <img src={aa2} alt="Image 2" className="w-full h-full object-cover rounded-lg" />
                </div>

                {/* รูปที่ 3 */}
                <div className="w-full h-48">
                    <img src={aa3} alt="Image 3" className="w-full h-full object-cover rounded-lg" />
                </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mt-4"> The Best of the Best Embedded System Develpers : TESA Top Gun Rally 2023</h2>
            Developing firmware for measuring water level and transmitting data using C++
        </div>



    )
}
export default Activities;