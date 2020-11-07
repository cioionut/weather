import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globalStyles.css';


import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}