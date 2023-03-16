import { formatTag } from './formatTag';
import { splitTags } from './splitTags';

export const startCalculate = (upperCase: boolean) => {
  const tags = new Set<string>();

  return {
    addTag(tag: string) {
      tags.add(formatTag(tag, upperCase));
      return this;
    },
    removeTag(tag: string) {
      tags.delete(formatTag(tag, upperCase));
      return this;
    },
    addTags(tags: string) {
      splitTags(tags).forEach(this.addTag);
      return this;
    },
    removeTags(tags: string) {
      splitTags(tags).forEach(this.removeTag);
      return this;
    },
    getResult() {
      return Array.from(tags);
    },
  };
};
