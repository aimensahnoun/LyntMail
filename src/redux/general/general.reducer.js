import GeneralActionTypes from "./general.types";

const INITIAL_STATE = {
  isLogin: false,
  button: 1,
  showModal: false,
  type: 1,
  pieChart: 1,
  forgotPassword: false,
};

const generalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GeneralActionTypes.TOGGLE_IS_LOGIN:
      return {
        ...state,
        isLogin: !state.isLogin,
      };
    case GeneralActionTypes.SET_IS_LOGIN:
      return {
        ...state,
        isLogin: action.payload,
      };
    case GeneralActionTypes.SWITCH_BUTTON:
      return { ...state, button: action.payload };
    case GeneralActionTypes.TOGGLE_MODAL:
      return { ...state, showModal: !state.showModal, type: 1 };
    case GeneralActionTypes.TOGGLE_FORGOT_PASSWORD:
      return { ...state, forgotPassword: !state.forgotPassword };
    case GeneralActionTypes.SELECT_TYPE:
      return { ...state, type: action.payload };
    case GeneralActionTypes.SELECT_PIECHART:
      return { ...state, pieChart: action.payload };
    default:
      return state;
  }
};

export default generalReducer;
