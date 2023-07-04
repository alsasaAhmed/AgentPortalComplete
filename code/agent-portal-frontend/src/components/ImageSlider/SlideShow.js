// import React, { useState, useEffect } from 'react';
// import { Fade } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';


// const SlideShow = () => {
//     const images = [
//         image1,
//         image2,
//         image3
//     ];
//     return (
//         <div className='m-2'>
//             <Fade>
//                 <div className="">
//                     <div>
//                         <img className='' src={images[0]} alt='image'/>
//                     </div>
//                 </div>
//                 <div className="">
//                     <div>
//                         <img className='' src={images[1]} alt='image'/>
//                     </div>
//                 </div>
//                 <div className="">
//                     <div>
//                         <img className='' src={images[2]} alt='image'/>
//                     </div>
//                 </div>
//             </Fade>
//         </div>
//     )
// }

// export default SlideShow


import React, { useState, useEffect } from 'react';

const SlideShow = ({ slides, interval }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [slides.length, interval]);

  return (
    <div>
      <img src={slides[currentSlide]} alt="Slide" />
    </div>
  );
};

export default SlideShow;
