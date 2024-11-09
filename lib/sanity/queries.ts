export const USER_PROFILE_QUERY = `*[
  _type == "userProfile"
  && userId == $userId
]{email, username,userId, firstName, lastName, mobile, address, city, state, zipCode, country}`;

export const ACCOUNT_QUERY = `*[
  _type == "account"
  && userId == $userId
]{email, username,userId, deposit, withdraw, interest, totalBalance}`;
