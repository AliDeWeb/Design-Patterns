interface IteratorInterface<T> {
  hasNext: () => boolean;
  next: () => T | null;
}

class IteratorArray implements IteratorInterface<number> {
  private index = 0;
  private array: number[];

  constructor(array: number[]) {
    this.array = array;
  }

  hasNext() {
    return this.index < this.array.length;
  }

  next() {
    return this.hasNext() ? this.array[this.index++] : null;
  }
}

class ObjectIterator
  implements IteratorInterface<{ key: string; value: number }>
{
  private index = 0;
  private keys: string[];
  private object: { [key: string]: number };

  constructor(object: { [key: string]: number }) {
    this.object = object;
    this.keys = Object.keys(object);
  }

  hasNext() {
    return this.index < this.keys.length;
  }

  next() {
    if (this.hasNext()) {
      const key = this.keys[this.index++];
      return { key, value: this.object[key] };
    }

    return null;
  }
}

(() => {
  const iteratorArray = new IteratorArray([1, 2, 3, 4, 5]);

  while (iteratorArray.hasNext()) {
    console.log(iteratorArray.next());
  }

  const objectIterator = new ObjectIterator({ john: 0, doe: 1, jane: 2 });

  while (objectIterator.hasNext()) {
    console.log(objectIterator.next());
  }
})();
