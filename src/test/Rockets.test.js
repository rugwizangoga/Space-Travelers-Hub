import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../components/pages/Rockets';
import store from '../redux/configureStore';

jest.mock('axios', () => ({
  post: jest.fn(),
  get: jest.fn(),
}));

describe('Rockets component', () => {
  it('should render correctly', () => {
    const rocket = [
      {
        id: 'rocket1',
        name: 'Rocket 1',
        description: 'Description 1',
        flickr_images: ['image1'],
        reserved: false,
      },
    ];

    const RocketsList = TestRenderer.create(
      <Provider store={store}>
        <Rockets key={rocket.id} RocketsList={rocket} />
      </Provider>,
    ).toJSON();
    expect(RocketsList).toMatchSnapshot();
  });
});
