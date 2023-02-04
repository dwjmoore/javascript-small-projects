const spinner = document.querySelector('#js-spinner');

const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);

const endpoint = 'https://random-quote-api.dwjmoore.repl.co/random-quote';

async function getQuote() {
	spinner.classList.remove('hidden');
	newQuoteButton.disabled = true;

	try {
		const response = await fetch(endpoint);
		if (!response.ok) {
			throw Error(response.statusText);
		}
		const json = await response.json();
		displayQuote(json.quote);
	} catch {
		alert('Failed to fetch new quote. Try again. The server might still be waking up.')
	} finally {
		newQuoteButton.disabled = false;
		spinner.classList.add('hidden');
	}
}

function displayQuote(quote) {
	const quoteText = document.querySelector('.quote');
	quoteText.textContent = quote;
}