public class MathBeanTest {
    public static void main(String[] args){
        MathBean math = new MathBean();

        math.printClassName();
        math.printNumber(5000);
        int x = math.getOne();
        System.out.println(x);
        int value = math.plus(200, 100);
        System.out.println(value);
    }
}
