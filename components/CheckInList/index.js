import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { images } from '../../variables/images';
// styled
import CheckInListStyle from './styled';
import DrawerMission from '../DrawerMission';
function CheckInList(props) {
  const { data, ...other } = props;

  const [state, setState] = useState({
    isOpenDrawerMission: false,
    checkInItem: {}
  });

  const onToggleDrawerMission = () => {
    setState(prevState => ({
      ...prevState,
      isOpenDrawerMission: !prevState?.isOpenDrawerMission
    }));
  };

  const onRenderFunc = (isFull, id) => {
    return e => {
      e.preventDefault();
      e.stopPropagation();
      if (isFull) return;
      setState(prevState => ({
        ...prevState,
        checkInItem: data[data.findIndex(item => item.id === id)]
      }));
      return onToggleDrawerMission();
    };
  };

  return (
    <CheckInListStyle {...other}>
      <span className="check-in">Check in</span>
      {data &&
        data.map((item, key) => {
          const isFull = item.done >= item.task;
          return (
            <div
              className="item"
              key={key}
              onClick={onRenderFunc(isFull, item.id)}
            >
              <span className="title">{item.name}</span>
              {isFull ? (
                <img src={images.icon_check} />
              ) : (
                <div className="ct-session">
                  <span className="txt-check-in">
                    {item.done}/{item.task}
                  </span>
                  <span className="txt-session">Session</span>
                </div>
              )}
            </div>
          );
        })}
      <DrawerMission
        visible={state?.isOpenDrawerMission}
        onCancel={onToggleDrawerMission}
        dataCheckInDetail={state?.checkInItem}
      />
    </CheckInListStyle>
  );
}

CheckInList.propTypes = {
  detail: PropTypes.any,
  children: PropTypes.any,
  data: PropTypes.array,
  loading: PropTypes.bool
};

export default CheckInList;
