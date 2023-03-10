import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectAllMissions } from '../../redux/missions/missionsSlice';

const MissionItem = ({ missionName }) => <li>{missionName}</li>;
MissionItem.propTypes = {
  missionName: PropTypes.string.isRequired,
};

const Profile = () => {
  const missions = useSelector(selectAllMissions);
  const joinedMissions = missions.filter((mission) => mission.joined === true);
  const rocketsList = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rocketsList.filter((rocket) => rocket.reserved);
  return (
    <div className="profile-container">
      <section>
        <h2>My Missions</h2>
        <ul className="missionsList">
          {joinedMissions.map((mission) => (
            <MissionItem
              key={mission.mission_id}
              missionName={mission.mission_name}
            />
          ))}
        </ul>
      </section>
      <section>
        <h2>My Rockets</h2>
        <ul className="missionsList">
          {reservedRockets.map((rocket) => (
            <MissionItem
              key={rocket.id}
              missionName={rocket.name}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Profile;
