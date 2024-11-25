async function generateQuote() {
  const quoteEl = document.getElementById('quote');
  const authorEl = document.getElementById('author');
  quoteEl.textContent = 'Loading...';
  authorEl.textContent = '';

  try {
    const response = await fetch('https://zenquotes.io/api/random');
    const data = await response.json();

    if (data && data.length > 0) {
      quoteEl.textContent = `"${data[0].q}"`;
      authorEl.textContent = `- ${data[0].a}`;
    } else {
      quoteEl.textContent = 'No quote found!';
    }
  } catch (error) {
    quoteEl.textContent = 'Failed to fetch the quote.';
    console.error('Error fetching quote:', error);
  }
}
