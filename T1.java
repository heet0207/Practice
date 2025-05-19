import java.util.Scanner;
class T1 {
    @SuppressWarnings("resource")
    public static void main(String args[])
    { 
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the Maths Marks");
        int Maths = scanner.nextInt();

        System.out.println("Enter the Science Marks");
        int Science = scanner.nextInt();

        System.out.println("Enter the English Marks");
        int English = scanner.nextInt();

        int TotalMarks=Maths+Science+English;
        int AverageScores=(TotalMarks/3)*100;

        if(AverageScores >= 90)
        {
            System.out.println("Excellent");
        }



    }
}   