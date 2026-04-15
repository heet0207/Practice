class Operators {

    @SuppressWarnings("unused")
    public static void main(String[] args) {

        System.out.println(3==5);
        System.out.println(3!=5);
        System.out.println(3>5);
        System.out.println(3<5);
        System.out.println(3>=5);
        System.out.println(3<=5);
        System.out.println((3>5) && (5<8));
        System.out.println((3>5) || (5<8));
        System.out.println(!(3==5));

        int a=5;
        System.out.println(++a);  // Prefix
        int b=10;

        System.out.println(b++);
        System.out.println(b);

        
    }
    
}
