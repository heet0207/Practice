/*Assume a runner runs 15 kilometers in 50 minutes and 30 seconds. Write a
program that displays the average speed in miles per hour. (Note that 1 mile is 1.6
kilometers.) */

import java.util.Scanner;

class PB152{

@SuppressWarnings({ "resource" })
public static void main(String[] args) {
    
Scanner scanner = new Scanner(System.in);


Double KTM = 1.6;

System.out.println("Enter The Distance In Kilometer");
Double DistanceKM = scanner.nextDouble();

System.out.println("Enter The Time In Minutes");
Double Minutes = scanner.nextDouble();

System.out.println("Enter The Time In Seconds");
Double Seconds = scanner.nextDouble();

Double TIH = Minutes/60 + Seconds/3600;

Double DMS = DistanceKM / KTM;

Double AverageSpeed = DMS/TIH;

System.out.println("The AverageSpeed in miles per hour"+AverageSpeed);





}

}