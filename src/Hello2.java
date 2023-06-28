public class Hello2 {
    static int i;
    static {
        i = 500;
        System.out.println("static block");
    }
    public static void main(String[] args){
        System.out.println("Hello");
    }
}
