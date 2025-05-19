//WAP TO PRINT N TO 1 NUMBER USING FOR LOOP

import java.util.Scanner;

class F3 {
    @SuppressWarnings("resource")
    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter The Number");
        int N = scanner.nextInt();

        for(int i = N; i>0; i--)
        {
            System.out.println(i);
        }


    }
}


