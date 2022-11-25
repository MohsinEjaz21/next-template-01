import Header from '@/components/Header';
import '@/index.scss';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="main" custom-theme="dark">
        <Component {...pageProps} />
      </main>
    </>
  );
}


// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }


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