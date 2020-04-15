import React, { useReducer } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Search from '../components/search-form';
import addRecipe from '../action';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { entry: '', };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({ entry: value, });
  }

  handleSubmit() {

  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Recipe Depot</h1>
        <p>If you need a killer recipe, look no futher.</p>
        <Search
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </Layout>
    );
  }
}

export default IndexPage;
