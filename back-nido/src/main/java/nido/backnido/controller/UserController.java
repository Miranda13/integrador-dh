package nido.backnido.controller;

import nido.backnido.configuration.TokenProvider;
import nido.backnido.entity.User;
import nido.backnido.entity.dto.AuthTokenDTO;
import nido.backnido.entity.dto.LoginUserDTO;
import nido.backnido.entity.dto.UserDTO;
import nido.backnido.exception.CustomBindingException;
import nido.backnido.service.UserService;
import nido.backnido.utils.UtilsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.security.sasl.AuthenticationException;
import javax.validation.Valid;
import java.util.List;

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


    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<UserDTO> getAll(){
        return userService.getAll();
    }

    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public UserDTO getById(@PathVariable Long id){
        return userService.getById(id);
    }

    @PostMapping("register")
    public ResponseEntity<?>  saveUser(@RequestBody @Valid User user, BindingResult bindingResult) throws AuthenticationException {
        String password = user.getPassword();
        if (bindingResult.hasErrors()){
            throw new CustomBindingException("Errores encontrados, por favor compruebe e intente nuevamente", HttpStatus.BAD_REQUEST.value(), UtilsException.fieldBindingErrors(bindingResult));
        }
         userService.create(user);
       return ResponseEntity.status(HttpStatus.CREATED).body(generateToken(user.getEmail(),password));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id){
        userService.delete(id);
    }

    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody LoginUserDTO loginUser) throws AuthenticationException {
        return ResponseEntity.ok(generateToken(loginUser.getEmail(),loginUser.getPassword()));
    }

    private AuthTokenDTO generateToken(String email, String password){
        final Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        email,
                        password
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        final String token = jwtTokenUtil.generateToken(authentication);
        return new AuthTokenDTO(token);
    }

}
