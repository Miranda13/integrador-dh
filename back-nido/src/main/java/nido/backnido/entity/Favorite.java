package nido.backnido.entity;


import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "favorites")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Favorite {

    @Id
    @GeneratedValue()
    private Long favoriteId;

    @OneToOne
    @JoinColumn(name = "products_product_id", referencedColumnName = "productId")
    private Product product;

//    @OneToOne
//    @JoinColumn(name = "users_user_id", referencedColumnName = "userId")
//    private User user;


}
