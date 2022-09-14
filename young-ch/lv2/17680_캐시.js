// https://school.programmers.co.kr/learn/courses/30/lessons/17680

class Node {
    constructor(city_in)
    {
        this.city = city_in;
        this.prev = null
        this.next = null;
    }
}

class LinkedList {
    constructor()
    {
        this.head = new Node("head");
        this.size = 0;
    }
    push(city_in)
    {
        let newNode = new Node(city_in);
        let current = this.head;
        while (current.next != null)
            current = current.next;
        current.next = newNode;
        newNode.prev = current;
        this.size++;
    }
    shift()
    {
        let newFirst = this.head.next.next;
        this.head.next = newFirst;
        if (newFirst !== null)
            newFirst.prev = this.head;
        this.size--;
    }
    find(city_in)
    {
        let current = this.head;
        while (current.city !== city_in)
        {
            current = current.next;
            if (current === null)
                break ;
        }
        return current;
    }
    delete(node)
    {
        let current = this.head;
        while (current !== node)
            current = current.next;
        let prevNode = current.prev;
        let nextNode = current.next;
        prevNode.next = nextNode;
        if (nextNode !== null)
            nextNode.prev = prevNode;
        this.size--;
    }
    print()
    {
        let current = this.head;
        while (current.next !== null)
        {
            console.log(current.city);
            current = current.next;
        }
    }
}

function solution(cacheSize, cities) {
    let ll = new LinkedList();
    let time = 0;
    if (cacheSize === 0)
        return 5 * cities.length;
    for (let city of cities)
    {
        city = city.toLowerCase();
        let finded = ll.find(city);
        if (finded !== null)
        {
            ll.delete(finded);
            ll.push(city);
            time += 1;
        }
        else
        {
            if (ll.size === cacheSize)
                ll.shift();
            ll.push(city);
            time += 5;
        }
    }
    return time;
}