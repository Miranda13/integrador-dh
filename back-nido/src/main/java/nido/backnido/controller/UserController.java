package nido.backnido.controller;

import nido.backnido.configuration.TokenProvider;
import nido.backnido.entity.User;
import nido.backnido.entity.dto.AuthTokenDTO;
import nido.backnido.entity.dto.LoginUserDTO;
import nido.backnido.entity.dto.UserDTO;
import nido.backnido.exception.CustomBindingException;
import nido.backnido.service.ReserveService;
import nido.backnido.service.UserService;
import nido.backnido.service.implementations.SendEmail;
import nido.backnido.utils.UtilsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.mail.MailProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMailMessage;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.security.sasl.AuthenticationException;
import javax.validation.Valid;
import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Locale;

@RestController
@RequestMapping("api/v1/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenProvider jwtTokenUtil;

    @Autowired
    UserService userService;

    @Autowired
    ReserveService reserveService;

    @Autowired
    TemplateEngine templateEngine;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    MailProperties mailProperties;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<UserDTO> getAll() {
        return userService.getAll();
    }

    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public UserDTO getById(@PathVariable Long id) {
        return userService.getById(id);
    }

    @PostMapping("register")
    public ResponseEntity<?> saveUser(@RequestBody @Valid User user, BindingResult bindingResult) throws AuthenticationException, MessagingException {
        String password = user.getPassword();
        if (bindingResult.hasErrors()) {
            throw new CustomBindingException("Errores encontrados, por favor compruebe e intente nuevamente", HttpStatus.BAD_REQUEST.value(), UtilsException.fieldBindingErrors(bindingResult));
        }

        MimeMessage email = mailSender.createMimeMessage();
        final String htmlContent = this.templateEngine.process("mail.html", new Context(Locale.getDefault()));
        MimeMessageHelper helper = new MimeMessageHelper(email, true);

        //recorremos la lista y enviamos a cada cliente el mismo correo
        helper.setTo(user.getEmail());
        helper.setSubject("Bienvenido a Nido Digital Booking " + user.getName());
        helper.setText(htmlContent, true); // true = isHtml

        userService.create(user);
        mailSender.send(email);
        return ResponseEntity.status(HttpStatus.CREATED).body(generateToken(user.getUserId(), user.getEmail(), password));
    }

    @PutMapping("delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id) {
        reserveService.deleteAllByUserId(id);
        userService.delete(id);
    }

    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody LoginUserDTO loginUser) throws AuthenticationException {
        User user = userService.findByEmail(loginUser.getEmail());
        return ResponseEntity.ok(generateToken(user.getUserId(), loginUser.getEmail(), loginUser.getPassword()));
    }

    private AuthTokenDTO generateToken(Long id, String email, String password) {
        final Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        email,
                        password
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        final String token = jwtTokenUtil.generateToken(authentication, id);
        return new AuthTokenDTO(token);
    }

}
