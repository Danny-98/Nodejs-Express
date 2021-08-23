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

  foods.each((i, item) => {
    let aTag = $(item);

    let href = aTag.attr("href");
    let name = aTag.attr("title");

    let img =
      aTag.children("img").html() !== null
        ? aTag.children("img").attr("src")
        : item.children[0].next.children[0].next.attribs.srcset;

    result[page_number].push({
      href,
      name,
      img,
    });
  });
  return result;
}

module.exports = { crawler_mon_ngon_moi_ngay };
