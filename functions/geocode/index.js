const { locations: locationsMock } = require("./geocode.mock");
const url = require("url");

module.exports.geocodeRequest = (request, response) => {
  const { city } = url.parse(request.url, true).query;
  const data = locationsMock[city?.toLowerCase()];
  console.log("TEST", city);
  response.json(data);
};
