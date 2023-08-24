import { ERROR_MESSAGE } from '@constants/message';
import { VALIDATE } from '@constants/regexp';

function checkValidation(value) {
    const checkType = Object.keys(value);
    const checkedValue = Object.values(value)[0];
    const pattern = VALIDATE[checkType[0]];
    if (checkedValue.match(pattern) === null) {
        return false;
    }
    return true;
}

export default checkValidation;
