/*WAP to calculate the area of Circle,Area and perimeter of rectangle,Area of Triangle */

import java.util.Scanner;

class PB145 {
    @SuppressWarnings("resource")
    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);
    System.out.println("Enter the number");
    int l = scanner.nextInt();
    
    System.out.println("Enter the number");
    int b = scanner.nextInt();

        int c,d;
        c=2*(l + b);
        d=l*b;
        System.out.println("Area="+c);
        System.out.println("Perimeter="+d);

        Double e;
        e=0.5*l*b;
        System.out.println("Area of triangle="+e);
    }
}
