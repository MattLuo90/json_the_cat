const request = require("request");
const args = process.argv.slice(2);

const breedFetcher = (args) => {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`,
    (error, response, body) => {
      if (error) {
        console.log("error:", error);
        console.log("statusCode:", response && response.statusCode);
        return;
      }
      if (body === []) {
        return console.log("This type of breed is not found");
      }
      const data = JSON.parse(body);
      console.log(data[0].description);
    }
  );
};
breedFetcher(args);
