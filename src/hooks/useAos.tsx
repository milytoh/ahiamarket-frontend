import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const useAOS = () => {
  useEffect(() => {
    

    AOS.init({
      // Global settings – override per element with data-aos-*
      duration: 800, // values from 0 to 3000, in ms
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
      offset: 120, // offset (in px) from the original trigger point
      easing: "ease-out-cubic",
      // disable: 'mobile'    // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    });

    // Important: refresh AOS after dynamic content (images, modals, tabs, etc.)
    // You can call AOS.refresh() manually when needed
    return () => {
      AOS.refresh();
    };
  }, []);
};
