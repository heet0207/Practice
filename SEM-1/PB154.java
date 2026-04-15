/*Write a program that prompts the user to enter a two numbers using commandline
argument & find maximum number using ternary operator */

import java.util.Scanner;
class PB154 {
    
    @SuppressWarnings("resource")
    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the F1 Number");
        Double F1 = scanner.nextDouble();

        System.out.println("Enter the F2 Number");
        Double F2 = scanner.nextDouble();


        Double MAX = (F1 > F2) ? F1 : F2;

        System.out.println("maximum number using ternary operator"+MAX);


    }
}
