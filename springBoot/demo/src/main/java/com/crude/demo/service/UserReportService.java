package com.crude.demo.service;

import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

import com.crude.demo.entity.User;
import com.crude.demo.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.List;

@Service
public class UserReportService {
    @Autowired
    UserRepository userRepo;




    public String exportReport(String format){
        String reportFilePath="C:\\Users\\USSL\\Documents\\GitHub\\SpringBootCrud\\angular\\democrude\\public\\reports";

        String filename ="";
        try {
            List<User> userList = userRepo.findAll();
            JasperReport jasperReport= JasperCompileManager.compileReport(ResourceUtils.getFile("classpath:user_report.jrxml").getAbsolutePath());
            HashMap<String,Object> map= new HashMap<>();
            JRBeanCollectionDataSource beanCollectionDataSource= new JRBeanCollectionDataSource(userList);
            JasperPrint jasperPrint= JasperFillManager.fillReport(jasperReport,map,beanCollectionDataSource);
            if(format.equalsIgnoreCase("html")){
                JasperExportManager.exportReportToHtmlFile(jasperPrint,reportFilePath+"students.html");
                filename="user.html";
            } else if(format.equalsIgnoreCase("pdf")){
                JasperExportManager.exportReportToHtmlFile(jasperPrint,reportFilePath+"students.pdf");
                filename="user.pdf";
            }
        } catch (JRException e) {
            throw new RuntimeException(e);
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
        return filename;
    }
}
