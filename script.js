class LinkedList{
    constructor(){
        this.head=null;
    }
    append(p){
        let newNode= new Node(); 
        newNode.value=p;
        if (this.head===null){
            this.head=newNode;
            return;
        }
       
        let current = this.head;
        while(current.next){
            current=current.next;
        }
        current.next=newNode;
    }

    prepend(p){
        let newNode=new Node();
        newNode.value=p;
        newNode.next= this.head;
        this.head=newNode;
    }
    size(){
        let count=0;
        let current = this.head;
        while(current){
            count++;
            current=current.next;
        }
        return count;
    }
    head(){
        if (head===null)
            return null;
        else{
        return this.head.value;
        }
    }
    tails(){
        let current=this.head;
        while(current && current.next){
            current=current.next;
        }
        return current.value;
    }
    at(p){
        let current=this.head;
        let count =0;
        while(current &&count<p ){
            current=current.next;
            count++;
        }
        return current.value;
    }
    pop(){
        let current=this.head;
        while(current && current.next){
            let q = current;
            current=current.next;
        }
        let q = null;
    }

    contains(p){
        let current = this.head;
        while(current){
            if (current.value === p){
                return true;
            }
            else {
                current=current.next;
            }
        }
        return false;
    }
    find(p){
        let current = this.head;
        let count =0;
        while(current){
            if (current.value ===p){
                return count;
            }
            count++;
            current=current.next;
        }
        return null;
    }
    insertBetween(value,index){
        if(index<0 || this.size()<index){
            return false;
        }
        if(index===0){
            this.prepend(value);
            return;
        }
        else{
            let count =0;
            let newNode = new Node();
            newNode.value=value;
            let current = this.head;
            let q = null;
            while (current && count <index){
                q=current;
                current=current.next;
                count++;
            }
            q.next = newNode;
            newNode.next = current;
        }
    }
    insertAt(value,index){
        if(index<0 || this.size()<index){
            return false;
        }
        if(index===0){
            this.head.value=value;
            return true;
        }
        else {
            let current=this.head;
            let count = 0;
            while(count<index && current){
                current=current.next;
                count++;     
            }
            current.value=value;
        }
    }
    removeAt(index){
        if(index<0 || this.size()<index){
            return false;
        }
        if(index===0){
            let current = this.head;
            this.head = current.next;
            current.next = null;
            return;
        }
        else {
            let count = 0;
            let current = this.head;
            let q = null;
            while(current && count < index){
                q = current;
                current = current.next;
                count++;
            } 
            q.next=current.next;
            current.next=null;

        }

    }
}

class Node{
    constructor(){
        this.value=null;
        this.next =null;
    }

}

const list = new LinkedList();
