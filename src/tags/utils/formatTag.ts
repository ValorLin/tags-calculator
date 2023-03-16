export const formatTag = (tag: string, upperCase: boolean) => {
  let formattedTag = tag.trim();
  if (upperCase) {
    formattedTag = formattedTag.toUpperCase();
  }
  return formattedTag;
};
