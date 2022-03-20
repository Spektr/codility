class AnimalQueue {
    cats = new LinkedList();
    dogs = new LinkedList();
    all = new LinkedList();

    enqueue(animal) {
        if (animal instanceof Cat) {
            this.cats.add(animal);
        }

        if (animal instanceof Dog) {
            this.dogs.add(animal);
        }

        this.all.add(animal);
    }

    dequeueAny() {
        const animal = this.all.head;

        if (animal === null) {
            return null;
        }

        if (animal.value instanceof Cat) {
            this.cats.head = this.cats.head.next;
        }

        if (animal.value instanceof Dog) {
            this.dogs.head = this.dogs.head.next;
        }
        animal.head = animal.head.next;

        return animal.value;
    }

    dequeueCat() {
        if (this.cats.head === null) {
            return null;
        }
        const value = this.cats.head.value;
        this.shiftFromList(this.cats, value);
        this.shiftFromList(this.all, value);
        return value;
    }

    dequeueDog() {
        if (this.dogs.head === null) {
            return null;
        }
        const value = this.dogs.head.value;
        this.shiftFromList(this.dogs, value);
        this.shiftFromList(this.all, value);
        return value;
    }

    shiftFromList(list, value) {
        let prev = null;
        let cursor = list.head;
        while (cursor !== null && cursor.value !== value) {
            prev = cursor;
            cursor = cursor.next;
        }

        if (!cursor) {
            return;
        }

        if (prev === null) {
            list.head = cursor.next;
        } else {
            prev.next = cursor.next;
        }
    }
}

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Cat extends Animal {
}

class Dog extends Animal {
}

function main() {

    function solution(count) {

        // generate random list
        const queue = new AnimalQueue();
        for (let i = 0; i < count; i++) {
            queue.enqueue(Math.random() > 0.5 ? new Cat(`Cat(${i})`) : new Dog(`Dog(${i})`));
        }
        console.log(queue.all.toArray());

        return [
            queue.dequeueAny(), // get first any
            queue.dequeueAny(), // get second any
            queue.dequeueCat(), // get first cat
            queue.dequeueDog(), // get first dog
            queue.dequeueCat(), // get second cat
            queue.dequeueDog(), // get second dog
        ]
    }

    const testValue = helper.getTestValue(10);

    helper(function () {
        return JSON.stringify(solution(testValue));
    });
}
