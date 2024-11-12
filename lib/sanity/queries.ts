export const USER_PROFILE_QUERY = `*[
  _type == "userProfile"
  && userId == $userId
]{email, username,userId, firstName, lastName, mobile, address, city, state, zipCode, country, isUserVerified}`;

export const ACCOUNT_QUERY = `*[
  _type == "account"
  && userId == $userId
]{email, username,userId, deposit, withdraw, interest, totalBalance}`;

export const DEPOSIT_TRANSACTIONS_QUERY = `*[
  _type == "depositTransaction"
  && userId == $userId
]{email, username,userId, amountInBTC, depositDate, depositStatus}`;
