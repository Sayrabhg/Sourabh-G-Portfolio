package com.ContactForm.form.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ContactForm.form.Model.ContactRequest;
import com.ContactForm.form.Service.EmailService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173") // allow React app
public class ContactController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/contact")
    public ResponseEntity<String> sendContact(@RequestBody ContactRequest request) {
        boolean sent = emailService.sendEmail(request);
        if (sent) {
            return ResponseEntity.ok("Email sent successfully");
        } else {
            return ResponseEntity.status(500).body("Failed to send email");
        }
    }
}
