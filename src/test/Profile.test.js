import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Profile from '../components/pages/Profile';
import store from '../redux/configureStore';

jest.mock('axios', () => ({
  post: jest.fn(),
  get: jest.fn(),
}));

describe('Missions component', () => {
  it('should render correctly', () => {
    const MyProfile = TestRenderer.create(
      <Provider store={store}>
        <Profile />
      </Provider>,
    ).toJSON();
    expect(MyProfile).toMatchSnapshot();
  });
});
