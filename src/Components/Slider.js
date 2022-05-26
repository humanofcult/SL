import pic1 from '../Assets/wp2436369-marvel-cinematic-universe-wallpapers (1).jpg';
import pic2 from '../Assets/wp6998307-marvel-cinematic-universe-movies-wallpapers.png';
import pic3 from '../Assets/wp6998537-marvel-cinematic-universe-movies-wallpapers.jpg';
import pic4 from '../Assets/uwp2159691.jpeg';

let imageCount = 1;

function currentPic()
{
    var images = document.getElementsByClassName("images");
    var prevImages = document.getElementsByClassName("prevImages");
    var nextImages = document.getElementsByClassName("nextImages");


    for (let index = 0; index < images.length; index++) {
        if(index == imageCount)
        {
            images[index].style.display = "block";
        }  
        else
        {
            images[index].style.display = "none";
        }
    }

    for (let index = 0; index < images.length; index++) {
        if(index == imageCount - 1)
        {
            prevImages[index].style.display = "block";
        }  
        else
        {
            prevImages[index].style.display = "none";
        }
    }

    for (let index = 0; index < images.length; index++) {
        if(index == imageCount + 1)
        {
            nextImages[index].style.display = "block";
        }  
        else
        {
            nextImages[index].style.display = "none";
        }
    }
}

function nextPic()
{

    var images = document.getElementsByClassName("images");
    var prevImages = document.getElementsByClassName("prevImages");
    var nextImages = document.getElementsByClassName("nextImages");

    if(imageCount < images.length - 1)
    {
        imageCount++;
    }

    for (let index = 0; index < images.length; index++) {
        if(index == imageCount)
        {
            images[index].style.display = "block";
        }  
        else
        {
            images[index].style.display = "none";
        }
    }

    for (let index = 0; index < images.length; index++) {
        if(index == imageCount - 1)
        {
            prevImages[index].style.display = "block";
        }  
        else
        {
            prevImages[index].style.display = "none";
        }
    }

    for (let index = 0; index < images.length; index++) {
        if(index == imageCount + 1)
        {
            nextImages[index].style.display = "block";
        }  
        else
        {
            nextImages[index].style.display = "none";
        }
    }
}

function prevPic()
{


    var images = document.getElementsByClassName("images");
    var prevImages = document.getElementsByClassName("prevImages");
    var nextImages = document.getElementsByClassName("nextImages");

    if(imageCount > 0)
    {
        imageCount--;
    }

    for (let index = 0; index < images.length; index++) {
        if(index == imageCount)
        {
            images[index].style.display = "block";
        }  
        else
        {
            images[index].style.display = "none";
        }
    }

    for (let index = 0; index < images.length; index++) {
        if(index == imageCount - 1)
        {
            prevImages[index].style.display = "block";
        }  
        else
        {
            prevImages[index].style.display = "none";
        }
    }

    for (let index = 0; index < images.length; index++) {
        if(index == imageCount + 1)
        {
            nextImages[index].style.display = "block";
        }  
        else
        {
            nextImages[index].style.display = "none";
        }
    }
}

const Slider = () => {
  return (
    <div id='slider'>
        <div id='allContainers'>
            <div className="imageContainer" onLoad={currentPic}>
                <img className='prevImages' src={pic1} alt="male1" />
                <img className='prevImages' src={pic2} alt="male2" />
                <img className='prevImages' src={pic3} alt="female1" />
                <img className='prevImages' src={pic4} alt="female2" />
            </div>

            <div className="imageContainer middleContainer" onLoad={currentPic}>
                <img className='images' src={pic1} alt="male1" />
                <img className='images' src={pic2} alt="male2" />
                <img className='images' src={pic3} alt="female1" />
                <img className='images' src={pic4} alt="female2" />
            </div>

            <div className="imageContainer" onLoad={currentPic}>
                <img className='nextImages' src={pic1} alt="male1" />
                <img className='nextImages' src={pic2} alt="male2" />
                <img className='nextImages' src={pic3} alt="female1" />
                <img className='nextImages' src={pic4} alt="female2" />
            </div>
        </div>

        <button onClick={nextPic}>NEXT</button>
        <button onClick={prevPic}>PREVIOUS</button>
    </div>
  )
}

export default Slider