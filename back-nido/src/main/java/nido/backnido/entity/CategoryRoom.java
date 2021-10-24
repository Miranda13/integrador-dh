package nido.backnido.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "categories_rooms")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CategoryRoom {
//    Cuando esté el script dump final hay que verificar que la entidad esta mappeado correctamente (price especificamente)

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoryRoomId;
    private Integer capacity;
    private Integer numberOfBeds;
    private Double price;

//    @Column(name = "images_image_id")
//    @OneToOne(mappedBy = "imageId")
    private Long imagesImageId;

}
