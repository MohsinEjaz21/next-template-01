import Header from '../components/Header';

export default function Layout({ children }) {

  return (
    <>
      <Header />
      <main >
        {children}
      </main>
    </>
  )
}




// export default function Layout({ children }) {
//   const scrollRef = useRef();

//   useEffect(() => {
//     if (typeof window === "undefined") {
//       return;
//     }

//     const scroll: any = import("locomotive-scroll").then((LocomotiveScroll) => {
//       new LocomotiveScroll.default({
//         el: scrollRef.current,
//         smooth: true
//       });
//     });

//     return () => {
//       if (scroll) {
//         scroll.destroy();
//       }
//     }
//   }, []);

//   return (
//     <>
//       <Header />
//       {/* <main data-barba="container" custom-theme="dark"> */}
//       <main data-scroll-container ref={scrollRef} >

//         {children}
//       </main>
//     </>
//   )
// }

