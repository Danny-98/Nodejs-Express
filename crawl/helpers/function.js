const fetch = require("node-fetch");
const cheerio = require("cheerio");
const axios = require("axios");
const rp = require("request-promise");
async function crawler_mon_ngon_moi_ngay(url, page_number = 1) {
  let new_url = `${url}?pg=${page_number}`;
  let result = {
    [page_number]: [],
  };

  const res = await fetch(new_url);
  const data = await res.text();

  const $ = cheerio.load(data);

  const foods = $("div.one-recipes").children("div.text-center").children("a");

  foods.each(async (i, item) => {
    let aTag = $(item);

    let href = aTag.attr("href");
    let name = aTag.attr("title");

    let img =
      aTag.children("img").html() !== null
        ? aTag.children("img").attr("src")
        : item.children[0].next.children[0].next.attribs.srcset;
    let detail = await crawlFoodsInfo(href);
    result[page_number].push({
      href,
      name,
      img,
      detail,
    });
  });
  return result;
}

async function crawlFoodsInfo(url) {
  const res = await fetch(url);
  const response = await res.text();
  const $ = cheerio.load(response);
  let level = $(
    ".detail_note > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1)"
  )
    .text()
    .trim()
    .replace(/(<([^>]+)>)/gi, "")
    .replace(/\s+/g, " ");
  const datas = $("div.row.mb-3");

  const meterial = $(datas.get(0))
    .html()
    .replace(/<a[^>]*>/g, "<p>")
    .replace(/<\/a>/g, "</p>")
    .replace(/(\r\n|\n|\r|\t)/gm, "")
    .replace(/<img .*?>/g, "");

  const preprogressing = $(datas.get(1))
    .html()
    .replace(/<a[^>]*>/g, "<p>")
    .replace(/<\/a>/g, "</p>")
    .replace(/(\r\n|\n|\r|\t)/gm, "")
    .replace(/<img .*?>/g, "");
  const pratice = $(datas.get(2))
    .html()
    .replace(/<a[^>]*>/g, "<p>")
    .replace(/<\/a>/g, "</p>")
    .replace(/(\r\n|\n|\r|\t)/gm, "")
    .replace(/<img .*?>/g, "");
  const howtouse = $(datas.get(3))
    .html()
    .replace(/<a[^>]*>/g, "<p>")
    .replace(/<\/a>/g, "</p>")
    .replace(/(\r\n|\n|\r|\t)/gm, "")
    .replace(/<img .*?>/g, "");
  const trick = $(datas.get(4))
    .html()
    .replace(/<a[^>]*>/g, "<p>")
    .replace(/<\/a>/g, "</p>")
    .replace(/(\r\n|\n|\r|\t)/gm, "")
    .replace(/<img .*?>/g, "");

  const youtubeEmbedId = $(".youtube.text-center").attr("data-embed");

  const data = {
    level,
    meterial,
    preprogressing,
    pratice,
    howtouse,
    trick,
    youtubeEmbedId,
  };
  return data;
}
async function crawlcomicInfo(url) {
  const res = await fetch(url);
  const data = await res.text();
  const $ = cheerio.load(data);
  const banner = $("div.well.info-cover").children("img").attr("src");
  const name = $("ul.manga-info").children("h3").text();
  const chapters = $("ul.list-chapters").children("li");
  let result = {
    banner,
    name,
    chapters: [],
  };

  let image = await crawlImageHtml("doc-toan-cau-sup-do-chuong-1.html");
  console.log("image", image);

  // chapters.each(async (index, item) => {
  //   let aTag = $(item).children("a");
  //   let href = aTag.attr("href");
  //   let chap = aTag.attr("title");
  //   let view = aTag.children("div.chapter-view").text();
  //   let time = aTag.children("div.chapter-time").text();
  //   let image = await crawlImageHtml(href);

  //   result.chapters.push({
  //     href,
  //     chap,
  //     view,
  //     time,
  //     image,
  //   });
  // });
}
async function crawlImageHtml(url) {
  let newUrl = "https://vcomic.net/" + url;
  const res = await fetch(newUrl);
  const data = await res.text();
  const $ = cheerio.load(data);
  const content = $("div.chapter-content");
  return content.html();
}

