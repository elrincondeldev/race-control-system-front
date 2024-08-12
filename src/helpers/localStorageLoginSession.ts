export const verifyLocalStorageLoginSession = (): boolean => {
  if (localStorage.getItem('session_timestamp')) {
    const sessionTimestamp = localStorage.getItem(
      'session_timestamp',
    ) as string;
    const currentTime: number = Math.floor(new Date().getTime() / 1000);
    if (+sessionTimestamp > currentTime)
      //*session is still valid
      return true;
    else {
      //* Old timestamp
      removeEmailFromLocalStorage();
      return false;
    }
  } else {
    removeEmailFromLocalStorage();
    return false;
  }
};

export const addNew30daysSession = () => {
  if (localStorage.getItem('session_timestamp')) {
    localStorage.removeItem('session_timestamp');
    add30daysTimestamp();
  } else {
    add30daysTimestamp();
  }
};

const add30daysTimestamp = () => {
  const currentTime: number = Math.floor(new Date().getTime() / 1000);
  const timestamp30days: number = currentTime + 86400 * 30;
  localStorage.setItem('session_timestamp', timestamp30days.toString());
};

export const addEmailToLocalStorage = (email: string) => {
  localStorage.setItem('email', email);
};

export const getEmailFromLocalStorage = (): string => {
  return localStorage.getItem('email') as string;
};

export const removeEmailFromLocalStorage = () => {
  localStorage.removeItem('email');
};

export const addTokenToLocalStorage = (token: string) => {
  localStorage.setItem('token_race_control_system', token);
};

export const getTokenFromLocalStorage = (): string => {
  return localStorage.getItem('token_race_control_system') as string;
};

export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem('token');
};

export const addPhoneNumberToLocalStorage = (phoneNumber: string) => {
  localStorage.setItem('phoneNumber', phoneNumber);
};

export const getPhoneNumberFromLocalStorage = (): string => {
  return localStorage.getItem('phoneNumber') as string;
};

export const removePhoneNumberFromLocalStorage = () => {
  localStorage.removeItem('phoneNumber');
};
