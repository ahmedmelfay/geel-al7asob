import React, { useState, useEffect } from "react";
const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="top-to-btm">
            {" "}
            {showTopBtn && (             					
				 <button className="scroltop" onClick={goToTop}><span className="fa fa-angle-up  relative" id="btn-vibrate"></span></button> 			
            )}{" "}
        </div>
    );
};
export default ScrollToTop;