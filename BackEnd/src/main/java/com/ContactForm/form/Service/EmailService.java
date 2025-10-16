package com.ContactForm.form.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.ContactForm.form.Model.ContactRequest;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public boolean sendEmail(ContactRequest request) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo("fakem4886@gmail.com"); // your receiving email
            message.setSubject("New Contact Form Submission");
            message.setText(
                "Name: " + request.getName() +
                "\nEmail: " + request.getEmail() +
                "\nMessage: " + request.getMessage()
            );
            mailSender.send(message);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
