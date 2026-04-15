/*write a program that display the area and perimeter of a circle that has a radius
of 5 using the following formula: perimeter=2*radius*pi area=radius*radius*pi */

import java.util.Scanner;

class PB144 {
@SuppressWarnings("resource")
public static void main(String[] args) { 

    Scanner scanner = new Scanner(System.in);
    System.out.println("Enter the number");
    int radius = scanner.nextInt();

    Double pi=3.14;

    System.out.println("perimeter="+2*radius*pi);
    System.out.println("Area="+radius*radius*pi);
}   
}
