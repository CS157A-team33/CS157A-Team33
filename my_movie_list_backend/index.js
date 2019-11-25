const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Lonelydream17",
  database: "cs157a"
});

db.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the MySQL server");
  }
});

app.listen(4040, () => {
  console.log("Server is running");
});

app.get("/login", (req, res) => {
  const { email } = req.query;
  db.query(`SELECT * FROM User WHERE email = '${email}'`, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: result
      });
    }
  });
});

app.get("/movies", (req, res) => {
  db.query("SELECT * FROM MOVIE", (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});

app.get("/tvseries", (req, res) => {
  db.query("SELECT * FROM TVSERIES", (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});

app.get("/content", (req, res) => {
  db.query("SELECT * FROM CONTENT", (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});

app.get("/content/add", (req, res) => {
  const {
    contentname,
    releaseyear,
    contentgenre,
    studioname,
    poster
  } = req.query;
  console.log(contentname, releaseyear, contentgenre, studioname, poster);
  const INSERT_CONTENT = `INSERT INTO Content VALUES('${contentname}','${releaseyear}', '${contentgenre}', '${studioname}', ${poster})`;
  db.query(INSERT_CONTENT, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("content successfully added");
    }
  });
});

app.get("/addReview", (req, res) => {
  const { email, contentname, releaseyear, review, rating } = req.query;
  const INSERT_USER_CONTENT = `INSERT INTO user_content VALUES('${email}','${contentname}','${releaseyear}','${review}','${rating}')`;
  db.query(INSERT_USER_CONTENT, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("review sucessfullt added");
    }
  });
});

app.get("/getContentUnionMovie", (req, res) => {
  const { contentname, releaseyear } = req.query;
  console.log(contentname);
  const GET_CONTENT = `SELECT contentname, releaseyear, contentgenre, studioname, poster, movie_length, description FROM content JOIN movie ON contentname = movie_contentname AND releaseyear = movie_releaseyear WHERE contentname = '${contentname}' AND releaseyear = '${releaseyear}'`;
  db.query(GET_CONTENT, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});

app.get("/getContentUnionTvSeries", (req, res) => {
  const { contentname, releaseyear } = req.query;
  const GET_CONTENT = `SELECT contentname, releaseyear, contentgenre, studioname, poster, no_of_episodes, description FROM content JOIN tvseries ON contentname = tvseries_contentname and releaseyear = tvseries_releaseyear WHERE contentname = '${contentname}' AND releaseyear = '${releaseyear}'`;
  db.query(GET_CONTENT, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});

app.get("/getMovie", (req, res) => {
  const { movie_contentname, movie_releaseyear } = req.query;
  const GET_CONTENT = `SELECT * FROM movie WHERE movie_contentname = '${movie_contentname}' AND movie_releaseyear = '${movie_releaseyear}'`;
  db.query(GET_CONTENT, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});

app.get("/signup", (req, res) => {
  const { email, password, username } = req.query;
  const INSERT_USER = `INSERT INTO User VALUES('${email}','${password}', '${username}')`;
  db.query(INSERT_USER, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("user sucessfully added");
    }
  });
});

app.get("/addfriend", (req, res) => {
  const { username, friend_username } = req.query;
  const INSERT_FRIEND = `INSERT INTO friendlist VALUES('${username}', '${friend_username}')`;
  db.query(INSERT_FRIEND, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("friend successfully added");
    }
  });
});

app.get("/", (req, res) => {
  res.send("go to /content to see all the movies");
});
