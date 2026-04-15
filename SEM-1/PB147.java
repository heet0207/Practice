/*WAP to enter three Subject marks,and Calculate total,percentage of student and Display the same in proper Formet */
import java.util.Scanner;
class PB147 {
    @SuppressWarnings("resource")
    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the Subject1 Marks");
        int Sub1 = scanner.nextInt();

        System.out.println("Enter the Subject2 Marks");
        int Sub2 = scanner.nextInt();

        System.out.println("Enter the Subject3 Marks");
        int Sub3 = scanner.nextInt();

        int Total = Sub1+Sub2+Sub3;
        Double Percentage = (Total/ 3.0);

        System.out.println("Subject1="+Sub1);
        System.out.println("Subject2="+Sub2);
        System.out.println("Subject3="+Sub3);
        System.out.println("Total="+Total);
        System.out.println("Percentage="+Percentage);
    }
}
