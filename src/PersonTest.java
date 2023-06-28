public class PersonTest {
    public static void main(String[] args){
        Person p1 = new Person();
        Person p2 = new Person();
        p1.name = "aaa";
        p2.name = "bbb";

        System.out.println(p1.name);
        System.out.println(p1.address);
        System.out.println(p1.isVip);

        System.out.println(p2.name);
        System.out.println(p2.address);
        System.out.println(p2.isVip);
    }
}
