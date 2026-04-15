import java.io.*;

class F12 {
    @SuppressWarnings("ConvertToTryWithResources")
    public static void main(String[] args) {
        try {
            RandomAccessFile raf = new RandomAccessFile("raf1.txt", "rw");
            String s = "Hello Programmers How are You";
            raf.write(s.getBytes());
            raf.seek(0);
            System.out.println("Current pointer position:" + raf.getFilePointer());
            // Current pointer position:0
            int i = raf.read();
            System.out.println("Character at 0 position:" + (char) i);
            // Character at 0 position:H
            System.out.println("Current pointer position:" + raf.getFilePointer());
            // Current pointer position:1
            i = raf.read();
            System.out.println("Character at next position::" + (char) i);
            // Character at next position::e
            raf.seek(6);
            System.out.println("Current pointer position:" + raf.getFilePointer());
            // Current pointer position:6
            i = raf.read();
            System.out.println("Character at 6th position::" + (char) i);
            // Character at 6th position::P
            raf.close();
        } catch (IOException e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}