
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Home = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

  const img = [
    {
      url: '/p1.jpeg',
    },
    {
      url: '/p2.jpeg',
    },
    {
      url: '/p3.jpeg',
    },
    {
      url: '/p4.jpeg',
    },
    {
      url: '/p5.jpeg',
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? img.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === img.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === img.length - 1 ? 0 : prevSlide + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [img.length]);

  return (
    <div className='flex'>
      <div className='flex justify-center items-center mt-20 ml-36'>
        <p className='text-5xl text-blue-800 font-semibold'>India's #1 end-to-end <br /> digital tipping platform <br /> for<span className='text-white'>.</span>
        <TypeAnimation
           className='text-green-400' sequence={[
              ' Hotels.',3000,
              ' Restaurants.',3000,
              ' Housekeepers.',3000,
              ' Salons.',3000,
              ' Bars.',3000,
            ]}
            wrapper="span"
            speed={200}
            style={{ fontSize: '5xl', display: 'inline-block',  }}
            repeat={Infinity}
            duration={200}
            
          /></p>
      </div>

      <div>

      </div>

      <div className='sm:w-full max-w-[500px] h-[400px] m-4 p-4 sm:mr-36 sm:mt-12 sm:ml-72 relative '>
  <div
    style={{ 
      backgroundImage: `url(${img[currentSlide].url})`,
      backgroundSize: 'cover', // Ensures the image covers the entire container
      backgroundPosition: 'center', // Centers the image within the container
      borderRadius: '20px', // Rounded corners for the image container
    }}
    className='sm:h-full w-full rounded-2xl duration-300 flex justify-end'
  ></div>
  <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
    <div onClick={handlePrevSlide}>
      <BsChevronCompactLeft />
    </div>
  </div>
  <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
    <div onClick={handleNextSlide}>
      <BsChevronCompactRight />
    </div>
  </div>
</div>

    </div>
    
  )
}

export default Home
