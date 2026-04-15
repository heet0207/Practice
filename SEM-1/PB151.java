/*WAP to swap two numbers without using temporary variable. */

class PB151 {
    
    public static void main(String[] args) {
        
        int a = 10;
        int b = 20;

        System.out.println("Before swapping:");
        System.out.println("First number: " + a);
        System.out.println("Second number: " + b);


        a = a + b;
        b = a - b;
        a = a - b;

        System.out.println("after swapping:");
        System.out.println("First number: " + a);
        System.out.println("Second number: " + b);


        
    }
}
