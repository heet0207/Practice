import java.io.*;
@SuppressWarnings("All")
class Que1{
    @SuppressWarnings("ConvertToTryWithResources")
    public static void main(String[] args) throws IOException {
        FileReader fr = new FileReader("input.txt");
        BufferedReader br = new BufferedReader(fr);

        int Even = 0;
        int Odd = 0;

        String y = br.readLine();
        while (true) {
            if (y == null) break;
            int num = Integer.parseInt(y);
            if (num % 2 == 0) {
                Even++;
            } else {
                Odd++;
            }
            y = br.readLine();
        }
        System.out.println("Even: " + Even);
        System.out.println("Odd: " + Odd);
        br.close();
        fr.close();
    }
}