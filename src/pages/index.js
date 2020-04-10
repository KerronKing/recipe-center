import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
// import reducer from '../reducer';
// import Search from '../components/search-form';

// const initialState = { recipe: {} };

const IndexPage = () => (
  // const [state, dispatch] = useReducer(reducer, initialState);
  <Layout>
    <SEO title="Home" />
    <h1>Recipe Depot</h1>
    <p>If you need a killer recipe, look no futher.</p>
    {/* <Search onclick={() => dispatch()} /> */}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
