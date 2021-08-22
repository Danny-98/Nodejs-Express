const fetch = require("node-fetch");
const cheerio = require("cheerio");
const { html } = require("cheerio/lib/api/manipulation");

async function crawler(url, page_number = 1) {
  let new_url = `${url}?pg=${page_number}`;
  let result = {
    [page_number]: [],
  };

  const res = await fetch(new_url);
  const data = await res.text();

  const $ = cheerio.load(data);

  const foods = $("div.one-recipes");

  foods.each((i, item) => {
    let aTag = $(item).children("div.text-center").children("a");
    let href = aTag.attr("href");
    let name = aTag.attr("title");
    // let img = aTag.children('img') !== null? aTag.children('img').attr('src') : aTag.children('picture.img-fluid').children('img');
    let img =aTag.children('picture.img-fluid').children('img');
    console.log(img.html());
    result[page_number].push({
      href,
      name,
      img,
    });
  });

  // console.log("result", result);
  return result;
}

module.exports = { crawler };
