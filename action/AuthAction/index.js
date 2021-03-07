import { accountService } from 'services';
import { AUTHENTICATION_TYPE } from 'constant';

export const SignUp = (push, dataDispatch) => dispatch => {
  dispatch({
    type: AUTHENTICATION_TYPE.SIGNUP_REQUEST
  });
  return accountService
    .SignUpService(dataDispatch)
    .then(res => {
      dispatch({
        type: AUTHENTICATION_TYPE.SIGNUP_SUCCESS
      });
      cookiesServices.clearToken();
      push('/');
      return { error: false, data: res.data };
    })
    .catch(err => {
      dispatch({
        type: AUTHENTICATION_TYPE.SIGNUP_FAILURE
      });
      return { error: true, data: err.response.data.msg };
    });
};
