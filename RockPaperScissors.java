import java.util.Scanner;

public class RockPaperScissors {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] options = {"Rock", "Paper", "Scissors"};
        
        while (true) {
            System.out.println("Enter your choice (Rock, Paper, Scissors) or 'exit' to quit:");
            String userChoice = scanner.nextLine();

            if (userChoice.equalsIgnoreCase("exit")) {
                System.out.println("Thanks for playing!");
                break;
            }

            // Validate user input
            boolean validChoice = false;
            for (String option : options) {
                if (userChoice.equalsIgnoreCase(option)) {
                    validChoice = true;
                    break;
                }
            }

            if (!validChoice) {
                System.out.println("Invalid choice. Please try again.");
                continue;
            }   

            // Computer's choice using Math.random()
            int computerIndex = (int) (Math.random() * 3);
            String computerChoice = options[computerIndex];

            System.out.println("Computer chose: " + computerChoice);

            // Determine the winner
            if (userChoice.equalsIgnoreCase(computerChoice)) {
                System.out.println("It's a tie!");
            } else if ((userChoice.equalsIgnoreCase("Rock") && computerChoice.equals("Scissors")) ||
                       (userChoice.equalsIgnoreCase("Paper") && computerChoice.equals("Rock")) ||
                       (userChoice.equalsIgnoreCase("Scissors") && computerChoice.equals("Paper"))) {
                System.out.println("You win!");
            } else {
                System.out.println("You lose!");
            }
        }

        scanner.close();
    }
}