import { selectReport } from "../models/reportModel";

const express = require("express");


function getReport(request:Request, response:Response){
    let result = selectReport();
    response.
}