package nido.backnido.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "categories_rooms")
@Getter
@Setter
public class CategoryRoom {
//    Cuando esté el script dump final hay que verificar que la entidad esta mappeado correctamente (price especificamente)

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoryRoomId;
    private Integer capacity;
    private Integer numberOfBeds;
    private Double price;

    //Se comenta el código para hacer las pruebas ya que salia error por que la entidad ImageIdFk no existe para hacer la FK
   // @Column(name = "images_image_id")
  //  @OneToOne(mappedBy = "imageId")
    private Long imageIdFK;

}
