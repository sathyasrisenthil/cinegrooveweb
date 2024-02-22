import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook ,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

const Icon = () => {
  return (
    <div className='text-center text-xl text-slate-50'>
    <a href=""><FontAwesomeIcon icon={faFacebook} /></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a  href=""><FontAwesomeIcon icon={faInstagram} /></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href=""><FontAwesomeIcon icon={faTwitter} /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href=""><FontAwesomeIcon icon={faYoutube} /></a>
    </div>
  );
};

export default Icon; 
