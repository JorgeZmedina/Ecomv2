import { useState, useRef, useEffect } from "react";
import "../styles/imgBGSlider.css";

const ImgBGSlider= () => {
 const img1 = './images/slide1pch.png'
 const img2 = './images/slide2pwhc.png'
 const img3 = './images/slide3twhc.png'
 const img4 = './images/slide4hc.png'
//  const img5 = './images/Dragondrink.png'

 

  const images = [img1, img2, img3, img4,];
  const [currentSlide, setCurrentSlide] = useState(0);
  // useRef does not cause a re-render
  let sliderInterval = useRef();
  let switchImages = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };
  useEffect(() => {
    sliderInterval = setInterval(() => {
      switchImages();
    }, 4000);
    return () => {
      clearInterval(sliderInterval);
    };
  });
  return (
    <div className="imgWrapper">
      {images.map((img, index) => {
        return (
          <img
            src={img}
            className={
              index === currentSlide ? "imageActive homeImage" : "image"
            }
          />
        );
      })}
    </div>
  );
};

export default ImgBGSlider;