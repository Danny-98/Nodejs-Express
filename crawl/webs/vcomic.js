const { crawlcomicInfo } = require("../helpers/function");

async function save_Comics() {
  await crawlcomicInfo("https://vcomic.net/truyen-toan-cau-sup-do.html");
}

module.exports = { save_Comics };
