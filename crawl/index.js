const { crawler } = require("./webs/monngonmoingay");
const { mon_ngon_moi_ngay } = require("./helpers/endpoint");

const { AN_CHAY, AN_KIENG, AN_NHAU, AN_SANG, AN_TOI, AN_TRUA, AN_VAT } =
  mon_ngon_moi_ngay;
crawler(AN_NHAU);
