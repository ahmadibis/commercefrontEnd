/** @format */

import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';
import '../components/styles/nprogress.css';
// eslint-disable-next-line import/order
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Page>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
}

// tell nextjs to fetch all queries in all children component
// boiler plate
MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  // gives us our query variable at page level /products/2
  pageProps.query = ctx.query;
  return { pageProps };
};

// wrapped our whole app with the provider
// so it can hand over our data to all components around
// we then have to export our app with the config of apollo wrapped around our app
export default withData(MyApp);
