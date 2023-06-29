package 조건문_반복문활용;
import java.util.Scanner;

public class E10 {

    static int num;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        num =  sc.nextInt();
        int count = 1;

        for (int i = 0; i < num; i++){
            for (int j = num-1; j > i -1; j--){
                System.out.print(" "+ "\t");
            }

            for (int j = 0; j < 2 * i+1; j++){
                System.out.print(count + "\t");
                count++;
            }
            System.out.println();
        }
    }
}
