let moods = [];

const moodScores = {
  happy: 5,
  excited: 4,
  tired: 3,
  anxious: 2,
  sad: 1
};

const moodQuotes = {
  happy: "Keep smiling and sharing joy!",
  excited: "Energy is contagious. Spread it!",
  tired: "Rest is productive. Recharge.",
  anxious: "Breathe. You’re doing your best.",
  sad: "It’s okay to not be okay. Tomorrow is a new day."
};

function addMood() {
  const input = document.getElementById("moodInput");
  const moodText = input.value;

  if (!moodText) {
    alert("Please select a mood!");
    return;
  }

  const date = new Date().toLocaleDateString();
  const moodEntry = {
    mood: moodText,
    date: date,
    score: moodScores[moodText]
  };

  moods.push(moodEntry);
  input.value = "";
  displayMoods();
  showQuote(moodText);
}

function displayMoods() {
  const moodListDiv = document.getElementById("moodList");
  moodListDiv.innerHTML = "<strong>Mood Entries:</strong><br>";

  moods.forEach(entry => {
    moodListDiv.innerHTML += `• ${entry.date}: ${entry.mood} (${entry.score})<br>`;
  });
}

function analyzeMood() {
  if (moods.length === 0) {
    alert("No moods to analyze!");
    return;
  }

  const frequency = {};
  let totalScore = 0;

  moods.forEach(entry => {
    frequency[entry.mood] = (frequency[entry.mood] || 0) + 1;
    totalScore += entry.score;
  });

  let mostFrequent = "";
  let max = 0;
  for (const mood in frequency) {
    if (frequency[mood] > max) {
      mostFrequent = mood;
      max = frequency[mood];
    }
  }

  const average = (totalScore / moods.length).toFixed(2);
  const resultDiv = document.getElementById("analysisResult");
  resultDiv.innerHTML = `
    <strong>Most frequent mood:</strong> ${mostFrequent}<br>
    <strong>Average mood score:</strong> ${average}
  `;
}

function showQuote(mood) {
  const quoteBox = document.getElementById("quoteBox");
  quoteBox.innerHTML = `<em>"${moodQuotes[mood]}"</em>`;
}
