export function splitTags(tags: string) {
  return tags
    .split('\n')
    .flatMap((line) => line.split(','))
    .filter((tag) => tag !== '');
}
