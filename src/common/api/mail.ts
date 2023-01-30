import { Mail } from '../model';
import { POST_MAIL } from '../urls';

function postMail(mail: Mail): Promise<Response> {
  return fetch(POST_MAIL, {
    method: 'POST',
    body: JSON.stringify(mail),
  })
    .then((data) => data.json());
}

export {
  postMail,
};
