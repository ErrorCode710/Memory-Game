export default function randomCard(characters) {
  const shuffled = [...characters].sort(() => Math.random() - 0.5);
  const result = shuffled.slice(0, 5);
  return result;
}
