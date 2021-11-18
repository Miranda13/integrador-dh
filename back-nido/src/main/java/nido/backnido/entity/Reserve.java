package nido.backnido.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "reserves")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Reserve {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reservationId;

    @NotNull
    @NotBlank
    private LocalDate dateIn;

    @NotNull
    @NotBlank
    private LocalDate dateOut;

    @NotNull
    @NotBlank
    private LocalTime hourIn;

    @ManyToOne
    @JoinColumn(name="user_user_id", referencedColumnName = "userId")
    private User user;

    @ManyToOne
    @JoinColumn(name="products_product_id", referencedColumnName = "productId")
    private Product product;


}