const express = require("express");
const axios = require("axios");
const app = express();
const path = require("path");
const port = process.env.PORT || 3007;
const baseURL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/";
const baseURLQA = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa";
const { TOKEN } = require("../config.js");
const compression = require("compression");

app.use(compression());

app.listen(port, () => {
  console.log(`The app server is running on port: ${port}`);
});
// http://example.com/page?parameter=value&also=another
const DIST_DIR = path.join(__dirname, "dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(express.json());
// app.use(express.static("public"));
app.use(express.static(__dirname + "/../client/dist"));
// compress all responses


app.get("/products", (req, res) => {
  axios
    .get(baseURL, { headers: { Authorization: TOKEN } })
    .then((receivedProductList) => {
      //   console.log(receivedProductList.data);
      res.status(200).send(receivedProductList.data);
    })
    .catch((err) => {
      //   console.error(err);
      console.error("failed in server GET");
    });
});

app.get("/products/:product_id/styles", (req, res) => {
  // console.log(req.params);
  axios
    .get(`${baseURL}${req.params.product_id}/styles`, {
      headers: { Authorization: TOKEN },
    })
    .then((receivedStylesList) => {
      // console.log(data.data);
      res.status(200).send(receivedStylesList.data);
    })
    .catch((err) => {
      console.error(err);
      console.error("failed in server GET");
    });
});
  //  axios.get(`${baseURL}?count=7`, {headers: {Authorization: TOKEN}})
  //  .then((receivedProductList) => {
  //  //   console.log(receivedProductList.data);
  //    res.status(200).send(receivedProductList.data);
  //  })
  //  .catch ((err) => {
  //    console.error(err);
  //    console.error('failed in server GET');
  //  })


app.get("/products/:product_id", (req,res) => {
   axios.get(`${baseURL}${req.params.product_id}`, {headers: {Authorization: TOKEN}})
      .then((receivedProduct) => {
         res.status(200).send(receivedProduct.data)
      })
      .catch ((err) => {
         console.error('failed in server GET');
      });

})

app.get("/products/:product_id/styles", (req,res) => {
   //console.log("Product ID", req.params.product_id);
   axios.get(`${baseURL}${req.params.product_id}/styles`, {headers: {Authorization: TOKEN}})
      .then((receivedStylesList) => {
         //console.log("Data for productID", receivedStylesList.data);
         res.status(200).send(receivedStylesList.data)
      })
      .catch ((err) => {
         //   console.error(err);
         //   console.error('failed in server GET');
         });

})

app.get("/products/:product_id", (req,res) => {
  //  console.log(req.params);
   axios.get(`${baseURL}${req.params.product_id}`, {headers: {Authorization: TOKEN}})
      .then((receivedFeaturesList) => {
         // console.log(data.data);
         res.status(200).send(receivedFeaturesList.data)
      })
      .catch ((err) => {
         //   console.error(err);
           console.error('failed in server features GET');
         });

})

app.get("/products/:product_id/related", (req,res) => {
   axios.get(`${baseURL}${req.params.product_id}/related`, {headers: {Authorization: TOKEN}})
      .then((receivedRelatedProductsList) => {
         res.status(200).send(receivedRelatedProductsList.data);
      })
      .catch ((err) => {
         console.error('failed in server GET');
         res.sendStatus(500);
      });
})

app.get("/", (req, res) => {
  res.sendFile(HTML_FILE, function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get("/questions/:product_id", (req, res) => {
  //  console.log('in server', req.params);

  axios({
    method: "get",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions`,
    params: {
      product_id: req.params.product_id,
      count: 10000,
    },
    headers: { Authorization: TOKEN },
  })
    .then((questionListData) => {
      res.status(200).send(questionListData.data);
    })
    .catch((err) => {
      console.error(err);
      console.log("failed in server GET");
    });
});

app.get("/questions/:question_id/answers", (req, res) => {
  // console.log(req.params);

  axios({
    method: "get",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${req.params.question_id}/answers`,
    headers: { Authorization: TOKEN },
  })
    .then((questionListData) => {
      res.status(200).send(questionListData.data);
    })
    .catch((err) => {
      console.error(err);
      console.log("failed in server GET");
    });
});

app.post("/questions", (req, res) => {
  // console.log(req.body);
  axios({
    method: "post",
    url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions",
    data: {
      body: req.body.body,
      name: req.body.name,
      email: req.body.email,
      product_id: req.body.product_id,
    },
    headers: { Authorization: TOKEN },
  })
    .then((err, apiResponse) => {
      res.send(apiResponse);
    })
    .catch((err) => {
      console.error(err);
      console.log("failed in server GET");
    });
});

app.post("/answers", (req, res) => {
  // console.log(req.body);
  axios({
    method: "post",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${req.body.id}/answers`,
    data: {
      body: req.body.body,
      name: req.body.name,
      email: req.body.email,
      photos: req.body.photos,
    },
    headers: { Authorization: TOKEN },
  })
    .then((err, apiResponse) => {
      res.send(apiResponse);
    })
    .catch((err) => {
      console.error(err);
      console.log("failed in server GET");
    });
});

app.put("/questions/:question_id", (req, res) => {
  axios({
    method: "put",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${Number(
      req.params.question_id
    )}/helpful`,
    headers: { Authorization: TOKEN },
  })
    .then((apiresponse) => {
      res.status(200).send(apiresponse.data);
    })
    .catch((err) => {
      console.error(err);
      console.log("failed in server GET");
    });
});

app.put("/answers/:answer_id", (req, res) => {
  axios({
    method: "put",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${Number(
      req.params.answer_id
    )}/helpful`,
    headers: { Authorization: TOKEN },
  })
    .then((apiresponse) => {
      res.status(200).send(apiresponse.data);
    })
    .catch((err) => {
      console.error(err);
      console.log("failed in server GET");
    });
});

app.put("/answers/:answer_id/report", (req, res) => {
  axios({
    method: "put",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${Number(
      req.params.answer_id
    )}/report`,
    headers: { Authorization: TOKEN },
  })
    .then((apiresponse) => {
      console.log('apiresponse')
      res.status(200).send(apiresponse.data);
    })
    .catch((err) => {
      console.error(err);
      console.log("failed in server GET");
    });
});

app.put("/reviews/:review_id", (req, res) => {
  axios({
    method: "put",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${Number(
      req.params.review_id
    )}/helpful`,
    headers: { Authorization: TOKEN },
  })
    .then((apiresponse) => {
      res.status(200).send(apiresponse.data);
    })
    .catch((err) => {
      console.error(err);
      console.log("failed in server GET");
    });
});

app.put("/reviews/:review_id", (req, res) => {
  axios({
    method: "put",
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${Number(
      req.params.review_id
    )}/report`,
    headers: { Authorization: TOKEN },
  })
    .then((apiresponse) => {
      res.status(200).send(apiresponse.data);
    })
    .catch((err) => {
      console.error(err);
      console.log("failed in server GET");
    });
});

app.post("/reviews", (req, res) => {
  // console.log('in server', req.params);

 axios({
   method: "post",
   url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews`,
  //  params: {

  //  },
   headers: { Authorization: TOKEN },
 })
   .then((reviewDataNew) => {
     res.status(200).send(reviewDataNew);
   })
   .catch((err) => {
     console.error(err);
     console.log("reviewDataNew failed in server GET");
   });
});
