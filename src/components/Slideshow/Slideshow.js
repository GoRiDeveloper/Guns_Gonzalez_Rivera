import React, { useEffect, useRef } from 'react';
import './Slideshow.css';

export const Slideshow = ({ children }) => {
 
    const slideshow = useRef(null),
  intervalSlideshow = useRef(null);

    const next = () => {

        if (slideshow.current !== null) {

            if (slideshow.current.children.length > 0) {

                const firstElement = slideshow.current.children[0],
                        sizeSlide = slideshow.current.children[0].offsetWidth;

                slideshow.current.style.transition = `300ms ease-out all`;
                slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;

                const transition = () => { 

                    slideshow.current.style.transition = 'none';
                    slideshow.current.style.transform = 'translateX(0)';

                    slideshow.current.appendChild(firstElement);
                    
                    slideshow.current.removeEventListener("transitionend", transition);

                };

                slideshow.current.addEventListener("transitionend", transition);

            }; 
    
        };

    }; 
    
    const prev = () => {
        
        if (slideshow.current.children.length > 0) {

            const index = slideshow.current.children.length - 1,
            lastElement = slideshow.current.children[index],
              sizeSlide = slideshow.current.children[0].offsetWidth;

            slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);

            slideshow.current.style.transition = 'none';
             slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;

            setTimeout(() => {

                slideshow.current.style.transition = '300ms ease-out all';
                 slideshow.current.style.transform = `translateX(0)`;

            }, 30);

        }
    
    };

    useEffect(() => {

        if (slideshow.current !== null) { 

            intervalSlideshow.current = setInterval(() => {

                next();

            }, 5000);

            slideshow.current.addEventListener("mouseenter", () => {

                clearInterval(intervalSlideshow.current);

            });

            slideshow.current.addEventListener("mouseleave", () => {

                intervalSlideshow.current = setInterval(() => {

                    next();

                }, 5000);

            });

        };

    }, []);

    return (

        <section className="secSlide">

            <div className="secSlide__show" ref={slideshow}>

                {children}

            </div>

            <div className="secSlide__controls controls">

                <button onClick={prev} className="controls__button">

                    <i className="fa-solid fa-angle-left"></i>

                </button>

                <button onClick={next} className="controls__button controls__button--right">

                    <i className="fa-solid fa-angle-right"></i>

                </button>

            </div>

        </section>

    );

};