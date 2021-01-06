import { createSelector } from "reselect";

const selectGeneral = (state) => state.general;

export const selectIsLogin = createSelector(
  [selectGeneral],
  (general) => general.isLogin
);

export const selectButton = createSelector(
  [selectGeneral],
  (general) => general.button
);

export const showModal = createSelector(
  [selectGeneral],
  (general) => general.showModal
);
export const selectorType = createSelector(
  [selectGeneral],
  (general) => general.type
);
export const selectorPieChart = createSelector(
  [selectGeneral],
  (general) => general.pieChart
);

export const selectForgotPassword = createSelector(
  [selectGeneral],
  (general) => general.forgotPassword
);
