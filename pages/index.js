import React from 'react';
import { Element } from 'react-scroll'
import axios from 'axios';

import Card from '../components/Card';
import Navigation from '../components/Navigation';
import Page, { CardsList, Wrapper } from '../components/Page';

import { capitalize } from '../utils/helpers';

const pageTitle = 'UI Components library';

class Home extends React.Component {
  state = {
    loading: true,
    error: false,
    structure: {}
  }

  componentDidMount() {
    axios.get(`/api/list`)
      .then(({ data }) => {
        console.log('Then');
        this.setState({ loading: false, structure: data });
      })
      .catch(error => {
        console.log(error);
        this.setState({ loading: false, error: true });
      });
  }

  render() {
    const { error, loading, structure } = this.state;

    return error ? 'Couldn\'t retrieve project structure.' : !loading ? (
      <Page title={pageTitle} variant="sidebar">
        <Navigation structure={structure} />
        <Wrapper>
          <h1 className="title1">{pageTitle}</h1>
          {Object.keys(structure).map(section => (
            <Element
              key={`section-${section}`}
              name={section}
              id={section}
              className="section"
            >
              <h2 className="title2">{capitalize(section)}</h2>
              <CardsList>
                {structure[section].map(component => (
                  <li key={`component-${component.name}`}>
                    <Card
                      slug={component.slug}
                      name={component.name}
                      img={component.img}
                    />
                  </li>
                ))}
              </CardsList>
            </Element>
          ))}
        </Wrapper>
      </Page>
    ) : 'Loading...';
  }
};

export default Home;
