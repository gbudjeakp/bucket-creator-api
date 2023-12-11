require("dotenv").config();
const axios = require("axios");


const token = process.env.API_TOKEN;

const clusterId = process.env.CLUSTER_ID;


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
  const { bucketName } = req.body;

  const bucketData = {
    label: bucketName,
    cluster: clusterId,
  };
  try {
    const response = await axios.post(
      `https://api.linode.com/v4/object-storage/buckets`,
      bucketData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  viewBuckets,
  createBuckets,
};
