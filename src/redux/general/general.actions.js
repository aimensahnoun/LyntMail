import GeneralActionTypes from "./general.types";

export const toggleIsLogin = () => ({
  type: GeneralActionTypes.TOGGLE_IS_LOGIN,
});

export const setIsLogin = (isLogin) => ({
  type: GeneralActionTypes.SET_IS_LOGIN,
  payload: isLogin,
});

export const changeButton = (button) => ({
  type: GeneralActionTypes.SWITCH_BUTTON,
  payload: button,
});

export const toggleModal = () => ({
  type: GeneralActionTypes.TOGGLE_MODAL,
});

export const selectType = (type) => ({
  type: GeneralActionTypes.SELECT_TYPE,
  payload: type,
});

export const selectPieChart = (number) => ({
  type: GeneralActionTypes.SELECT_PIECHART,
  payload: number,
});
export const toggleForgotPassword = () => ({
  type: GeneralActionTypes.TOGGLE_FORGOT_PASSWORD,
});
