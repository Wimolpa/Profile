
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <footer className="bg-[#406994] text-white py-10 mt-10 w-full">
      <div className="max-w-screen-xl mx-auto px-4 ">
        <p className="text-lg font-semibold text-left ">Contact</p>

        <div className="flex flex-col md:flex-row items-start justify-start gap-4 mt-2">
          <div className="flex items-center gap-2">
            <Phone size={20} />
            <span>065-082-6901</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={20} />
            <span>ploywimolpa@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={20} />
            <span>Nakhon Pathom, Thailand 73000</span>
          </div>
        </div>

        <p className="text-xs mt-4 opacity-70 text-left">
          © 2024 Wimolpa Inkong. All rights reserved.
        </p>
      </div>
    </footer>



  )
}
export default Contact;