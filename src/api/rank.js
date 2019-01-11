import axios from "axios";

export function getCarouselList(argument) {
    return axios.get("/getCarouselList");
}