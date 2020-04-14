import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Search from '../components/search-form';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: [],
    };
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState(value);
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Recipe Depot</h1>
        <p>If you need a killer recipe, look no futher.</p>
        <Search
          onChange={() => this.handleChange()}
          onClick={() => this.handleClick()}
        />
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    );
  }
}

export default IndexPage;
