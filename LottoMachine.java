package com.example;
/*
* 1. 1 ~ 45 까지의 Ball => 로또 기계
* 2. 로또 기계의 Ball을 섞음
* 3. 섞인 Ball 중 6개 꺼냄
* */
public interface LottoMachine {
    int MAX_BALL_COUNT = 45;
    int RETURN_BALL_COUNT = 6;

    public void setBalls(Ball[] balls); // Ball을 배열로 받아옴
    public void mix();                  // 가진 Ball들을 섞음
    public Ball[] getBalls();           //  6개의 Ball 반환
}
