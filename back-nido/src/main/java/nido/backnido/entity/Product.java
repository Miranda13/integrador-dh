package nido.backnido.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
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
    @NotBlank
    private Boolean availability;

    @NotNull
    @NotBlank
    private Integer score;

    @NotNull
    @NotBlank
    @ManyToOne
    @JoinColumn(name = "locations_location_id")
    private Location location;

    @NotNull
    @NotBlank
    @ManyToOne
    @JoinColumn(name="categories_category_id")
    private Category category;

    @NotNull
    @NotBlank
    @OneToMany(mappedBy = "product",cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Image> image;

}
