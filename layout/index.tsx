import Header from '../components/Header';

export default function Layout({ children }) {

  return (
    <div >
      <Header />
      {/* <main data-barba="container" custom-theme="dark"> */}
      <main >

        {children}
      </main>
    </div>
  )
}

