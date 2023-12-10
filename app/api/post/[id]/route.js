import axios from "axios";

export const GET = async (req, context) => {
  try {
    const postId = context.params.id;
    console.log(postId);

    var data = JSON.stringify({
      collection: "blogs",
      database: "test",
      dataSource: "Cluster0",
      filter: {
        _id: { $oid: postId },
      },
    });

    var config = {
      method: "post",
      url: "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-xnjub/endpoint/data/v1/action/findOne",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key":
          "wMCOwj9q2qb8WOUzAuQLrC5R11OoYQM1ZjxoRWvKyCGtZA7vizpR49Zmg9RhPsYG",
      },
      data: data,
    };

    var res = await axios(config)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error;
      });

    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
