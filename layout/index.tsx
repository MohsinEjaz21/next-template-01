import Script from 'next/script';
import Header from '../components/Header';

function Layout({ children }) {
  return (
    <div >
      <Header />
      <Script src="assets/scripts/typetura.min.js" />

      {/* <main data-barba="container" custom-theme="dark"> */}
      <main data-barba="container" >

        {children}
      </main>
    </div>
  )
}

export default Layout
