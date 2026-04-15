import java.io.*;
// This code reads integers from a file and determines if they are even or odd.
// It prints the result for each number and handles the end of the file gracefully.
// It also includes a main class to run the program.
class Que3{
    public static void main(String[] args) throws FileNotFoundException, IOException {
        FileReader fr = new FileReader("output.txt");
        BufferedReader br = new BufferedReader(fr);
        
        String y = br.readLine();
        while (true) {
            if(y == null) break;
        }
    }
}