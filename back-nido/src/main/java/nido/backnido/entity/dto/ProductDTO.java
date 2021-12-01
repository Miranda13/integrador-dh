package nido.backnido.entity.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import nido.backnido.entity.*;

import java.time.LocalTime;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductDTO {
	private Long productId;
    private String name;
    private String description;
    private String address;
    private Double latitude;
    private Double longitude;
    private LocationDTO location;
    private CategoryDTO category;
    private Set<Image> images;
    private Score score;
    private Set<Feature> features;

}
