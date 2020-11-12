const fs = require('fs');
const prettier = require('prettier');
const fetch = require('node-fetch')

const apolloPkg = require('@apollo/client');
const { gql, ApolloClient, InMemoryCache, HttpLink } = apolloPkg;
const localPkg = require('../lib/mStrUtils');
const { formatForURL } = localPkg;

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql', fetch }),
  cache: new InMemoryCache()
});

const ALL_LOCATIONS_QUERY = gql`
  {
    counties {
      name
      account_city {
        id
        name
      }
    }
  }
`;

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

  // get paths
  const { data } = await apolloClient.query({
    query: ALL_LOCATIONS_QUERY
  });
  const { counties } = data;
  let paths = [];
  counties.forEach(county => {
    paths = paths.concat(county.account_city.map(location =>
        `/vremea/${formatForURL(location.name)}-${formatForURL(county.name)}/${location.id}`
    ));
    paths.push(`/vremea/${formatForURL(county.name)}`);
  });
  paths.push('');


  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${paths
              .map((path) => {
                return `
                        <url>
                            <loc>${`https://vremea.ionkom.com${path}`}</loc>
                        </url>
                    `;
              })
              .join('')}
        </urlset>
    `;

  // If you're not using Prettier, you can remove this.
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();