import Header from '@/components/Header';
import '@/index.scss';

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   let scroll;
  //   import("locomotive-scroll").then((locomotiveModule) => {
  //     scroll = new locomotiveModule.default({
  //       el: document.querySelector("[data-scroll-container]"),
  //       smooth: true,
  //       smoothMobile: false,
  //       resetNativeScroll: true
  //     });
  //   });

  //   // `useEffect`'s cleanup phase
  //   return () => {
  //     if (scroll) scroll.destroy();
  //   }
  // });

  return (
    <>
      <Header />
      <main className="main">
        <Component {...pageProps} />
      </main>
    </>
  );
}




// import LocomotiveScroll from 'locomotive-scroll';

//   const scrollRef: any = useRef();
//   useEffect(() => {
//     if (typeof window === "undefined") {
//       return;
//     }
//     const scroll = new LocomotiveScroll({
//       el: scrollRef.current,
//       smooth: true
//     });
//     // return () => scroll.destroy();
//   }, []);