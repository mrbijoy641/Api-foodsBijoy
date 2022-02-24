const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayquote(data))
}
const displayquote = quote => {
    // console.log(quote.quote);
    const quoteElement = document.getElementById('qoute');
    quoteElement.innerText = quote.quote;
}