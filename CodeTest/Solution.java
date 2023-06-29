package CodeTest;
import java.util.Scanner;

public class Solution {

    public int[] solution(int[] num_list) {
        int F = 0;
        int S = 0;

        for(int i = 0; i < num_list.length; i++){
            if(num_list[i] % 2 == 0) {
                F += 1;
            } else {
                S += 1;
            }

        }
        int[] answer = new int[]{F,S};
        return answer;
    }
}
