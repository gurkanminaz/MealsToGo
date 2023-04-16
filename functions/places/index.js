const { mocks, addMockImage } = require("./mock");
const url = require("url");

module.exports.placesRequest = (request, response) => {
  const { location } = url.parse(request.url, true).query;

  let data = mocks[location];
  if (data) {
    data.results = data.results.map((i) => addMockImage(i));
  }
  response.json(data);
};
