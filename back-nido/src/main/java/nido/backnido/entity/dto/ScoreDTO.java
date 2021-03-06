package nido.backnido.entity.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import nido.backnido.entity.Product;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ScoreDTO {

    private Long scoreId;
    private int score;
    private Product product;
}
