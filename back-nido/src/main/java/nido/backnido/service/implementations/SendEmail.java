package nido.backnido.service.implementations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class SendEmail {

    @Autowired
    private JavaMailSender mailSender;

    //Pasamos por parametro: destinatario, asunto y el mensaje
    public void sendEmail(SimpleMailMessage emailR) {

        SimpleMailMessage email = new SimpleMailMessage();

        email.setTo(emailR.getTo());
        email.setSubject(emailR.getSubject());
        email.setText(emailR.getText());

        mailSender.send(email);
    }
}
