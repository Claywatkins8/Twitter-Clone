import axios from "axios";

const url = `http://localhost:4000/api/comments`;

class CommentModel {
  // ALL
  static all = () => {
    return axios
      .get(`${url}`, {
        headers: {
          authorization: `Bearer ${localStorage.uid}`,
        },
      })
      .then((res) => res.data);
  };

  static findByTweet = () => {
    return axios
      .get(`${url}/:id`, {
        headers: {
          authorization: `Bearer ${localStorage.uid}`,
        },
      })
      .then((res) => res.data);
  };

  // access create comment route
  static create = (data) => {
    return axios
      .post(`${url}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.uid}`,
        },
        body: JSON.stringify(data),
      })
      .then((res) => res.json());
  };

  // accessed delete route of comment
  static delete = (id) => {
    return axios.delete(`${url}/delete/${id}`).then((res) => res.json());
  };
}

export default CommentModel;
