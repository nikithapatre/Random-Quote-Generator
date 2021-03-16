window.onload = load;
function load() {
    generateQuotes() 

}

function generateQuotes() {

var quoteLength = quotes.length
var randomQuoteIndex = Math.floor(Math.random() * quoteLength);
var randomQuoteData = quotes[randomQuoteIndex];


var twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text="

var changeFormatTitle = randomQuoteData.title.replace(/ /g, "%20")
twitterLink += changeFormatTitle 


var changeFormatAuthor = randomQuoteData.author.replace(/ /g, "%20")
twitterLink += " - " + changeFormatAuthor

document.getElementById("tweet-quote").href = twitterLink;
document.getElementById("text").innerText = randomQuoteData.title;
document.getElementById("author").innerText = randomQuoteData.author ;

}


//   var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]


