package com.study.member;
import java.io.File;
 
//회원 사진에 대한걸 올림
public class UploadMem {
    /** 페이지당 출력할 레코드 갯수 */
    public static int RECORD_PER_PAGE = 3;
 
    // Windows, VMWare, AWS cloud 절대 경로 설정
    public static synchronized String getUploadDir() {
        String path = "";
        if (File.separator.equals("\\")) {
            path = "C:/AI study/deploy/member/storage/";
            System.out.println("Windows 10: " + path);
            
        } else {
            // System.out.println("Linux");
            path = "/root/deploy/member/storage/";
        }
        
        return path;
    }
    
}