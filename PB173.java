import java.util.Scanner;
class PB173 {
    @SuppressWarnings("resource")
    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the number");
        int num=scanner.nextInt();

        if(num%2==0)
        {
            System.out.println("it is an even number");
        }
        if(num%2!=0)
        {
            System.out.println("it ia an odd number");
        }
    }
    
}
