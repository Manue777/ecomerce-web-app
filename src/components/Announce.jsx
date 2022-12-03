import {Close} from "@mui/icons-material";
import {React ,useState } from 'react';

function Announce ()  {

  const [announceStyle, setAnnounceStyle]= useState 
  ('bg-[#8a4af2] font-bold text-white flex items-center justify-center') 


    const handleClose= () => {
      setAnnounceStyle(announceStyle + " hidden")}

  return <div className={announceStyle}>

      <h2>Hurry up 50% off Sale!</h2>
      <Close className="cursor-pointer" onclick= {handleClose}/>
  </div>;
};

export default Announce;