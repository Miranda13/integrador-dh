package nido.backnido.service.implementations;

import nido.backnido.configuration.WebSecurityConfig;
import nido.backnido.entity.Location;
import nido.backnido.entity.Product;
import nido.backnido.repository.LocationRepository;
import nido.backnido.service.ImageService;
import nido.backnido.service.LocationService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.*;

@SpringBootTest()
public class LocationServiceImplTest {

    @InjectMocks
    private LocationServiceImpl locationService;
    @Mock
    private LocationRepository locationRepository;

    @Mock
    private ImageService imageService;

    @Test
    public void saveLocationTest_Ok() {
        Location locationResponse = new Location(1L, "Test city", "Test country", null);

        Location location = Location.builder()
                .city("Test city")
                .country("Test country")
                .build();

        when(locationRepository.save(location)).thenReturn(locationResponse);
        locationService.create(location);

        verify(locationRepository).save(location);
        assertEquals(location.getCity(), locationResponse.getCity());
        assertEquals(1L, locationResponse.getLocationId());
    }

    @Test
    public void saveLocationTest_Null(){
        when(locationRepository.save(any())).thenReturn(null);
        locationService.create(null);
        verify(locationRepository, times(0)).save(any());
    }

    @Test
    public void getAllLocationTest_Ok(){
        Set<Product> product = new HashSet<>();
        Location location = new Location(null, "Test city","Test country",product);
        List<Location> locationList = new ArrayList<>();
        locationList.add(location);

        when(locationRepository.findAll()).thenReturn(locationList);
        locationService.getAll();

        verify(locationRepository).findAll();
        assertEquals(1, locationList.size());

    }

    @Test
    public void updateLocationTest_Ok(){
        Set<Product> product = new HashSet<>();
        Location locationDB = new Location(1L, "Test city","Test country",null);
        Location locationNew = new Location(1L, "Test modify city","Test country",product);
        Location locationResponse = new Location(1L,"Test modify city","Test country",product);

        when(locationRepository.findById(locationDB.getLocationId())).thenReturn(Optional.of(locationResponse));
        locationService.update(locationNew);

        verify(locationRepository).save(locationNew);
        assertEquals(locationNew.getCity(), locationResponse.getCity());
        assertNotEquals(locationDB.getProducts(), locationResponse.getProducts());

    }

    @Test
    public void deleteLocationTest_Ok(){
        Location locationDB = new Location(1L, "Test city","Test country",null);

        when(locationRepository.findById(anyLong())).thenReturn(Optional.of(locationDB));
        doNothing().when(locationRepository).deleteById(locationDB.getLocationId());
        locationService.delete(1L);

        verify(locationRepository, times(1)).deleteById(locationDB.getLocationId());
        verify(locationRepository).findById(anyLong());
    }
}
