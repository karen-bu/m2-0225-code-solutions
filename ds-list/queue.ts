export type Node<T> = {
  data: T;
  priority: number;
};

export class PriorityQueue<T = unknown> {
  nodes: Node<T>[] = [];

  /**
   * Adds a value to the queue with given priority.
   * Higher priority values are dequeued first.
   * If priority already exists, first one in is dequeued first.
   */
  enqueue(data: T, priority: number): void {
    const index = this.nodes.findIndex((n) => n.priority < priority);
    if (index >= 0) {
      this.nodes.splice(index, 0, { data, priority });
    } else {
      this.nodes.push({ data, priority });
    }
  }

  /**
   * Removes and returns highest priority value in the queue.
   * Returns `undefined` if queue is empty.
   */
  dequeue(): T | undefined {
    return this.nodes.shift()?.data;
  }

  /**
   * Returns highest priority value in the queue without removing it.
   * Returns `undefined` if queue is empty.
   */
  peek(): T | undefined {
    if (this.nodes.length === 0) {
      return undefined;
    } else return this.nodes[0].data;
  }
}
