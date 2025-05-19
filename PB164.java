/* Write a program to find out mamximum & minimum number of two numbers using
Math function. */

import java.util.Scanner;

class PB164 {
    
    @SuppressWarnings("resource")
    public static void main(String[] args) {
        
    Scanner scanner = new Scanner(System.in);
        System.out.println("Enter The X1");
        Double X1 = scanner.nextDouble();

        System.out.println("Enter The X2");
        Double X2 = scanner.nextDouble();

        Double MAX = Math.max(X1 , X2);
        Double MIN = Math.min(X1 , X2);

        System.out.println("MAX Value is ="+MAX);
        System.out.println("MIN Value is ="+MIN);


    }
}
