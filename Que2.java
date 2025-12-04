import java.io.*;
class Que2 {
    @SuppressWarnings("ConvertToTryWithResources")
    public static void main(String[] args) throws FileNotFoundException, IOException {
        FileReader fr = new FileReader("input.txt");
        BufferedReader br = new BufferedReader(fr);

        @SuppressWarnings("unused")
        int Even = 0;
        @SuppressWarnings("unused")
        int Odd = 0;
        
        String y = br.readLine();
        while (true) {
            if(y == null) break;
            int num = Integer.parseInt(y);
            if (num % 2 == 0) {
                System.out.println(num + " is Even");
            } else {
                System.out.println(num + " is Odd");
        }
    }
    br.close();
    fr.close();
    System.out.println("End of file reached.");
}
}