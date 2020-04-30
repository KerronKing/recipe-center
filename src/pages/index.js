import React from 'react';
import axios from 'axios';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Search from '../components/search-form';
import '../styles.css';
import img from '../images/rc-background.jpeg';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entry: '',
      total: 1,
      visible: false,
      recipes: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleChange(e) {
    const { value, id } = e.target;
    if (id === 'recipe-input') {
      this.setState({ entry: value });
    } else {
      this.setState({ total: value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const { entry, total } = this.state;
    const apiKey = '8efcbcb1d5694a4e8f6efe8954092370';

    axios({
      method: 'get',
      url: `https://api.spoonacular.com/recipes/search?&apiKey=${apiKey}&query=${entry}&number=${total}`,
    })
      .then(response => {
        this.setState({ recipes: response.data.results });
        this.setState(prevState => ({ visible: !prevState.visible }));

        const results = document.getElementById('recipe');
        results.scrollIntoView({
          behavior: 'smooth',
        });
      });
  }

  toggle() {
    this.setState(prevState => ({ visible: !prevState.visible }));
  }

  render() {
    const { recipes, visible } = this.state;

    return (
      <Layout>
        <SEO title="Home" />
        <div className="opening">
          <img src={img} alt="fruits and veggies" />
          <div className="title-section">
            <h1>Recipe Depot</h1>
            <p>If you need a killer recipe, look no further.</p>
            {!visible && (
              <button
                type="button"
                onClick={this.toggle}
              >
                Start Here
              </button>
            )}
            {visible && (
              <Search
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            )}
          </div>
        </div>
        <div id="recipe">
          {recipes.map(recipe => (
            <div key={recipe.id} className="recipe-area">
              <div className="recipe-img">
                <img src={`https://spoonacular.com/recipeImages/${recipe.id}-240x150.jpg`} alt="recipe depiction" />
              </div>
              <div className="recipe-desc">
                <h2>{recipe.title}</h2>
                <p>
                  This recipe takes
                  {' '}
                  {recipe.readyInMinutes}
                  {' '}
                  minutes to prepare.
                </p>
                <p>
                  This recipe makes
                  {' '}
                  {recipe.servings}
                  {' '}
                  {recipe.servings === 1 ? 'serving.' : 'servings.'}
                </p>
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
              </div>
            </div>
          ))}
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
