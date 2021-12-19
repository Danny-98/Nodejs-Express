const fs = require("fs");
const {
  COIN_MARKET_CAP,
  ETHER_SCAN,
  BSC_SCAN,
} = require("../helpers/endpoint");
const {
  crawlerMarketCap,
  crawlerEtherScanHolder,
  crawlerEtherAccountTransactions,
  crawlerEtherAccountTokenHoldings,
  crawlerBSCHolder,
  crawlerBSCAccountTransactions,
  crawlerBSCTokenHolding,
} = require("../helpers/function");

const crawlCoinMarketCap = async () => {
  const url = COIN_MARKET_CAP + 1;
  crawlerMarketCap(url);
};
const crawlEtherScanHolder = async () => {
  const url = ETHER_SCAN.ETHER_SCAN_HOLDERS.replace(
    "{ACCOUNT}",
    "0xbb0e17ef65f82ab018d8edd776e8dd940327b28b"
  )
    .replace("{SID}", "")
    .replace("{S}", "16579517055253348798759097")
    .replace("{PAGE}", "1");

  const holders = await crawlerEtherScanHolder(url);

  const holder_transaction = await Promise.all(
    holders.map(async (holder) => {
      let transactions = await crawlerEtherAccountTransactions(
        ETHER_SCAN.ETHER_SCAN_ADDRESS + holder.address
      );
      let tokenHolding = await crawlerEtherAccountTokenHoldings(
        ETHER_SCAN.ETHER_TOKEN_HOLDING + holder.address
      );
      let holder_transaction_data = { holder, transactions, tokenHolding };
      return holder_transaction_data;
    })
  );
  try {
    fs.writeFileSync(
      "./db/sharks.json",
      `${JSON.stringify(holder_transaction)}`
    );
  } catch (err) {
    console.error(err);
  }
};

const crawlBSC = async () => {
  const holder_url = BSC_SCAN.BSC_HOLDERS.replace(
    "{ADDRESS}",
    "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
  ).replace("{PAGE}", "1");

  // const holders = await crawlerBSCHolder(holder_url);
  // const crawl_data = Promise.all(
  //   holders.map(async (holder) => {
  //     let transactions = await crawlerBSCAccountTransactions(
  //       BSC_SCAN.BSC_ADDRESS.replace("{ADDRESS}", holder.address).replace(
  //         "{PAGE}",
  //         "1"
  //       )
  //     );

  //     let tokenHolding = await crawlerBSCTokenHolding(
  //       BSC_SCAN.BSC_TOKEN_HOLDING + holder.address
  //     );
  //     let holder_transaction_data = { holder, transactions, tokenHolding };
  //     console.log(tokenHolding);
  //     return holder_transaction_data;
  //   })
  // );
  let tokenHolding = await crawlerBSCTokenHolding(
    BSC_SCAN.BSC_TOKEN_HOLDING + "0x1fbe2acee135d991592f167ac371f3dd893a508b"
  );
};

module.exports = { crawlCoinMarketCap, crawlEtherScanHolder, crawlBSC };
