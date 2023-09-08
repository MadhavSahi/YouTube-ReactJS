// Function to generate a random name
export function generateRandomName() {
  const names = [
    "KL Rahul",
    "M Shami",
    "J Bumrah",
    "Rohit Sharma",
    "R Jadeja",
    "MS Dhoni",
    "Virat Kohli",
    // "Madhav Sahi",
    "Shreyas Iyyer",
    "Kuldeep Yadav",
    "Sachin Tendulkar",
    "AB Develliers",
    "Chris Gayle",
    "Andre Russel",
    "Rashid Khan",
    "Jos Butler",
    "Ben Stokes",
    "J Anderson",
    "Tim Southee",
    "N Pooran",
    "Steve Smith",
    "David Warner",
    "M Marsh",
    "Mitchel Starc",
    "Glen Maxwell",
    "Shakib Hasan",
    "Babar Azam",
    "Dale Steyn",
    "Rinku Singh",
  ];
  return names[Math.floor(Math.random() * names.length)];
}

// Function to generate a random text
export function generateRandomText() {
  const texts = [
    "Cricket is a bat-and-ball game played between two teams of eleven players.",
    "The sport is known for its rich history and tradition.",
    "Cricket matches can last anywhere from a few hours to several days.",
    "Batsmen score runs by hitting the ball and running between the wickets.",
    "Bowlers try to get the batsmen out by various means, including bowling them out and catching the ball.",
    "Cricket is especially popular in countries like India, England, Australia, and Pakistan.",
    "The Indian Premier League (IPL) is one of the most popular T20 cricket leagues in the world.",
    "Cricket has different formats, including Test cricket, One-Day Internationals (ODIs), and Twenty20 (T20) matches.",
    "Legendary cricketers like Sachin Tendulkar, Sir Don Bradman, and Vivian Richards are celebrated in the cricketing world.",
    "Cricket fans are known for their passion and dedication to the sport.",
    "In 2011, India won the ICC Cricket World Cup under the captaincy of MS Dhoni.",
    "Sachin Tendulkar, often called the 'Little Master,' is one of the greatest cricketers in history.",
    "Virat Kohli is known for his aggressive batting style and has broken numerous records in international cricket.",
    "Rohit Sharma is the only player to have scored three double centuries in One-Day Internationals.",
    "The famous Indian spin duo, Anil Kumble and Harbhajan Singh, have taken a combined total of over 1,000 Test wickets.",
    "The Indian cricket team achieved the No. 1 ranking in Test cricket for the first time in 2009.",
    "Yuvraj Singh's heroic performance in the 2007 ICC World Twenty20, including six sixes in an over, is etched in cricketing history.",
    "India's historic win at the 1983 Cricket World Cup, led by Kapil Dev, marked a turning point in Indian cricket.",
    "In 2020, Rohit Sharma became the first cricketer to score five centuries in a single Cricket World Cup.",
    "Jasprit Bumrah is known for his lethal yorkers and is among the world's top fast bowlers.",
    "Cricket in the 21st century witnessed the rise of IPL, which revolutionized the sport.",
  ];
  return texts[Math.floor(Math.random() * texts.length)];
}

// Function to generate a random comment object
// function generateRandomComment() {
//   const name = generateRandomName();
//   const text = generateRandomText();
//   return { name, text };
// }
export function getRandomInt() {
  return Math.floor(Math.random() * 50);
}

// export const getRandomInt,generateRandomName,generateRandomText;
