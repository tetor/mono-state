import { createActions, handleActions } from 'redux-actions';
import { map } from 'lodash';

export default {
  createAndHandleActions: (statesSetting: Object) => Object => {
    let actionCreatorSetting = {},
        reducerSetting = {};

    for (let actionType of actionCreatorSetting.keys()) {
      actionCreatorSetting[actionType] = actionType;
    }

    console.log(actionCreatorSetting);
    console.log(reducerSetting);
  },
};
