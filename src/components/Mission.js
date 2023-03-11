import PropTypes from 'prop-types';
import Button from './Button';

const Mission = (props) => {
  const { mission } = props;

  return (
    <tr>
      <td>{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td>
        {!mission.joined && <p className="not__member">Not a member</p>}
        {mission.joined && <p className="active__member">Active member</p>}
      </td>
      <td>
        <Button missionId={mission.mission_id} isJoined={mission.joined} />
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string,
    mission_name: PropTypes.string,
    description: PropTypes.string,
    joined: PropTypes.bool,
  }).isRequired,
};
export default Mission;
