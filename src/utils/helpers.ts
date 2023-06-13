export function extractHeaderText(inputString: string): string|null {
  const regex = /<h2>(.*?)<\/h2>/;
  const match = inputString.match(regex);
  return match ? match[1] : null;
}