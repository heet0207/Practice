/*WAP to convert days into months and days. */
import java.util.Scanner;
class PB148 {
    @SuppressWarnings("resource")
    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the Number of days");
        int TotalDays = scanner.nextInt();

        int months = TotalDays/30;
        int Days = TotalDays%30;

        System.out.println(TotalDays+"  Days Approximate:  "+months+" Month and "+Days+" Days");

    }
}
