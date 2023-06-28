public class Person {
    String name;
    String address;
    boolean isVip;
    static int count = 0;

    public void printName(){
        System.out.println("이름은 : " + name);
    }

    public static void printCount(){
        System.out.println("count :" + count);
    }

}
