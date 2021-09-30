import axios from "axios";

export const getListData = async () => {
  const data = await axios.get(
    `https://interview-mock.herokuapp.com/api/workers/`
  );
  return data;
};

export const getTabletData = async (id) => {
  const data = await axios.get(
    `https://interview-mock.herokuapp.com/api/workers/${id}`
  );
  return data;
};
