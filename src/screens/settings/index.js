import React, { Component } from 'react';
import Loading from '~/components/loading';
import api from '~/services/api';
import { API_DATA } from '~/settings';

type State = {
  loaded: boolean
};

class SettingsScreen extends Component<State> {
  state = {
    loaded: false
  };

  componentDidMount() {
    api
      .get(API_DATA.settings)
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
            <h1>Settings Screen</h1>
          </div>
        ) : (
          <Loading />
        )}
      </>
    );
  }
}

export default SettingsScreen;
