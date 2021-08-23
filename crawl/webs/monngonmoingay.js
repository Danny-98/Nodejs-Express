const fs = require("fs");

const { crawler_mon_ngon_moi_ngay } = require("../helpers/function");
const { mon_ngon_moi_ngay } = require("../helpers/endpoint");
const { AN_CHAY, AN_KIENG, AN_NHAU, AN_SANG, AN_TOI, AN_TRUA, AN_VAT } =
  mon_ngon_moi_ngay;

async function crawl_data(url, length) {
  let crawlData = [];
  for (let index = 1; index < length; index++) {
    let data = await crawler_mon_ngon_moi_ngay(url, index);
    crawlData.push(data);
  }
  return crawlData;
}

async function save_mon_ngon_moi_ngay() {
  let result = {};
  let an_kieng = await crawl_data(AN_KIENG, 6);
  let an_nhau = await crawl_data(AN_NHAU, 9);
  let an_chay = await crawl_data(AN_CHAY, 8);
  let an_sang = await crawl_data(AN_SANG, 11);
  let an_trua = await crawl_data(AN_TRUA, 61);
  let an_toi = await crawl_data(AN_TOI, 68);
  let an_vat = await crawl_data(AN_VAT, 6);
  result.ankieng = an_kieng;
  result.anNhau = an_nhau;
  result.anSang = an_sang;
  result.anTrua = an_trua;
  result.anToi = an_toi;
  result.anVat = an_vat;
  result.anChay = an_chay;

  try {
    fs.writeFileSync("./db/db.json", `${JSON.stringify(result)}`);
  } catch (err) {
    console.error(err);
  }
}

module.exports = { save_mon_ngon_moi_ngay };
