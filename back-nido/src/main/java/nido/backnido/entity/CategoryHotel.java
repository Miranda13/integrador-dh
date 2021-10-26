package nido.backnido.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "categories_hotels")
@Getter
@Setter
public class CategoryHotel {
//    Cuando esté el script dump final hay que verificar que la entidad esta mappeado correctamente

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoryHotelId;
    @NotNull
    @NotBlank
    private String title;
    @NotNull
    @NotBlank
    private String description;

//    @Column(name = "images_image_id")
//    @OneToOne(mappedBy = "imageId")
    private Long imagesImageId;

}
