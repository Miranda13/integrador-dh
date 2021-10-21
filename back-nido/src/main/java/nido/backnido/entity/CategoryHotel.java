package nido.backnido.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "categories_hotels")
@Getter
@Setter
public class CategoryHotel {
//    Cuando esté el script dump final hay que verificar que la entidad esta mappeado correctamente

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoryHotelId;
    private String title;
    private String description;

    @Column(name = "images_image_id")
    @OneToOne(mappedBy = "imageId")
    private Long imageIdFK;

}
