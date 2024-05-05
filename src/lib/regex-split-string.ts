export default function regexSplitString(text: string) {
  const characters: string[] = [];
  const _rx = /[\s\S]/gu;

  let char;
  while ((char = _rx.exec(text)) !== null) {
    characters.push(char[0]);
  }

  return characters;
}
