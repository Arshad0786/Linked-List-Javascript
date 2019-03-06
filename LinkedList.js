function List() {
    this.head = null;
    this.tail = null;
    
    this.AddHead = function(value){
        this.tail = this.head;
        this.head = MakeNode(value);
    }
    
    return this;
}

MakeNode = function (value = null) {
    this.value = value;
    this.next = null;
    return this
}

PrintList = function (List) {
    node = List.head;
    do {
        console.log(node.value);
        node = node.next;
    }
    while (node.next != null);
    return 0;
}

var L = new List();
L.AddHead(5);
L.AddHead(10);
L.AddHead(15);
L.AddHead(20);
PrintList(L);