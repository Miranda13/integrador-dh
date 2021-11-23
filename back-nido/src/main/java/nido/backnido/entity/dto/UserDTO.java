package nido.backnido.entity.dto;

import lombok.*;
import nido.backnido.entity.Role;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    private Long userId;
    private String name;
    private String surname;
    private String email;
    @ToString.Exclude
    private String password;
    private Role role;

}

