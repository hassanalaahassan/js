





var temp;
var quotes = [
  `"Be yourself; everyone else is already taken."`,
  `"I'm selfish, impatient and a little insecure. I make mistakes."`,
  `"So many books, so little time."`,
  `"A room without books is like a body without a soul."`,
];

var quotesWriter = [
  `"--Oscar Wilde"`,
  `"--Marilyn Monroe"`,
  `"--Frank Zappa"`,
  `"--Marcus Tullius Cicero"`,
];
function addQuote() {
  var quote = prompt("Enter Quote or Quote Writer for delete");
  var quoteWriter = prompt("Enter Qoute Writer");
  if (quote === "" || quoteWriter === "") {
    alert("Please Enter a Valied Value");
    return 0;
  }

  quotes.push(quote);
  quotesWriter.push(quoteWriter);
}

function deleteQuote() {
  var quoteDelete = prompt(`Enter Quote or Quote Writer for delete in These Signs "" `);

  if (quoteDelete === "") {
    alert("Please Enter a Valied Value");

    return 0;
  }

  for (var i = 0; i < quotes.length; i++) {
    if (quoteDelete === quotes[i] || quoteDelete === quotesWriter[i]) {
      quotes.splice(i, 1);
      quotesWriter.splice(i, 1);
      return 0;
    }
  }
}

function newQuote() {
  var i = Math.trunc(quotes.length * Math.random());

  if (temp === i && i > 0) {
    // undfined  هنا دايما هنقص 1 عشان لو زودت 1 وهي اصلا وصلت لأعلي قيمة هيديني
    i -= 1;
  } else if (temp === i && i === 0 && quotes.length > 1) {
    i += 1;
  }
  temp = i;

  document.getElementById("quote").innerHTML = quotes[i];
  document.getElementById("quoteWrite").innerHTML = quotesWriter[i];
}
