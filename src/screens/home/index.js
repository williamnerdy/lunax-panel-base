import React, { Component } from 'react';
import Loading from '~/components/loading';
import api from '~/services/api';
import { HOME_URL } from '~/api-url';

type State = {
  loaded: boolean
};

class HomeScreen extends Component<State> {
  state = {
    loaded: false
  };

  componentDidMount() {
    api
      .get(HOME_URL)
      .then(() => {
        this.setState({ loaded: true });
      })
      .catch(e => {
        console.error(e);
        alert('Error on load data!');
      });
  }

  render() {
    return (
      <>
        {this.state.loaded ? (
          <div>
            <h1>Home Screen</h1>
          </div>
        ) : (
          <Loading />
        )}
      </>
    );
  }
}

export default HomeScreen;
