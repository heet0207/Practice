/*Write a program that prompts the user to enter two points (x1, y1) and (x2, y2) and
displays their distance between them. The formula for computing the distance is
√(x2 - x1)2 + (y2 - y1)2. */
import java.util.Scanner;

class PB153 {
    
@SuppressWarnings({ "resource" })
public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);
    System.out.println("Enter The X1");
    float X1 = scanner.nextFloat();
    
    System.out.println("Enter The Y1");
    float Y1 = scanner.nextFloat();

    System.out.println("Enter The X2");
    float X2 = scanner.nextFloat();

    System.out.println("Enter The Y2");
    float Y2 = scanner.nextFloat();

    Double Distance = Math.sqrt(Math.pow(X2 - X1,2) + Math.pow(Y2 - Y1,2));

    System.out.println("Distance"+Distance);
    
}

}
