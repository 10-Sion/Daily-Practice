package JD;

import GUI.Exam.A;
import 상속과접근제어자.상속.PB.B;

import java.io.*;
import java.sql.*;
import java.util.ArrayList;
import java.util.Date;

class Board {
    private int bno;
    private String btitle;
    private String bcontent;
    private String bwriter;
    private Date bdate;
    private String bfilename;
    private Blob bfiledata;

    public Board(int bno, String btitle, String bcontent, String bwriter, java.sql.Date bdate, String bfilename, Blob bfiledata) {
    }


    public int getBno() {
        return bno;
    }

    public void setBno(int bno) {
        this.bno = bno;
    }

    public String getBtitle() {
        return btitle;
    }

    public void setBtitle(String btitle) {
        this.btitle = btitle;
    }

    public String getBcontent() {
        return bcontent;
    }

    public void setBcontent(String bcontent) {
        this.bcontent = bcontent;
    }

    public String getBwriter() {
        return bwriter;
    }

    public void setBwriter(String bwriter) {
        this.bwriter = bwriter;
    }

    public Date getBdate() {
        return bdate;
    }

    public void setBdate(Date bdate) {
        this.bdate = bdate;
    }

    public String getBfilename() {
        return bfilename;
    }

    public void setBfilename(String bfilename) {
        this.bfilename = bfilename;
    }

    public Blob getBfiledata() {
        return bfiledata;
    }

    public void setBfiledata(Blob bfiledata) {
        this.bfiledata = bfiledata;
    }
}

public class BoardSelectExample {
    public static void main(String[] args) {
        ArrayList list = new ArrayList();
        Board board = null;

        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            DriverManager.getConnection("jdbc:mysql://localhost:3306/thisisjava?serverTimezone=UTC", "root", "0000");
            String sql = "select bno, btitle, bcontent, bwriter, bfilename, bfiledata "+
                    "from boards where bwriter=?";
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, "winter");

            rs = pstmt.executeQuery();

            while (rs.next()) {
                board = new Board(rs.getInt("bno"),
                                        rs.getString("btitle"),
                                        rs.getString("bcontent"),
                                        rs.getString("bwriter"),
                                        rs.getDate("bdate"),
                                        rs.getString("bfilename"),
                                        rs.getBlob("bfiledata"));

                list.add(board);
            }

            for (int i = 0; i < list.size(); i++) {
                board = (Board) list.get(i);

                System.out.println("조회된 글 순서"+ i +"게시글 번호 :"+ board.getBno() );
                System.out.println("조회된 글 순서"+ i +"게시글 제목 :"+ board.getBtitle() );
                System.out.println("조회된 글 순서"+ i +"게시글 내용 :"+ board.getBcontent() );
                System.out.println("조회된 글 순서"+ i +"게시글 작성자 :"+ board.getBwriter() );
                System.out.println("조회된 글 순서"+ i +"게시 날짜 :"+ board.getBdate() );
                System.out.println("조회된 글 순서"+ i +"첨부파일 이름 :"+ board.getBfilename() );
                System.out.println("조회된 글 순서"+ i +"첨부파일 내용 :"+ board.getBfiledata() );

                Blob blob = board.getBfiledata();

                if (blob != null) {
                    InputStream is = blob.getBinaryStream();
                    OutputStream os = new FileOutputStream("C:/Temp/"+ board.getBfilename());

                    os.flush();
                    os.close();
                    is.close();
                }
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);

        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);

        } catch (IOException e) {
            throw new RuntimeException(e);

        }
    }
}
