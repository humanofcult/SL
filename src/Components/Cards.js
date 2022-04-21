import React from 'react';
import man1 from '../man.png';
import man2 from '../man (1).png';
import woman1 from '../woman.png';
import woman2 from '../woman (1).png';
import facebook from '../facebook.png';
import twitter from '../twitter.png';
import youtube from '../youtube.png';


const Cards = () => {
  return (
    <div id='cards'>
        <div className='card'>
            <img className='profImg' src={man1} alt="man1"/>

            <br />

            <span>John Doe</span>

            <hr />

            <ul>
                <li>Good Listener</li>
                <li>Hard Worker</li>
            </ul>

            <div className='icons'>
                <img className='icon' src={facebook} alt="facebook" />
                <img className='icon' src={twitter} alt="twitter" />
                <img className='icon' src={youtube} alt="youtube" />
            </div>

            <a href="#">More</a>
        </div>

        <div className='card'>
            <img className='profImg' src={woman1} alt="man1"/>

            <br />

            <span>Jane Doe</span>

            <hr />

            <ul>
                <li>Good Humour</li>
                <li>Brain Tumor</li>
            </ul>

            <div className='icons'>
                <img className='icon' src={facebook} alt="facebook" />
                <img className='icon' src={twitter} alt="twitter" />
                <img className='icon' src={youtube} alt="youtube" />
            </div>

            <a href="#">More</a>
        </div>

        <div className='card'>
            <img className='profImg' src={man2} alt="man1"/>

            <br />

            <span>Ryan Right</span>

            <hr />

            <ul>
                <li>Fast Runner</li>
                <li>Sharp Gunner</li>
            </ul>

            <div className='icons'>
                <img className='icon' src={facebook} alt="facebook" />
                <img className='icon' src={twitter} alt="twitter" />
                <img className='icon' src={youtube} alt="youtube" />
            </div>

            <a href="#">More</a>
        </div>

        <div className='card'>
            <img className='profImg' src={woman2} alt="man1"/>

            <br />

            <span>Riley Right</span>

            <hr />

            <ul>
                <li>Bill Nye</li>
                <li>The Sceince Guy</li>
            </ul>

            <div className='icons'>
                <img className='icon' src={facebook} alt="facebook" />
                <img className='icon' src={twitter} alt="twitter" />
                <img className='icon' src={youtube} alt="youtube" />
            </div>

            <a href="#">More</a>
        </div>
    </div>
  )
}

export default Cards