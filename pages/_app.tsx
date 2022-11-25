import '@/index.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
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