/*Write a program that prompts the user to enter X and Y to find out XY using Math function. */

import java.util.Scanner;

class PB165 {
    @SuppressWarnings("resource")
    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter The X");
        Double X = scanner.nextDouble();

        System.out.println("Enter The Y");
        Double Y = scanner.nextDouble();

        Double Result = Math.pow(X , Y);

        System.out.println("The Rusult of " +X+ " Raised To The Power of " +Y+ " is = " +Result);
    }
}
