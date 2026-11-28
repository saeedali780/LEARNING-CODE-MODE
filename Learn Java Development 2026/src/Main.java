import  java.util.Scanner;
public class Main {
    public static void  main(String[] args){
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your Name: ");
        String input  = scanner.nextLine();
        System.out.println("The output is "+ input);

        System.out.println("Enter an Integer: ");
        int inputNum =  scanner.nextInt();
        System.out.println("User has entered  this num : " + inputNum);

        System.out.print("Enter Gpa: ");
        Double gpa = scanner.nextDouble();
        System.out.println(gpa);
        System.out.print("Are you student? (true/false): ");
        boolean isStudent = scanner.nextBoolean();

        System.out.println(isStudent);




        scanner.close();
    }
}
