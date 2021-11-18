package nido.backnido.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Entity
@Table(name = "users")
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @NotNull
    @NotBlank
    private String name;

    @NotNull
    @NotBlank
    private String surname;

    @NotNull
    @NotBlank
    private String email;

    @NotNull
    @NotBlank
    private String password;

    @NotNull
    @NotBlank
    private boolean validated;

    @NotNull
    @NotBlank
    @ManyToOne()
    @JoinColumn(name = "roles_role_id", referencedColumnName = "roleId")
    private Role role;

    @OneToMany(mappedBy = "reservationId", cascade = CascadeType.ALL)
    private Set<Reserve> reservations;

}
