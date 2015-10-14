import { Component, PropTypes } from 'react';

import BlazeToReact from 'blaze-to-react';

import MainMenu from './MainMenu';
import DefaultLayout from 'src/layout/components/DefaultLayout';

const LoginButtons = BlazeToReact('loginButtons');

export default class App extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  render() {
    return (
      <DefaultLayout>
        <MainMenu />
        <LoginButtons />

        {this.props.children}
      </DefaultLayout>
    );
  }
}
