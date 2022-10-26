"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getdataBtn = document.getElementById("getdata");
const ulData = document.getElementById("ulData");
getdataBtn.onclick = () => __awaiter(void 0, void 0, void 0, function* () {
    yield getReport();
});
const getReport = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("api/report");
    console.log(response);
    const datas = yield response.json();
    console.log(datas);
    datas.forEach((data) => {
        const itemEl = document.createElement("li");
        itemEl.textContent = `${data.options} + ${data.content}`;
        console.log(data);
        ulData.append(itemEl);
    });
    return datas;
});
