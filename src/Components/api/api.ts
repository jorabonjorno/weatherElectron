import axios from "axios";
import {Url, APPID} from "../../constants/apiConst";

export const getResponse = async (inputValue:string) => {
        try {
                const fullUrl = Url + `q=${inputValue}` + `&appid=${APPID}`
                const response = await axios.get(fullUrl)
                return response.data
        } catch (e) {
                return null
        }
}
