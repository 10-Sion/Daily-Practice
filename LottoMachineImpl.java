package com.example;

// 인터페이스를 구현하려면 반드시 인터페이스의 메소드를 오버라이딩 해야함
public class LottoMachineImpl implements  LottoMachine{
    private Ball[] balls;

    @Override
    public void setBalls(Ball[] balls) {
        this.balls = balls;
    }

    @Override
    public void mix() {
        for (int i = 0; i < 10000; i++){
            int x1 = (int)(Math.random() * 45);
            int x2 = (int)(Math.random() * 45);

            if (x1 != x2){
                Ball tmp = balls[x1];   //  값을 치환하려면 같은 type의 임시변수 필요
                balls[x1] = balls[x2];
                balls[x2] = tmp;
            }
        }
    }

    @Override
    public Ball[] getBalls() {
        Ball[] result = new Ball[6];    //  Ball 6개를 참조
        for (int i = 0; i < 6; i++){
            result[i] = balls[i];
        }

        return result;
    }
}
