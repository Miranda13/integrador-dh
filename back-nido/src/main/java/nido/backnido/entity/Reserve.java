package nido.backnido.entity;

import lombok.*;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "reserves")
@Where(clause = "active = true")
@Getter @Setter @ToString
@NoArgsConstructor @AllArgsConstructor
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

    @ManyToOne
    @JoinColumn(name="users_user_id", referencedColumnName = "userId")
    private User user;

    @ManyToOne
    @JoinColumn(name="products_product_id", referencedColumnName = "productId")
    private Product product;

    @Column(name = "active", columnDefinition = "boolean DEFAULT 'true'")
    private Boolean active;


}
