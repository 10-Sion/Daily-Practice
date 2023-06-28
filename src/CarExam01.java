public class CarExam01 {
    public static void main(String[] args){
        Bus b1 = new Bus();
        b1.run();
        b1.안내방송();

        Car c1 = new Bus();
        c1.run();
        Bus b2 = (Bus)c1;   //  c1이 참조하는 Bus 인스턴스를 b2에도 참조시켜라
        b2.안내방송();

        Car c2 = new SuperCar();
        c2.run();;
    }
}
