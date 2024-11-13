import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const ContactInfo = ({ location, phone, email }: { location: string; phone: string; email: string }) => {
  return (
    <div className="md:flex hidden flex-col lg:flex-row justify-center items-center md:w-1/2 md:space-x-4 space-y-4 md:space-y-0">
      <div className="flex items-center">
        <FaMapMarkerAlt color="black" />
        <p className="text-black ml-1">{location}</p>
      </div>
      <div className="flex items-center">
        <FaPhoneAlt color="black" />
        <p className="text-black ml-1">{phone}</p>
      </div>
      <div className="flex items-center">
        <IoIosMail color="black" />
        <p className="text-black ml-1">{email}</p>
      </div>
    </div>
  );
};

export default ContactInfo;