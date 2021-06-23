const axios = require("axios");

const renderGamePage = async (req, res) => {
  const options = {
    layout: "main",
  };
  const { id: gameId } = req.params;

  const data = `fields name, summary, cover.url, screenshots.url, rating, multiplayer_modes, release_dates.date, platforms.name, genres.name; where id =${gameId};`;
  const config = {
    method: "post",
    url: "https://api.igdb.com/v4/games",
    headers: {
      "Client-ID": "zgvole5aqniz8rnu55rvoxmw3h8d8x",
      Authorization: "Bearer zzrepo6q4zb5jvw5jxqswmpgc6ef0s",
      "Content-Type": "application/json",
    },
    data,
  };

  const response = await axios(config);

  console.log(config);

  const results = response.data;

  const game = results[0];

  return res.render("games", { options, game });
};

module.exports = renderGamePage;
