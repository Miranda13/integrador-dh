package nido.backnido.entity.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import nido.backnido.entity.Category;
import nido.backnido.entity.Image;
import nido.backnido.entity.Location;

import java.time.LocalTime;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {

    private String name;
    private Boolean availability;
    private Integer score;
    private Location location;
    private Category category;
    private Set<Image> image;

}
