package nido.backnido.entity.dto;

import lombok.*;
import org.apache.commons.lang3.builder.ToStringExclude;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = "products")
public class LocationDTO {
	private Long locationId;
    private String city;
    private String country;
    /*private Double latitude;
    private Double longitude;*/
    private Set<ProductDTO> products;

}
