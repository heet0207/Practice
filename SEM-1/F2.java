//WAP TO PRINT 1 TO N NUMBER USING FOR LOOP

import java.util.Scanner;
class F2 {
    @SuppressWarnings("resource")
    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter The Number");
        int N = scanner.nextInt();

        for(int i = 1; i <= N;i++)
            {
                System.out.println(i);
            }

    }
}
