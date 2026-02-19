@RestController
@RequestMapping("/api")
@CrossOrigin(
    origins = {
        "http://localhost:5173",
        "https://sourabh-g-portfolio-backend.onrender.com"
    }
)
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
