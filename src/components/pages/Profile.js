import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectAllMissions } from '../../redux/missions/missionsSlice';
import './Profile.css';

const MissionItem = ({ missionName }) => <li>{missionName}</li>;
MissionItem.propTypes = {
  missionName: PropTypes.string.isRequired,
};

const Profile = () => {
  const missions = useSelector(selectAllMissions);
  const joinedMissions = missions.filter((mission) => mission.joined === true);
  return (
    <>
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
    </>
  );
};

export default Profile;
