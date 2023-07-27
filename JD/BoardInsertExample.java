package JD;

import java.sql.Connection;
import java.sql.Statement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.DriverManager;
import java.sql.SQLException;

import java.io.FileInputStream;

public class BoardInsertExample {
    public static void main(String[] args) {

        Connection conn = null;
        PreparedStatement pstmt = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection
                    ("jdbc:mysql://localhost:3306/thisisjava?serverTimezone=UTC", "root", "0000");

            String sql = "insert into boards(btitle, bcontent, bwriter, bdate, bfilename, bfiledata)"
                    + "values (?, ?, ?, now(), ?, ?)";

            pstmt = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);

            pstmt.setString(1, "눈오는 날");
            pstmt.setString(2, "함박눈이 내림");
            pstmt.setString(3, "winter");
            pstmt.setString(4, "spring.jpg");
            pstmt.setBlob(5, new FileInputStream("src/spring.jpg"));

            int rows = pstmt.executeUpdate();
            System.out.println("board 테이블에 추가 저장된 행 :"+ rows);

            if (rows == 1) {
                ResultSet rs = pstmt.getGeneratedKeys();

                if (rs.next()) {
                    int bno = rs.getInt(1);
                    System.out.println("저장된 bno 값"+ bno);

                }
                rs.close();
            }

        } catch (Exception e) {
            e.printStackTrace();

        } finally {
            try {
                if (conn != null) conn.close();
                if (pstmt != null) conn.close();

            } catch (SQLException e) {
                throw new RuntimeException(e);

            }

        }

    }
}
