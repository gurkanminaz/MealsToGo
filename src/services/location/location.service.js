import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `https://89ad-24-133-244-2.eu.ngrok.io/mealstogo-61869/us-central1/geocode?city=${searchTerm}`
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log("errorrr");
      console.log(err);
    });
};

// export const locationRequest = (searchTerm) => {
//   return new Promise((resolve, reject) => {
//     const locationMock = locations[searchTerm];
//     if (!locationMock) {
//       reject("not found");
//     }
//     resolve(locationMock);
//   });
// };

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
