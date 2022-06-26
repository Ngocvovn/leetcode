export class BinaryHeap<T> {
  private elements: T[];
  private valueFunction: (element: T) => number;

  constructor(valueFunction: (element: T) => number) {
    this.elements = [];
    this.valueFunction = valueFunction;
  }

  public getElements(): T[] {
    return this.elements;
  }

  public insert(element: T): void {
    this.elements.push(element);
    this.bubbleUp(this.elements.length - 1);
  }

  private bubbleUp(n: number): void {
    const value = this.valueFunction(this.elements[n]);
    while (n > 0) {
      const parentIndex = (n + 1) / 2 - 1;
      const parent = this.elements[parentIndex];
      if (this.valueFunction(parent) <= value) {
        break;
      }
      this.elements[parentIndex] = this.elements[n];
      this.elements[n] = parent;
      n = parentIndex;
    }
  }

  private sinkDown(n: number): void {
    const length = this.elements.length;
    const element = this.elements[n];
    const value = this.valueFunction(element);
    while (true) {
      let swap = -1;
      const leftChildIndex = 2 * n + 1;
      const rightChildIndex = 2 * n + 2;
      if (leftChildIndex < length) {
        if (value > this.valueFunction(this.elements[leftChildIndex])) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        if (value > this.valueFunction(this.elements[rightChildIndex])) {
          if (swap === -1) {
            swap = rightChildIndex;
          } else {
            swap =
              this.valueFunction(this.elements[swap]) <
              this.valueFunction(this.elements[rightChildIndex])
                ? swap
                : rightChildIndex;
          }
        }

        if (swap === -1) {
          break;
        }

        this.elements[n] = this.elements[swap];
        this.elements[swap] = element;
        n = swap;
      }
    }
  }
}
