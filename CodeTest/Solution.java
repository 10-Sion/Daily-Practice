package CodeTest;
import java.util.HashMap;
import java.util.Map;

public class Solution {

    public static int solution(int[] num_list) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();

        for (int num: num_list){
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) +1);
        }

        int answer = 0;         // 최빈값 저장
        int maxFrequency = 0;   // 최빈값 빈도
        boolean isMultiple = false;// 최빈값의 중복여부

        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            int num = entry.getKey();
            int frequency = entry.getValue();

            if (frequency > maxFrequency) {
                answer = num;
                maxFrequency = frequency;
                isMultiple = false;
            } else if (frequency == maxFrequency){
                isMultiple = true;  // 같은 빈도 최빈값 있음
            }
        }

        if (isMultiple){
            answer = -1;    // 최빈값 여러개일 때 -1 반환
            return answer;
        } else {
        return answer;      // 단일 최빈값 반환
        }
    }
}
