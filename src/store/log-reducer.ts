export default (state: Log[], action: any): Log[] => {
  switch (action.type) {
    case "ADD_LOG":
      return [...state, action.payload];
    case "CLEAR_LOGS":
      return [];
    default:
      return state;
  }
};
