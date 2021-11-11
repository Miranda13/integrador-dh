package nido.backnido.entity.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import nido.backnido.entity.Product;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LocationDTO {
	private Long locationId;
    private String city;
    private String country;
    private Double latitude;
    private Double longitude;
    private Set<Product> products;

}
