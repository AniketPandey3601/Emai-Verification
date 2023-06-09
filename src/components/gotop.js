// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function GoToTop() {
//   const routePath = useLocation();
//   const onTop = () => {
//     window.scroll(0, 0);
    
//   };
//   useEffect(() => {
//     onTop();
//   }, [routePath]);

//   return null;
  
// }


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 50,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  return null;
}
