// Connect Wallet and Register for Airdrop
async function connectWalle() {
  // Check if the Solana wallet is installed (e.g., Phantom)
  if (window.solana && window.solana.isPhantom) {
    try {
      // Request the user's wallet address
      const response = await window.solana.connect();
      const walletAddress = response.publicKey.toString();
      console.log("Wallet Connected:", walletAddress);

      // Update the UI to show connection status
      document.getElementById("wallet-status").innerHTML = `
        <p>Wallet connected: ${walletAddress}</p>
        <button onclick="registerForAirdrop('${walletAddress}')">Register for Airdrop</button>
      `;
    } catch (err) {
      console.error("Connection Error:", err);
      alert("Failed to connect wallet. Please try again.");
    }
  } else {
    alert("Please install Phantom Wallet or another Solana wallet.");
  }
}

// Register User for Airdrop
function registerForAirdrop(walletAddress) {
  // Here we would typically save the wallet address to a database or server
  // For now, we just simulate the registration by showing a success message

  document.getElementById("wallet-status").innerHTML = `
    <p>Successfully registered for the Airdrop with address: ${walletAddress}</p>
    <p>Check your wallet for the airdrop tokens soon!</p>
  `;

  // Optionally, store the wallet address locally or send it to a server
  localStorage.setItem('airdrop_wallet', walletAddress);

  // You could also integrate API calls to store this info in a back-end server
  // e.g., registerAirdrop(walletAddress);
}

// Interactive Graph for Token Performance (Fake Data)
const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [{
      label: 'Turbos Token Price',
      data: [1, 3, 5, 4, 7], // Fake price data for demo
      borderColor: '#ffcc00',
      tension: 0.1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Turbos Token Price Over Time',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `Price: $${tooltipItem.raw}`;
          }
        }
      }
    }
  }
});

// Crypto Quiz Generator (Randomized)
const quizQuestions = [
  { question: "What is Bitcoin's total supply?", answer: "21 million" },
  { question: "What is the current Ethereum upgrade?", answer: "Ethereum 2.0" },
  { question: "Who created Solana?", answer: "Anatoly Yakovenko" }
];

function generateQuiz() {
  const randomQuestion = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = `
    <p>${randomQuestion.question}</p>
    <input type="text" id="answer" placeholder="Your Answer">
    <button onclick="checkAnswer('${randomQuestion.answer}')">Submit</button>
  `;
}

function checkAnswer(correctAnswer) {
  const userAnswer = document.getElementById('answer').value;
  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    alert("Correct!");
  } else {
    alert("Incorrect. Try again.");
  }
}
