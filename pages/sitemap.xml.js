import React from 'react'
import { gql } from '@apollo/client'
import { initializeApollo } from '../lib/apolloClient'
import { formatForURL } from '../lib/strUtils';

export const ALL_LOCATIONS_QUERY = gql`
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


const createSitemap = (paths) => `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${paths
      .map((path) => {
        return `
                <url>
                    <loc>${`https://vremea.ionkom.com/${path}`}</loc>
                </url>
            `;
      })
      .join('')}
  </urlset>
`;

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const apolloClient = initializeApollo();
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

    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemap(paths));
    res.end();
  }
}

export default Sitemap;