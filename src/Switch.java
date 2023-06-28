public class Switch {
    public static void main(String[] args){
        char ch = 'a';
        switch (ch) {
            case 'a':
            case 'A':
                System.out.println("A임");
                break;
            case 'b':
            case 'B':
                System.out.println("B임");
                break;
            case 'c':
            case 'C':
                System.out.println("C임");
            default:
                System.out.println("A,B,C 다 아님");
        }
    }

}
