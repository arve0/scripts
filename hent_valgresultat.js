'use strict'

const request = require("request")
const async = require("async")
const querystring = require("querystring")

/* $.map($(".morph-item[href^=\\/]"),
 *         function(i){return $(i).attr("href")} )
 */
const FYLKER = ["akershus",
              "aust-agder",
              "buskerud",
              "finnmark+finnm%C3%A1rku",
              "hedmark",
              "hordaland",
              "m%C3%B8re+og+romsdal",
              "nord-tr%C3%B8ndelag",
              "nordland",
              "oppland",
              "oslo",
              "rogaland",
              "sogn+og+fjordane",
              "s%C3%B8r-tr%C3%B8ndelag",
              "telemark",
              "troms+romsa",
              "vest-agder",
              "vestfold",
              "%C3%B8stfold"]

const BASE_URL = "http://api.valgresultat.no/2015/ko/norge/"
const PARTY = "Arbeiderpartiet"

async.map(FYLKER, getPartyResult, (err, res) => {
  let printFriendly = `${PARTY}\n`
  for (let r of res) {
    printFriendly += r.fylke
    for (let partyResult of r.results) {
      // iterate objects
      let party = partyResult.zzzPartinavn
      if (party == PARTY) {
        let percent = partyResult.prosent
        printFriendly += `, ${percent} %\n`
      }
    }
  }
  console.log(printFriendly)
})

function getPartyResult(fylke, cb) {
  let url = BASE_URL + fylke
  request(url, function(err, res, data){
    let r = {}
    r.fylke = unescapedCapitalized(fylke)
    r.results = JSON.parse(data)._embedded.partier
    cb(err, r)
  })
}

function unescapedCapitalized(str) {
  str = querystring.unescape(str)
  str = str[0].toUpperCase() + str.substring(1)
  str = str.replace(/\+/g, " ")
  return str
}
