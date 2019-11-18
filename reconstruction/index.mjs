import createStatementData from './createStatementData.mjs'

const plays = {
  hamlet: {
    name: "Hamlet",
    type: "tragedy"
  },
  "as-like": {
    name: "As You Like It",
    type: "comedy"
  },
  othello: {
    name: "Othello",
    type: "tragedy"
  }
};
const invoice = {
  customer: "BigCo",
  performances: [{
      playID: "hamlet",
      audience: 55
    },
    {
      playID: "as-like",
      audience: 35
    },
    {
      playID: "othello",
      audience: 40
    }
  ]
};

function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}
/**
 * 渲染文本
 * @param {Object} invoice
 * @param {Object} plays
 */
function renderPlainText(data, plays) {
  // console.log(data);
  let result = `Statement for ${data.customer}\n`;
  for (let perf of data.performances) {
    result += `${perf.play.name}: ${usd(perf.amount)} (${
      perf.audience
    } seats)\n`;
  }

  result += `Amount owned is ${usd(data.totalAmount)}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;
  return result;
}

function htmlStatement(invoice, plays) {
  return renderHtml(createStatementData(invoice, plays))
}

function renderHtml(data) {
  let result = `<h1>Statement for ${data.customer}</h1>`
  result += "<table>\n"
  result += "<tr><th>Play</th><th>seats</th><th>cost</th></tr>"
  for (let perf of data.performances) {
    result += `<tr><td>${perf.play.name}</td><td>${perf.audience}</td>`
    result += `<td>${usd(perf.amount)}</td></tr>\n`
  }
  result += "</table>\n"
  result += `<p>Amount owed is <em>${usd(data.totalAmount)}</em></p>\n`
  result += `<p>You earned <em>${usd(data.totalVolumeCredits)}</em>credits</p>\n`
  return result
}
/**
 *
 * @param {Number} aNumber
 * 格式化数字
 */
function usd(aNumber) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format(aNumber / 100);
}




console.log(htmlStatement(invoice, plays));