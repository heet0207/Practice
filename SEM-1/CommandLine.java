class CommandLine{


    public static void main(String[] args) {
        String s = args[0];
        char ch = args[1].charAt(1);
        int i = Integer.parseInt(args[2]);
        Double d = Double.parseDouble(args[3]);
        Boolean b = Boolean.parseBoolean(args[4]);
        System.out.println("String is:"+s);
        System.out.println("char is:"+ch);
        System.out.println("int is:"+i);
        System.out.println("Double is:"+d);
        System.out.println("Boolean is:"+b);



}
}
