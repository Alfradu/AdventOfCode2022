import { writeFileSync } from 'fs';
import { config } from 'dotenv';
import fetch from 'node-fetch';

config();
var day = new Date().getDate();
var url = 'https://adventofcode.com/2022/day/' + day + '/input';
var path_input = "./inputs";

fetch(url, {
    headers: {
        cookie: `session=${process.env.AOC_SESSION}`
    },
})
    .then((res) => {
        if (res.status !== 200) {
            throw new Error(String(res.status))
        }
        return res.text();
    }).then((body) => {
        writeFileSync(path_input + "/input" + day + ".txt", body.replace(/\n$/, ""))
    }).catch((err) => {
        console.error(err);
    })