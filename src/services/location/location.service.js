import camelize from "camelize";
import { REACT_APP_FIREBASE_SERVE_URL, REACT_APP_IS_MOCK } from "@env";
export const locationRequest = (searchTerm) => {
  return fetch(
    `${REACT_APP_FIREBASE_SERVE_URL}/geocode?city=${searchTerm}&mock=${REACT_APP_IS_MOCK}`
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log("Error locationRequest", err));
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
