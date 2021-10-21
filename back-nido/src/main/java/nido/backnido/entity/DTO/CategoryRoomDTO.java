package nido.backnido.entity.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoryRoomDTO {

    private Integer capacity;
    private Integer numberOfBeds;
    private Double price;
    private Long imageIdFK;

}
