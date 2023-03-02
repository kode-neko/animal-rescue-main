import { Mail } from '../model';
import { API_MAIL_SEND } from '../urls';

function postMail(mail: Mail): Promise<Response> {
  return fetch(API_MAIL_SEND, {
    method: 'POST',
    body: JSON.stringify(mail),
  })
    .then((data) => data.json());
}

export {
  postMail,
};
