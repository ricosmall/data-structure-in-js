var doublyLinkedList = function () {

    var Node = function (element) {

        this.element = element;
        this.next = null;
        this.prev = null;
    };

    var length = 0;
    var head = null;
    var tail = null;

    this.insert = function (position, element) {

        if (position >= 0 && position <= length) {
            var node = new Node(element),
                current = head,
                previous,
                index = 0;

            if (position === 0) {

                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if (position === length) {

                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {

                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                node.next = current;
                previous.next = node;

                current.prev = node;
                node.prev = previous;
            }

            length++;

            return true;
        } else {
            return false;
        }
    };

    this.removeAt = function (position) {

        if (position > -1 && position < length) {

            var current = head,
                previous,
                index = 0;

            if (position === 0) {

                head = current.next;

                if (length === 1) {
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (position === length - 1) {

                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
                current.next.prev = previous;
            }

            length--;

            return current.element;
        } else {
            return null;
        }
    };

    this.append = function (element) {

        var node = new Node(element),
            current;

        if (head === null) {
            head = node;
            tail = node;
        } else {

            tail.next = node;
            node.prev = tail;
            tail = node;
        }

        length++;
    };

    this.remove = function (element) {

        var index = this.indexOf(element);
        return this.removeAt(index);
    };

    this.indexOf = function (element) {

        var current = head,
            index = -1;

        if (element == current.element) {
            return 0;
        }

        index++;

        while (current.next) {

            if (element == current.element) {
                return index;
            }

            current = current.next;
            index++;
        }

        if (element == current.element) {
            return index;
        }

        return -1;
    };

    this.isEmpty = function () {
        return length === 0;
    };

    this.size = function () {
        return length;
    };

    this.toString = function () {

        var current = head,
            s = current ? current.element : '';

        while (current && current.next) {
            current = current.next;
            s += ', ' + current.element;
        }

        return s;
    };

    this.inverseToString = function () {

        var current = tail,
            s = current ? current.element : '';

        while (current && current.prev) {
            current = current.prev;
            s += ', ' + current.element;
        }

        return s;
    };

    this.print = function () {
        console.log(this.toString());
    };

    this.printInverse = function () {
        console.log(this.inverseToString());
    };

    this.getHead = function () {
        return head;
    };

    this.getTail = function () {
        return tail;
    };
};
