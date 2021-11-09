package nido.backnido.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
public class Product {

    //    TODO Faltan las relaciones

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    @NotNull
    @NotBlank
    private String name;

    @NotNull
    private Boolean availability;

    @NotNull
    private Integer score;


    @NotNull
    @ManyToOne
    @JoinColumn(name = "locations_location_id")
    private Location location;

    @NotNull
    @ManyToOne
    @JoinColumn(name="categories_category_id")
    private Category category;

    @OneToMany(mappedBy = "product",cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Image> image;

    @JoinTable(
            name = "products_has_features",
            joinColumns = { @JoinColumn(name = "products_product_id")},
            inverseJoinColumns = {@JoinColumn(name = "features_feature_id")            }
    )
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Feature> features;

}
