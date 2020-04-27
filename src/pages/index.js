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
      recipes: [],
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
      url: `https://api.spoonacular.com/recipes/search?&apiKey=${apiKey}&query=${entry}&number=10`,
    })
      .then(response => {
        this.setState({ recipes: response.data.results });
      });
  }

  render() {
    const { recipes } = this.state;

    return (
      <Layout>
        <SEO title="Home" />
        <h1>Recipe Depot</h1>
        <p>If you need a killer recipe, look no further.</p>
        <Search
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <div className="recipe-area">
          {recipes.map(recipe => (
            <div key={recipe.id}>
              <h2>{recipe.title}</h2>
              <p>{recipe.readyInMinutes}</p>
              <p>{recipe.servings}</p>
              <p>
                Click
                {' '}
                <a
                  href={recipe.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                {' '}
                to see the full recipe instructions
              </p>
              <img src={`https://spoonacular.com/recipeImages/${recipe.id}-240x150.jpg`} alt="recipe depiction" />
            </div>
          ))}
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
