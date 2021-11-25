const User_Name = "WebBackendUserToken";
const AuthToken = "WebBackendAuthToken";

export const SetUserToken = (UserToken) => {
  return localStorage.setItem(User_Name, UserToken);
};

export const GetUserToken = () => {
  return localStorage.getItem(User_Name);
};

export const SetAuthToken = (UserToken) => {
  return localStorage.setItem(AuthToken, UserToken);
};

export const GetAuthToken = () => {
  return localStorage.getItem(AuthToken);
};
