//WAP to check It is Prime Number Or not zusing for Loop

import java.util.Scanner;

class F4 {
    
@SuppressWarnings("resource")
public static void main(String[] args) {
    
    Scanner scanner = new Scanner(System.in);
    System.out.println("Enter The Number");
    int N = scanner.nextInt();
    int Count=0;
for(int i = 1;i <= N;i++)
{
    if(N % i ==0)
{
    Count++;
}
}
if(Count==2)
{
    System.out.println("It Is Prime Number");
}
else
{
    System.out.println("It Is Not Prime Number");
}
}
}
