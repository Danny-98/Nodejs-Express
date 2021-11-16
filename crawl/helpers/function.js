const fetch = require("node-fetch");
const cheerio = require("cheerio");

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
async function crawlCsgo(){
  // https://csgoempire.com/withdraw#730
  // https://buff.163.com/market/csgo#tab=selling&page_num=1
  let newUrl = "https://csgoempire.com/withdraw#730"
  const res = await fetch(newUrl);
  const data = await res.text();
  const $ = cheerio.load(data);
  
  const content = $("div.item__inner")
  console.log("data",data);
}
module.exports = { crawler_mon_ngon_moi_ngay, crawlcomicInfo,crawlCsgo };
