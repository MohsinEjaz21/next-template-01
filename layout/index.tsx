import Script from 'next/script';
import Header from '../components/Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Script src="assets/scripts/typetura.min.js" />

      <main data-barba="container">
        {children}
      </main>
    </>
  )
}

export default Layout