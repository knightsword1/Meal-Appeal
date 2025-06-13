// Custom Hook

import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://meal-appeal-backend.onrender.com/menu/${resId}`
    );
    const json = await data.json();

    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
