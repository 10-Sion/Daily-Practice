package JD;


import java.sql.*;



//주제 : users테이블에서 userid열의 값이 winter인 사용자의 행 정보를 조회해서 가져와 출력!


//역할 : userid열의 값이 winter인 사용자의 조회된 행의 정보를 저장할 클래스 설계
class User{
    //멤버변수(인스턴스변수)
    private String userid;
    private String username;
    private String userpassword;
    private int userage;
    private String useremail;

    //Object클래스의 toString메소드 오버라이딩
    @Override
    public String toString() {
        return "조회된 정보 : userid=" + userid + ", username=" + username +
                ", userpassword=" + userpassword+", userage=" + userage+", useremail=" + useremail;
    }



    //getter setter메소드들
    public String getUserid() {
        return userid;
    }
    public void setUserid(String userid) {
        this.userid = userid;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getUserpassword() {
        return userpassword;
    }
    public void setUserpassword(String userpassword) {
        this.userpassword = userpassword;
    }
    public int getUserage() {
        return userage;
    }
    public void setUserage(int userage) {
        this.userage = userage;
    }
    public String getUseremail() {
        return useremail;
    }
    public void setUseremail(String useremail) {
        this.useremail = useremail;
    }
}



public class UserSelectExam {

    public static void main(String[] args) {

        Connection conn = null;

        try {
            //1.JDBC Drive로드
            Class.forName("com.mysql.cj.jdbc.Driver");

            //2.DB 연결
            conn = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/thisisjava?serverTimezone=UTC", "root", "0000");

            //3.SQL문 만들기(SELECT문 만들기)
            //-> users테이블에서  userid가  winter인 사용자의 정보를 조회하는 select문
            String sql = "select userid, username, userpassword, userage, useremail "+
                    "from users where userid=?";

            //4.select문장을 실행할 PreparedStatement객체 얻기
            PreparedStatement pstmt = conn.prepareStatement(sql);
            //4.1  ? 값 설정
            pstmt.setString(1, "winter");

            //5. select문장 DB에 전송해서 실행!  실행후 조회한 결과데이터들을 ResultSet객체에 모두 담아 반환 받기
            //반환 받은 ResultSet객체 메모리에는 커서(행 단위로 데이터를 가리키는 화살표)의 위치는  열명이 있는 행을 가리킵니다.
            ResultSet rs = pstmt.executeQuery();

            //참고. 반환받은 ResultSet객체 메모리의 커서위치는 현재 열제목행을 가리키고 있기때문에
            //     조회된 다음 행의 데이터를 꺼내오기 위해서는 ResultSet객체의 next()메소드를 호출해서
            //     조회된 다음 행의 위치로 커서의 위치를 내려서 옮겨주어야 합니다.
            //     옮겼을때 조회된 행 데이터가 존재하면 true반환하고 존재하지 않으면 false를 반환하게 됩니다.

            //ResultSet객체 메모리에 조회된 winter사용자의 정보가 존재하면?
            if(rs.next()) {
                //ResultSet객체 메모리에 커서가 위치한 행의 데이터들을 열 단위로 얻기
                String userid = rs.getString("userid");
                String username = rs.getString("username");
                String userpassword = rs.getString("userpassword");
                int userage = rs.getInt("userage");
                String useremail = rs.getString("useremail");

                //ResultSet객체메모리에서 조회된 winter의 한 행 정보를 우리개발자가 만든 User클래스의 객체 메모리를 생성해서 각 변수에 저장
                User1 user1 = new User1();
                //public으로 선언된  setter메소들을 호출하여  private으로 은닉보호된 인스턴스변수들의 값을 저장
                user1.setUserage(userage);
                user1.setUseremail(useremail);
                user1.setUserid(userid);
                user1.setUsername(username);
                user1.setUserpassword(userpassword);

                System.out.println(user1.toString());

            }else { //ResultSet객체 메모리에 조회된 winter사용자의 정보가 없으면?

                System.out.println("사용자 아이디winter가 존재하지 않음");

            }
            //ResultSet객체 메모리 자원해제
            rs.close();

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if(conn != null) conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

    }

}









