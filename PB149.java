/*Write a program that reads a Celsius degree in a double value from the console,
then converts it to Fahrenheit and displays the result. The formula for the
conversion is as follows: fahrenheit = (9 / 5) * celsius + 32. */

import java.util.Scanner;
class PB149 {
    @SuppressWarnings("resource")
    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the Temperature in celsius");
        Double Celsius = scanner.nextDouble();

        Double Fehrenheit = (9.0/5.0)*Celsius + 32;

        System.out.println(Celsius+ " Celsius is equal to " +Fehrenheit+ "Fehrenheit");
    }
}
