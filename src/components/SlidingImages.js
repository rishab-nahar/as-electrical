import React, { useState, useEffect } from "react";
import data from "./../HomePageImageData";

const SlidingImages = () => {
  const [img, setimg] = useState(data);
  const [index, setIndex] = React.useState(0);
  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > img.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = img.length - 1;
      }
      return index;
    });
  };
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > img.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="section-center">
        {img.map((curImg, imgIndex) => {
          const { id, image } = curImg;

          let position = "nextSlide";
          if (imgIndex === index) {
            position = "activeSlide";
          }
          if (
            imgIndex === index - 1 ||
            (index === 0 && imgIndex === img.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <div
                className="fill"
                style={{
                  display: "block",
                  backgroundImage: `url(${image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",

                  backgroundAttachment: "fixed",
                  backgroundPosition: "center",
                  zIndex: "2",
                  width: "100%",
                }}
              ></div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default SlidingImages;
