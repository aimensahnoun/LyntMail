import { createSelector } from "reselect";

const selectUser = (state) => {
  return state.user;
};

export const selectCurrentUser = createSelector([selectUser], (user) => {
  return user.currentUser;
});

export const selectLinks = createSelector(
  [selectCurrentUser],
  (user) => user.links
);

export const selectCampaigns = createSelector(
  [selectCurrentUser],
  (user) => user.subscribers
);

export const selectLinksArray = createSelector(
  [selectCurrentUser],
  (user) => user.links
);

export const selectPieChartData = createSelector(
  [selectCurrentUser],
  (user) => {
    return user.stats.pieChart;
  }
);

export const selectLineChart = createSelector([selectCurrentUser], (user) => {
  return user.stats.lineChart;
});

export const selectCSVData = createSelector([selectCurrentUser], (user) => {
  let CSVData = [["Full Name", "Email", "Phone Number", "Campaign Name"]];
  if (user.subscribers.length > 0) {
    user.subscribers.map((subscriber) => {
      CSVData.push([
        subscriber.full_name,
        subscriber.email,
        subscriber.phone_number == null
          ? "No Phone Number"
          : subscriber.phone_number,
        subscriber.campaign_name,
      ]);
    });
    return CSVData;
  } else {
    return [];
  }
});
