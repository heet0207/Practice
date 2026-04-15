/*WAP that reads two nos. From key Board and gives their addition,subtraction,Multiplication,division and modulo */
import java.util.Scanner;
class PB146 {
    public static void main(String[] args) {
        
    @SuppressWarnings("resource")
    Scanner scanner = new Scanner(System.in);
    System.out.println("Enter the First Number");
    Double num1=scanner.nextDouble();

    System.out.println("Enter the Second Number");
    Double num2=scanner.nextDouble();

        Double Addition= num1+num2;
        Double subtraction= num1-num2;
        Double Multiplication=num1*num2;
        Double division= num1/num2;
        Double modulo= num1%num2;
        
        System.out.println("Addition is:"+Addition);
        System.out.println("Subtraction is:"+ subtraction);
        System.out.println("Multiplication is:"+Multiplication);
        System.out.println("Division is:"+division);
        System.out.println("Modulo is:"+modulo);


    }
}
