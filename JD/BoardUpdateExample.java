package JD;

import java.sql.Connection;
import java.sql.Statement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.DriverManager;
import java.sql.SQLException;

import java.io.FileInputStream;

public class BoardUpdateExample {
    public static void main(String[] args) {

        Connection conn = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection
                    ("jdbc:mysql://localhost:3306/thisisjava?serverTimezone=UTC", "root", "0000");
            String sql = "update boards set "+ "btitle=?, bcontent=?, bfilename=?, bfiledata=?"+ "where bno=?";

            PreparedStatement pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, "눈사람");
            pstmt.setString(2, "눈으로 만든 사람");
            pstmt.setString(3, "spring.jpg");
            pstmt.setBlob(4, new FileInputStream("src/spring.jpg"));
            pstmt.setInt(5, 1);

            int rows = pstmt.executeUpdate();

            if (rows == 1) {
                System.out.println("수정된 행 수: "+ rows);
            }
            pstmt.close();


        } catch (Exception e) {
            e.printStackTrace();

        } finally {
            try {
                if (conn != null) {
                    conn.close();
                }

            } catch (SQLException e) {
                throw new RuntimeException(e);

            }

        }
    }
}
