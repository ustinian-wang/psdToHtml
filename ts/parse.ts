import {run} from "./app";
import * as fs from "fs";

let buffer = fs.readFileSync("./config.json");
let config = JSON.parse(buffer.toString());
run(config)