import { POST_MAIL } from '../urls';

function postMail(): Promise<Response> {
  return fetch(POST_MAIL, {
    method: 'post',
    body: 'json',
  })
    .then((data) => data.json());
}

export {
  postMail,
};
