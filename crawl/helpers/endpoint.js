const MONNGONMOINGAY_URL = "https://monngonmoingay.com/";

const AN_VAT = MONNGONMOINGAY_URL + "an-vat";
const AN_CHAY = MONNGONMOINGAY_URL + "cac-mon-chay-ngon";
const AN_TRUA = MONNGONMOINGAY_URL + "bua-trua";
const AN_SANG = MONNGONMOINGAY_URL + "bua-sang";
const AN_TOI = MONNGONMOINGAY_URL + "bua-toi";
const AN_KIENG = MONNGONMOINGAY_URL + "an-kieng";
const AN_NHAU = MONNGONMOINGAY_URL + "mon-nhau";

const mon_ngon_moi_ngay = {
  AN_VAT,
  AN_CHAY,
  AN_TRUA,
  AN_SANG,
  AN_KIENG,
  AN_TOI,
  AN_NHAU,
};

const COIN_MARKET_CAP = "https://coinmarketcap.com/?page=";

const ETHER_SCAN_BASE_URL = "https://etherscan.io/";

const ETHER_SCAN_ADDRESS = ETHER_SCAN_BASE_URL + "address/";

const ETHER_SCAN_HOLDERS =
  ETHER_SCAN_BASE_URL +
  "token/generic-tokenholders2?a={ACCOUNT}&sid={SID}&m=normal&s={S}&p={PAGE}";

const ETHER_TOKEN_HOLDING = ETHER_SCAN_BASE_URL + "tokenholdings?a=";

const COIN_GECKO_API = "https://api.coingecko.com/api/v3/coins/axie-infinity";

const ETHER_SCAN = {
  ETHER_SCAN_ADDRESS,
  ETHER_SCAN_HOLDERS,
  ETHER_TOKEN_HOLDING,
};

const BSC_BASE_URL = "https://bscscan.com/";
const BSC_HOLDERS =
  BSC_BASE_URL +
  "token/generic-tokenholders2?m=normal&a={ADDRESS}&s=554436671057203799657322113&sid=eba6fb5ee2340e4e0bec613a9f0eefd5&p={PAGE}";
const BSC_ADDRESS = BSC_BASE_URL + "txs?a={ADDRESS}&p={PAGE}";
const BSC_TOKEN_HOLDING = BSC_BASE_URL + "tokenholdings?a=";
const BSC_SCAN = {
  BSC_HOLDERS,
  BSC_ADDRESS,
  BSC_TOKEN_HOLDING,
};

module.exports = {
  mon_ngon_moi_ngay,
  COIN_MARKET_CAP,
  BSC_SCAN,
  ETHER_SCAN,
  COIN_GECKO_API,
};
