package nido.backnido.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
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
    @Column(unique = true)
    private String email;

    @NotNull
    @NotBlank
    @ToString.Exclude
    private String password;

    private boolean validated;

    @NotNull
    @ManyToOne()
    @JoinColumn(name = "roles_role_id", referencedColumnName = "roleId")
    private Role role;

    @JsonIgnore
    @OneToMany(mappedBy = "reservationId", cascade = CascadeType.ALL)
    private Set<Reserve> reservations;

}
