import java.util.Scanner;

class PB197 {
    @SuppressWarnings("All")
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Number");
        int year = sc.nextInt();
        if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
            System.out.println("It is an leap year ");
        } else {
            System.out.println("It is not an leap year");
        }
    }
}
