package nido.backnido.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "images")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Images {

    //    TODO Faltan las relaciones

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long imageId;

    @NotNull
    @NotBlank
    private String title;

    @NotNull
    @NotBlank
    private String url;

    @NotNull
    @NotBlank
    @Column(name = "products_product_id")
    private Long productId;


}
