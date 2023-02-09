const spinner = document.querySelector('#js-spinner');

const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);

const twitterButton = document.querySelector('#js-tweet');

const endpoint = 'https://random-quote-api.dwjmoore.repl.co/random-quote';

async function getQuote() {
	spinner.classList.remove('hidden');
	try {
		const response = await fetch(endpoint);
		if (!response.ok) {
			throw Error(response.statusText);
		}
		const json = await response.json();
		displayQuote(json.quote);
		setTweetButton(json.quote);
		setTweetButton(json.quote);
	} catch {
		alert("The random quote api is waking up. Click the 'Generate a new quote' button.");
	} finally {
		spinner.classList.add('hidden');
	}
}

function displayQuote(quote) {
	const quoteText = document.querySelector('.quote');
	quoteText.textContent = quote;
}

function setTweetButton(quote) {
	twitterButton.setAttribute('onclick', `window.location.href='https://twitter.com/share?text=${quote}'`);
}

getQuote();