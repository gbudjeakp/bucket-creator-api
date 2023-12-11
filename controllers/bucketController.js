require("dotenv").config();
const axios = require("axios");
const fs = require("fs");

const token = process.env.API_TOKEN;

const clusterId = process.env.CLUSTER_ID;

const bucket = process.env.BUCKET_NAME;

const viewBuckets = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.linode.com/v4/object-storage/buckets`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    res.json({ data: response.data.data });
  } catch (err) {
    res.json({ data: err });
  }
};

const createBuckets = async (req, res) => {
  // Set the parameters in the request body
  const {label} = req.body;
  

  const bucketData = {
    label: label,
    cluster: clusterId
  }
  try {
    // Make a POST request to the Linode API
    const response = await axios.post(
      `https://api.linode.com/v4/object-storage/buckets`,
      bucketData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response.data); // Log the response data
    res.json(response.data); // Send the response data to the client
  } catch (error) {
    console.error("Error making POST request:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  viewBuckets,
  createBuckets,
};
