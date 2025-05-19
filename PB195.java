import java.util.Scanner;
class PB195 {
    
@SuppressWarnings("resource")
public static void main(String[] args) {
    
    Scanner scanner = new Scanner(System.in);
    System.out.println("Enter the Number");
    int num = scanner.nextInt();

    if(num%5==0)
    {
        System.out.println("it is Divisible");
    }
    else
    {
        System.out.println("it is not divisible");
    }

}

}
