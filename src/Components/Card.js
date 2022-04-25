import React from 'react';
import man1 from '../Assets/man.png';
import man2 from '../Assets/man (1).png';
import woman1 from '../Assets/woman.png';
import woman2 from '../Assets/woman (1).png';
import facebook from '../Assets/facebook.png';
import twitter from '../Assets/twitter.png';
import youtube from '../Assets/youtube.png';


const Card = ({name, icon, line1, line2}) => {
  return (
        <div className='card'>
            <img className='profImg' src={(icon == "male1") ? man1 : (icon == "female1") ? woman1 : (icon == "male2") ? man2 : woman2} alt="man1"/>

            <br />

            <span>{name}</span>

            <hr />

            <ul>
                <li>{line1}</li>
                <li>{line2}</li>
            </ul>

            <div className='icons'>
                <img className='icon' src={facebook} alt="facebook" />
                <img className='icon' src={twitter} alt="twitter" />
                <img className='icon' src={youtube} alt="youtube" />
            </div>

            <a href="#">More</a>
        </div>
  )
}

export default Card