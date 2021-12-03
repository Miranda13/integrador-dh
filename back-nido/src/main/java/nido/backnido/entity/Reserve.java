package nido.backnido.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "reserves")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Reserve {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reservationId;

    @NotNull
    private LocalDate dateIn;

    @NotNull
    private LocalDate dateOut;

    @NotNull
    private LocalTime hourIn;

    private Boolean covid;

    @Size(max = 180, message = "Este campo sólo acepta un máximo de 180 caracteres, por favor revisa")
    private String info;

    @ManyToOne
    @JoinColumn(name="users_user_id", referencedColumnName = "userId")
    private User user;

    @ManyToOne
    @JoinColumn(name="products_product_id", referencedColumnName = "productId")
    private Product product;


}
