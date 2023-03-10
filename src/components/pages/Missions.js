import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from '../Mission';

import {
  fetchMissions,
  selectAllMissions,
  selectState,
} from '../../redux/missions/missionsSlice';

const MissionsList = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectState);
  const contents = useSelector((state) => state.missions.contents);

  useEffect(() => {
    if (contents.length === 0 && status === 'idle') {
      dispatch(fetchMissions());
    }
  }, [dispatch, status, contents.length]);

  const missions = useSelector(selectAllMissions);
  return (
    <div>
      <table className="mission-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission key={mission.mission_id} mission={mission} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default MissionsList;
