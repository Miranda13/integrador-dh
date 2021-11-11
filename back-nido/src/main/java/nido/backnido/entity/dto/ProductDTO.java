package nido.backnido.entity.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import nido.backnido.entity.*;

import java.time.LocalTime;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {

    private String name;
    private String description;
    private Boolean availability;
    private Location location;
    private Category category;
    private Set<Image> image;
    private Set<Score> scores;
    private Set<Feature> features;

}