async function crawlerMarketCap(newUrl) {
  return newUrl;
}

async function crawlerEtherScanHolder(newUrl) {
  const res = await fetch(newUrl);
  const data = await res.text();
  const $ = cheerio.load(data);
  const trs = $("tbody > tr");
  const holders = [];
  trs.each((i, e) => {
    let td = $(e).children("td");
    let rank = $(td.get(0)).text();
    let link = $(td.get(1)).children("span").children("a").attr("href");
    let quantity = $(td.get(2)).text();
    let percentage = $(td.get(3)).text();
    let value = $(td.get(4)).text();
    let address = link.substring(52, 94);
    let object = {
      rank,
      link,
      quantity,
      percentage,
      value,
      address,
    };
    holders.push(object);
  });

  return holders;
}
async function crawlerEtherAccountTransactions(newUrl) {
  const res = await fetch(newUrl);
  const data = await res.text();
  const $ = cheerio.load(data);
  const trs = $("table.table.table-hover > tbody > tr");
  let transactions = [];
  trs.each((i, e) => {
    let td = $(e).children("td");

    if (td.length === 12) {
      let txnHash = $(td.get(1)).text();
      let method = $(td.get(2)).text();
      let age = $(td.get(5)).text();
      let from = $(td.get(6)).text();
      let status = $(td.get(7)).text();
      let to = $(td.get(8)).text();
      let value = $(td.get(9)).text();
      let transaction = {
        txnHash,
        method,
        age,
        from,
        status,
        to,
        value,
      };
      transactions.push(transaction);
    }
  });
  return transactions;
}

async function crawlerEtherAccountTokenHoldings(newUrl) {
  const res = await fetch(newUrl);
  const data = await res.text();
  const $ = cheerio.load(data);
  const trs = $("tbody > tr");

  const totalValue = $("#HoldingsUSD").text();

  const tokens = [];
  trs.each((i, e) => {
    let td = $(e).children("td");
    if (td.length === 8) {
      let symbol = $(td.get(1)).text();
      let contracAddress = $(td.get(2)).text();
      let quantity = $(td.get(3)).text();
      let value = $(td.get(6)).text();
      let token = {
        symbol,
        contracAddress,
        quantity,
        value,
      };
      tokens.push(token);
    }
  });
  const tokenHolding = {
    totalValue,
    tokens,
  };
  return tokenHolding;
}

async function crawlerBSCHolder(newUrl) {
  var config = {
    method: "get",
    url: newUrl,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:94.0) Gecko/20100101 Firefox/94.0",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.5",
      Referer:
        "https://bscscan.com/token/0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
      Connection: "keep-alive",
      Cookie:
        "__stripe_mid=7b920cee-9c87-47bf-8af5-e8e502643ddf894647; amp_fef1e8=02572a65-e29a-412c-97cf-1d329c9aa677R...1flt3rcv5.1flt3tlis.4.1.5; bscscan_cookieconsent=True; ASP.NET_SessionId=inddbjdbw0srr4ingz23aj4t; __cflb=02DiuJNoxEYARvg2sN4zbncfn2GL25UpgYp3ipSsix6mr; __cflb=02DiuJNoxEYARvg2sN4zbncfn2GL25Upfnn842YpK9wo2",
      "Upgrade-Insecure-Requests": "1",
      "Sec-Fetch-Dest": "iframe",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-Site": "same-origin",
      TE: "trailers",
    },
    json: false,
  };
  const res = await rp(config);
  const $ = cheerio.load(res);
  const trs = $("tbody > tr");
  const holders = [];
  trs.each((i, e) => {
    let td = $(e).children("td");
    let rank = $(td.get(0)).text();
    let link = $(td.get(1)).children("span").children("a").attr("href");
    let quantity = $(td.get(2)).text();
    let percentage = $(td.get(3)).text();
    let value = $(td.get(4)).text();
    let address = link.substring(52, 94);
    let object = {
      rank,
      link,
      quantity,
      percentage,
      value,
      address,
    };

    holders.push(object);
  });
  return holders;
}

