import java.util.Scanner;
class Student{
	
@SuppressWarnings("resource")
public static void main(String[]args){
	
	Scanner sc = new Scanner(System.in);
    System.out.println("Enter int Number");
    int num1 = sc.nextInt();

    System.out.println("Enter Long Number");
		Long num2= sc.nextLong();
	
	System.out.println("Enter Float Number");
		Float num3 = sc.nextFloat();

	System.out.println("Enter Double Number");
		Double num4 = sc.nextDouble();
		
		System.out.println("Enter Short Number");
		Short num5 = sc.nextShort();
		
		System.out.println("Int is ="+ num1);
		System.out.println("Long is ="+ num2);
		System.out.println("Float is ="+ num3);
		System.out.println("Double is ="+ num4);
		System.out.println("Short is ="+ num5);
}
}