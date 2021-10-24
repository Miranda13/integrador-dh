package nido.backnido.entity.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CategoryRoomDTO {

    private Integer capacity;
    private Integer numberOfBeds;
    private Double price;
    private Long imageIdFK;

}
