export function capitalizeWords(text: string) {
  const words = text.split(" ");

  const capitalizedWords = words.map((word) => {
    if (word.length === 0) {
      return "";
    }

    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return capitalizedWord;
  });

  const capitalizedText = capitalizedWords.join(" ");

  return capitalizedText;
}
