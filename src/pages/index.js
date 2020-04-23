import React from 'react';
import axios from 'axios';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Search from '../components/search-form';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entry: '',
      id: '',
      title: '',
      readyTime: '',
      url: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({ entry: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { entry } = this.state;
    const apiKey = '8efcbcb1d5694a4e8f6efe8954092370';

    axios({
      method: 'get',
      url: `https://api.spoonacular.com/recipes/search?&apiKey=${apiKey}&query=${entry}&number=1`,
    })
      .then(response => {
        this.setState({
          id: response.data.results[0].id,
          title: response.data.results[0].title,
          readyTime: response.data.results[0].readyInMinutes,
          url: response.data.results[0].sourceUrl,
        });
      });
  }

  render() {
    const {
      id,
      title,
      readyTime,
      url,
    } = this.state;

    const src = `https://spoonacular.com/recipeImages/${id}-240x150.jpg`;

    const img = id && <img src={src} alt="recipe" />;
    const link = url
    && (
    <p>
      See the full recipe
      {' '}
      <a href={url}>
        here
      </a>
    </p>
    );

    return (
      <Layout>
        <SEO title="Home" />
        <h1>Recipe Depot</h1>
        <p>If you need a killer recipe, look no further.</p>
        <Search
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <p>{title}</p>
        <p>{readyTime}</p>
        {img}
        {link}
      </Layout>
    );
  }
}

export default IndexPage;
