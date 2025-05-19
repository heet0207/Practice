import java.util.Scanner;
class PB176 {

    @SuppressWarnings("resource")
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number");
        int num =sc.nextInt();

        if(num>0)
        {
            System.out.println("it is an positive");
        }

        if(num==0)
        {
            System.out.println("it is an Zero");
        }

        if(num<0)
        {
            System.out.println("it is an negative");
        }
    }
    
}