async function crawlerBSCAccountTransactions(newUrl) {
  var config = {
    method: "get",
    url: newUrl,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:95.0) Gecko/20100101 Firefox/95.0",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.5",
      Referer: "https://bscscan.com/accounts",
      Connection: "keep-alive",
      Cookie:
        "__stripe_mid=7b920cee-9c87-47bf-8af5-e8e502643ddf894647; amp_fef1e8=02572a65-e29a-412c-97cf-1d329c9aa677R...1flt3rcv5.1flt3tlis.4.1.5; bscscan_cookieconsent=True; ASP.NET_SessionId=inddbjdbw0srr4ingz23aj4t; __cflb=02DiuJNoxEYARvg2sN4zbncfn2GL25Upgez1AFqjf1gNg; __cflb=02DiuJNoxEYARvg2sN4zbncfn2GL25UpfNugpfqKBQwXi",
      "Upgrade-Insecure-Requests": "1",
      "Sec-Fetch-Dest": "document",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-Site": "same-origin",
      "Sec-Fetch-User": "?1",
      "Cache-Control": "max-age=0",
    },
    json: false,
  };
  const res = await rp(config);

  const $ = cheerio.load(res);

  const trs = $("table.table.table-hover > tbody > tr");
  let transactions = [];
  trs.each((i, e) => {
    let td = $(e).children("td");
    if (td.length > 8) {
      let txnHash = $(td.get(1)).text();
      let method = $(td.get(2)).text();
      let age = $(td.get(5)).text();
      let from = $(td.get(6)).text();
      let status = $(td.get(7)).text();
      let to = $(td.get(8)).text();
      let value = $(td.get(9)).text();
      let transaction = {
        txnHash,
        method,
        age,
        from,
        status,
        to,
        value,
      };
      transactions.push(transaction);
    }
  });
  return transactions;
}

async function crawlerBSCTokenHolding() {
  const config = {
    method: "get",
    url: "https://bscscan.com/tokenholdings?a=0x1fbe2acee135d991592f167ac371f3dd893a508b",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:95.0) Gecko/20100101 Firefox/95.0",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.5",
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "keep-alive",
      Cookie:
        "__stripe_mid=7b920cee-9c87-47bf-8af5-e8e502643ddf894647; amp_fef1e8=02572a65-e29a-412c-97cf-1d329c9aa677R...1flt3rcv5.1flt3tlis.4.1.5; bscscan_cookieconsent=True; ASP.NET_SessionId=inddbjdbw0srr4ingz23aj4t; __cflb=02DiuJNoxEYARvg2sN4zbncfn2GL25Upgez1AFqjf1gNg; __cflb=02DiuJNoxEYARvg2sN4zbncfn2GL25UpfrTPZqabd8JbN",
      "Upgrade-Insecure-Requests": "1",
      "Sec-Fetch-Dest": "document",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-Site": "none",
      "Sec-Fetch-User": "?1",
      TE: "trailers",
    },
    json: false,
  };
  const res = await rp(config);

  const $ = cheerio.load(res);
  const trs = $("tbody > tr");

  const totalValue = $("#HoldingsUSD").text();

  const tokens = [];
  trs.each((i, e) => {
    let td = $(e).children("td");
    if (td.length === 8) {
      let symbol = $(td.get(1)).text();
      let contracAddress = $(td.get(2)).text();
      let quantity = $(td.get(3)).text();
      let value = $(td.get(6)).text();
      let token = {
        symbol,
        contracAddress,
        quantity,
        value,
      };
      tokens.push(token);
    }
  });
  const tokenHolding = {
    totalValue,
    tokens,
  };
  return tokenHolding;
}

module.exports = {
  crawler_mon_ngon_moi_ngay,
  crawlcomicInfo,
  crawlerMarketCap,
  crawlerEtherScanHolder,
  crawlerEtherAccountTransactions,
  crawlerEtherAccountTokenHoldings,
  crawlerBSCHolder,
  crawlerBSCAccountTransactions,
  crawlerBSCTokenHolding,
};
