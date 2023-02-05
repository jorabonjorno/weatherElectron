import {ARR} from "../constants/apiConst";

export const randomCity = () => {
    return ARR[Math.floor(Math.random() * ARR.length)];
}

