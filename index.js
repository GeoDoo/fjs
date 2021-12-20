const getFromSession = (key) => {
  return (session) => {
    return session.getItem(key);
  };
};

const getDaysFromSessionStorage = getFromSession("numOfDays");

module.exports = { getDaysFromSessionStorage };
