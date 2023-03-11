import { useSelector } from 'react-redux';
import { selectAllMissions } from '../../redux/missions/missionsSlice';

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
            <li key={mission.mission_id}>{mission.mission_name}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>My Rockets</h2>
        <ul className="missionsList">
          {reservedRockets.map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Profile;
