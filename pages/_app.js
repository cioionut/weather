import 'bootstrap/dist/css/bootstrap.min.css'; // todo: apparently exist a better way to import this 'withCSS'?maybe

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
