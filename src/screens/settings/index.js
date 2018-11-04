import React, { Component } from 'react';
import Loading from '~/components/loading';
import api from '~/services/api';
import { SETTINGS_URL } from '~/api-url';

type State = {
  loaded: boolean
};

class SettingsScreen extends Component<State> {
  state = {
    loaded: false
  };

  componentDidMount() {
    api
      .get(SETTINGS_URL)
      .then(() => {
        // code...
      })
      .catch(e => {
        console.error(e);
        alert('Error on load data!');
      })
      .finally(() => {
        this.setState({ loaded: true });
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
