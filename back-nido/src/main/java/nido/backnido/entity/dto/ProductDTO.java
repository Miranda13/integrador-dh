package nido.backnido.entity.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import nido.backnido.entity.Category;
import nido.backnido.entity.Image;
import nido.backnido.entity.Location;

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
    /*
    private Boolean availability;
    private Integer score;*/
    private String address;
    private Double latitude;
    private Double longitude;
    private Location location;
    private Category category;
    private Set<Image> images;

}
