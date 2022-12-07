class SectionRange {
  start: number;
  end: number;
  constructor(input: string) {
    const strings = input.split('-');
    this.start = parseInt(strings[0], 10);
    this.end = parseInt(strings[1], 10);
  }

  checkOverlap(sectionRange: SectionRange) {
    if (this.start >= sectionRange.start && this.end <= sectionRange.end)
      return true;
    if (this.start <= sectionRange.start && this.end >= sectionRange.end)
      return true;
    return false;
  }

  checkNotOverlap(sectionRange: SectionRange) {
    if (this.end < sectionRange.start) return true;
    if (this.start > sectionRange.end) return true;
    return false;
  }
}

export const solution = (input: string): number => {
  let count = 0;
  const lines = input.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const strings = lines[i].split(',');
    if (
      new SectionRange(strings[0]).checkOverlap(new SectionRange(strings[1]))
    ) {
      count++;
    }
  }
  return count;
};

export const solution2 = (input: string): number => {
  const lines = input.split('\n');
  let count = lines.length;
  for (let i = 0; i < lines.length; i++) {
    const strings = lines[i].split(',');
    if (
      new SectionRange(strings[0]).checkNotOverlap(new SectionRange(strings[1]))
    ) {
      count--;
    }
  }
  return count;
};
