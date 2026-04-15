class test {
    static int a = 10;
    static{
        M1();
        System.out.println("First static Block");
    }
    public static void main(String[] args) {
        M1();
        System.out.println("Main");
    }

    static void M1(){
        System.out.println(j);
    }
    static int j = 20;

    public static int getA() {
        return a;
    }
}
