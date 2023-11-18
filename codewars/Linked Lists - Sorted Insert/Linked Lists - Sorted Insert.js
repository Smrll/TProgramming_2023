function Node(data) {
    this.data = data;
    this.next = null;
  }
  
function sortedInsert(head, data) {
    const newNode = new Node(data);
    if (head === null || data < head.data) {
      newNode.next = head;
      return newNode;
    }
    let current = head;
    while (current.next !== null && data >= current.next.data) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    return head;
}
  
function buildLinkedList(arr) {
    let head = null;
    let tail = null;
    for (const data of arr) {
      const newNode = new Node(data);
      if (head === null) {
        head = newNode;
        tail = newNode;
      } else {
        tail.next = newNode;
        tail = newNode;
      }
    }
    return head;
}
function printLinkedList(head) {
    const result = [];
    let current = head;
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    return result.join(' -> ');
}