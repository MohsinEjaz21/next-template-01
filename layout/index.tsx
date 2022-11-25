import { useEffect, useRef } from 'react';
import Header from '../components/Header';

export default function Layout({ children }) {
  const scrollRef = useRef();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
      new LocomotiveScroll.default({
        el: scrollRef.current,
        smooth: true
      });
    });

    // return () => scroll.destroy();
  }, []);

  return (
    <>
      <Header />
      {/* <main data-barba="container" custom-theme="dark"> */}
      <main data-scroll-container ref={scrollRef} >

        {children}
      </main>
    </>
  )
}

