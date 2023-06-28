public class Overflow {
    public static void main(String[] args) {
        int value = 10;
        int maxInt = Integer.MAX_VALUE;

        System.out.println(value + 1);
        System.out.println(maxInt + 1);
        //  계산 결과가 최댓값을 넘거나 최소값보다 작을 경우
        //  양수 => 음수로, 음수 => 양수로 바뀌는 현상을 overflow
        //  실수의 overflow는 무한대, underflow는 0이 됨
    }
}
