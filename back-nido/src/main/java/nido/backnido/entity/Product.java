package nido.backnido.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "products")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    //    TODO Faltan las relaciones

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    @NotNull
    @NotBlank
    private String name;

    @NotNull
    @NotBlank
    private Boolean availability;

    @NotNull
    @NotBlank
    private Integer score;

    @NotNull
    @NotBlank
    @Column(name = "locations_location_id")
    private Long locationId;

    @NotNull
    @NotBlank
    @Column(name = "categories_category_id")
    private Long category;

}
