import camelize from "camelize";
import { REACT_APP_FIREBASE_SERVE_URL } from "@env";
export const restaurantsRequest = (location) => {
  return fetch(
    `${REACT_APP_FIREBASE_SERVE_URL}/placesNearby?location=${location}`
  )
    .then((res) => {
      const result = res.json();
      return result;
    })
    .catch((err) => console.log("Error restaurantsRequest:", err));
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
