import { ERROR_MESSAGE } from '@constants/message';
import { VALIDATE } from '@constants/regexp';

function checkValidEmail(email) {
    var pattern = VALIDATE.email;
    if (email.match(pattern) === null) {
        alert(ERROR_MESSAGE.incorrectEmailFormat);
        return false;
    }
    return true;
}

export default checkValidEmail;
