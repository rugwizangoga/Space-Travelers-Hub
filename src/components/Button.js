import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';

const Button = ({ isJoined, missionId }) => {
  const dispatch = useDispatch();

  if (isJoined) {
    return (
      <button
        className="btnm failure__button"
        type="button"
        onClick={() => dispatch(leaveMission(missionId))}
      >
        Leave Mission
      </button>
    );
  }
  return (
    <button
      className=" btnm success__button"
      type="button"
      onClick={() => dispatch(joinMission(missionId))}
    >
      Join Mission
    </button>
  );
};

Button.propTypes = {
  isJoined: PropTypes.bool.isRequired,
  missionId: PropTypes.string.isRequired,
};

export default Button;
