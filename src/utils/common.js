export const setUserStorage = (data) => {
  localStorage.setItem(
    '@App:user',
    JSON.stringify({ isLogged: data.isLogged, username: data.username })
  );
};

export const getUserStorage = () => {
  const storage = localStorage.getItem('@App:user');

  if (!storage) {
    const emptyUser = { isLogged: false, username: '' };

    setUserStorage(emptyUser);
    return emptyUser;
  }

  return JSON.parse(storage);
};
