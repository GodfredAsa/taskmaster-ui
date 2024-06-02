export const headerConfiguration = () => {
  const token = localStorage.getItem("token");
  return {
    header: {
      // "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
};
