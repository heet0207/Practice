/*WAP to swap two numbers using temporary variable.  */

class PB150 {
    public static void main(String[] args) {
        
        int a = 10;
        int b = 20;

        System.out.println("Before swapping:");
        System.out.println("First number: " + a);
        System.out.println("Second number: " + b);

        int temp = a;
        a = b; 
        b = temp;

        System.out.println("After swapping:");
        System.out.println("First number: " + a);
        System.out.println("Second number: " + b);

    }
}
