const express = require("express");
const localtunnel = require("localtunnel");

var app = express();

app.get("/", function(req, res) {
  console.log("COÉ");
  res.send("Hello World!");
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});

(async () => {
  const tunnel = await localtunnel({ port: 3000 , subdomain: "foofeebar"});

  // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me
  console.log(tunnel.url);

  tunnel.on("close", () => {
    // tunnels are closed
  });
})();
