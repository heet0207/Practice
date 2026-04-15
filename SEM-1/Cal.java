import java.util.Scanner;

@SuppressWarnings("unused")
class mo{
    @SuppressWarnings({"resource", "UnnecessaryContinue"})
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
            Casio OB = new Casio();
            boolean running = true;
    while(running){
			 System.out.println("1 For +, 2 For - , 3 For  * , 4 For / , 5 For Exit :");
                
    System.out.println("Choose Number Between 1 -- 5 :");
    int Choice  = scanner.nextInt();
    if(Choice < 5 && Choice > 0){
    System.out.println("Enter Number a :");
        int a = scanner.nextInt();
                    System.out.println("Enter Number b :");
        int b = scanner.nextInt();
                    
    switch(Choice){
    case 1 -> System.out.println(OB.sum(a,b));
    case 2 -> System.out.println(OB.Subtraction(a,b));
    case 3 -> System.out.println(OB.Multipication(a,b));
    case 4 -> System.out.println(OB.Division(a,b));
}
    }
    else if(Choice == 5){
    System.out.println("Exit");
        running = false;
    }
    else
    {
    System.out.println("Enter  Valid  Number ");
    continue;
    }
    }
    }
    }


class Casio{
	double sum(double a  ,double b){
	double Result = a+b;
	return Result;
	}
	double Subtraction(double a  ,double b){
	double Result = a-b;
	return Result;
	}
	double Multipication(double a  ,double b){
	double Result = a*b;
	return Result;
	}
	double Division(double a  ,double b){
	double Result = a/b;
	return Result;
	}
}