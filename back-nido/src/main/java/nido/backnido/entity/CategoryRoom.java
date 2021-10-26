package nido.backnido.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

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
    @NotNull
    private Integer capacity;
    @NotNull
    private Integer numberOfBeds;
    @NotNull
    @Min(value=0,message = "Por favor ingrese un numero positivo")
    private Double price;

    //Se comenta el código para hacer las pruebas ya que salia error por que la entidad ImageIdFk no existe para hacer la FK
   // @Column(name = "images_image_id")
  //  @OneToOne(mappedBy = "imageId")
    private Long imagesImageId;

}
