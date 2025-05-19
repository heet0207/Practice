// WAP to print Multiplication Table Of Any Number

import java.util.Scanner;

class F5 {
    @SuppressWarnings("resource")
    public static void main(String[] args) {
        
    Scanner scanner = new Scanner(System.in);
    System.out.println("Enter The Number");
    int N = scanner.nextInt();
    
    for(int i = 1; i<=10; i++)
    {
        System.out.println(N+" * " +i+ " = " +(N*i));
    }

    }

}
