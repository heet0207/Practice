import java.util.*;
@SuppressWarnings("unused")
class CLL {
      public static void main(String[] args) {
        Neel cll = new Neel();
        Scanner sc = new Scanner(System.in);
        while(true) {
            System.out.println("1. Insert First\n2. Insert Last\n3. Insert Before\n4. Insert After\n5. Search\n6. Delete First\n7. Delete Last\n8. Delete Particular\n9. Display\n10. Reverse\n11. Sort\n12. Exit");
            System.out.print("Enter your choice: ");
            int choice = sc.nextInt();
            switch(choice) {
                case 1:
                    System.out.print("Enter data to insert at first: ");
                    cll.insertFirst(sc.nextInt());
                    break;
                case 2:
                    System.out.print("Enter data to insert at last: ");
                    cll.insertLast(sc.nextInt());
                    break;
                case 3:
                    System.out.println("Enter Value ");
                    int val = sc.nextInt();
                    System.out.print("Enter data to insert before: ");
                    int t = sc.nextInt();
                    
                    cll.insertBefore(val,t);
                    break;
                case 4:
                    System.out.print("Enter data to insert after: ");
                    cll.insertAfter(sc.nextInt());
                    break;
                case 5:
                    System.out.print("Enter data to search: ");
                    cll.search(sc.nextInt());
                    break;
                case 6:
                    cll.deleteFirst();
                    break;
                case 7:
                    cll.deleteLast();
                    break;
                case 8:
                    cll.deleteParticular();
                    break;
                case 9:
                    cll.display();
                    break;
                case 10:
                    cll.reverse();
                    break;
                case 11:
                    cll.sort();
                    break;
                case 12:
                    System.exit(0);
                default:
                    System.out.println("Invalid choice");
            }
        }
    }
}
@SuppressWarnings({"All", "unused"})
class Neel{
@SuppressWarnings("All")
    class Node{
        int Data;
        Node Next;

        Node(int d){
            Data = d;
            Next = null;
        }
    }
    Node Head = null;
    void insertFirst(int d){
        Node n1 = new Node(d);
        if(Head ==null){
            Head = n1;
            n1.Next = n1; // Point to itself
        }
        else{
            Node temp = Head;
            n1.Next = Head; // New node points to current head
            while(temp.Next != Head) {
                temp = temp.Next; // Traverse to the last node
            }
            temp.Next = n1;
            Head = n1; // Update head to new node
        }
    }

    void insertLast(int d){
        Node n1 = new Node(d);
        if(Head == null){
            Head = n1;
            n1.Next = n1; // Point to itself
        }
        else{
            Node temp = Head;
            while(temp.Next != Head) {
                temp = temp.Next; // Traverse to the last node
            }
            temp.Next = n1; // Last node points to new node
            n1.Next = Head; // New node points to head
        }
    }

    void insertBefore(int d,int t){
            if(Head == null){
                System.out.println("List is empty");
                return;
            }
        Node n1 = new Node(d);
        if(Head.Data == d) {
            insertFirst(d);
            return;
        }
        Node temp = Head;
        while(temp.Next != Head && temp.Next.Data != d) {
            temp = temp.Next; // Traverse to find the node before the one with data d
        }
        if(temp.Next == Head) {
            System.out.println("Node with data " + d + " not found");
            return;
        }
        n1.Next = temp.Next; // New node points to the next node
        temp.Next = n1; // Previous node points to new node
    }

    void insertAfter(int u){
            if(Head == null){
                System.out.println("List is empty");
                return;
            }
        Node n1 = new Node(u);
        Node temp = Head;
        while(temp.Next != Head && temp.Data != u) {
            temp = temp.Next; // Traverse to find the node with data u
        }
        if(temp.Data != u) {
            System.out.println("Node with data " + u + " not found");
            return;
        }
        n1.Next = temp.Next; // New node points to the next node
        temp.Next = n1; // Current node points to new node
    }

    void search(int d){
        if(Head == null){
            System.out.println("List is empty");
            return;
        }
        Node temp = Head;
        do {
            if(temp.Data == d) {
                System.out.println("Node with data " + d + " found");
                return;
            }
            temp = temp.Next; // Traverse to the next node
        } while(temp != Head);
        System.out.println("Node with data " + d + " not found");
    }

    void deleteFirst(){
        if(Head == null){
            System.out.println("List is empty");
            return;
        }
        if(Head.Next == Head) {
            Head = null; // If only one node, set head to null
            return;
        }
        Node temp = Head;
        while(temp.Next != Head) {
            temp = temp.Next; // Traverse to the last node
        }
        temp.Next = Head.Next; // Last node points to second node
        Head = Head.Next; // Update head to second node
    }

    void deleteLast(){
        if(Head == null){
            System.out.println("List is empty");
            return;
        }
        if(Head.Next == Head) {
            Head = null; // If only one node, set head to null
            return;
        }
        Node temp = Head;
        while(temp.Next.Next != Head) {
            temp = temp.Next; // Traverse to the second last node
        }
        temp.Next = Head; // Second last node points to head
    }

    void deleteParticular(){
        if(Head == null){
            System.out.println("List is empty");
            return;
        }
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the data to delete: ");
        int d = sc.nextInt();
        if(Head.Data == d) {
            deleteFirst(); // If head node is to be deleted
            return;
        }
        Node temp = Head;
        while(temp.Next != Head && temp.Next.Data != d) {
            temp = temp.Next; // Traverse to find the node to delete
        }
        if(temp.Next == Head) {
            System.out.println("Node with data " + d + " not found");
            return;
        }
        if(temp.Next.Next == Head) {
            temp.Next = Head; // If last node is to be deleted
        } else {
            temp.Next = temp.Next.Next; // Bypass the node to delete
        }
        System.out.println("Node with data " + d + " deleted");
    }

    void display(){
        if(Head == null){
            System.out.println("List is empty");
            return;
        }
        Node temp = Head;
        do {
            System.out.print(temp.Data + " ");
            temp = temp.Next; // Traverse to the next node
        } while(temp != Head);
        System.out.println();
    }
    void reverse(){
        if(Head == null){
            System.out.println("List is empty");
            return;
        }
        Node prev = null, current = Head, next = null;
        do {
            next = current.Next; // Store next node
            current.Next = prev; // Reverse the link
            prev = current; // Move prev to current
            current = next; // Move to next node
        } while(current != Head);
        Head.Next = prev; // Point head's next to new head
        Head = prev; // Update head to new head
    }
    void sort(){
        if(Head == null || Head.Next == Head) {
            System.out.println("List is empty or has only one node");
            return;
        }
        Node current = Head, index = null;
        int temp;
        do {
            index = current.Next; // Start from the next node
            while(index != Head) {
                if(current.Data > index.Data) {
                    temp = current.Data; // Swap data
                    current.Data = index.Data;
                    index.Data = temp;
                }
                index = index.Next; // Move to the next node
            }
            current = current.Next; // Move to the next node
        } while(current.Next != Head);
    }
}