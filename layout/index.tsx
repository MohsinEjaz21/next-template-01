import Header from '../components/Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main data-barba="container">
        {children}
      </main>
    </>
  )
}

export default Layout