package nido.backnido.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "products")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
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
    private String description;
    @NotNull
    @NotBlank
    private String address;
    @NotNull
    private Double latitude;

    @NotNull
    private Double longitude;
    /*
    @NotNull
    private Boolean availability;

    @NotNull
    private Integer score;
*/

    @NotNull
    @ManyToOne
    @JoinColumn(name = "locations_location_id", referencedColumnName = "locationId")
    private Location location;

    @NotNull
    @ManyToOne
    @JoinColumn(name="categories_category_id", referencedColumnName = "categoryId")
    private Category category;
    
    /*@OneToMany(mappedBy = "product",cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Image> images;
*/
    @JoinTable(
            name = "products_has_features",
            joinColumns = { @JoinColumn(name = "products_product_id")},
            inverseJoinColumns = {@JoinColumn(name = "features_feature_id")}
    )
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Feature> features;

}
