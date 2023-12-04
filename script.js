const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Stay positive and happy. Work hard and don't give up hope. - Elon Musk",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "In the middle of difficulty lies opportunity. - Albert Einstein"
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  document.getElementById('quote').textContent = randomQuote;
}

document.getElementById('generateBtn').addEventListener('click', generateQuote);

// Generate a quote on initial load
generateQuote();
