import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Missions from '../components/pages/Missions';
import store from '../redux/configureStore';

jest.mock('axios', () => ({
  post: jest.fn(),
  get: jest.fn(),
}));

describe('Missions component', () => {
  it('should render correctly', () => {
    const mission = [
      {
        id: 'mission1',
        mission_name: 'one',
        description: 'a mission',
        joined: true,
      },
    ];

    const MissionsList = TestRenderer.create(
      <Provider store={store}>
        <Missions key={mission.id} MissionsList={mission} />
      </Provider>,
    ).toJSON();
    expect(MissionsList).toMatchSnapshot();
  });
});
