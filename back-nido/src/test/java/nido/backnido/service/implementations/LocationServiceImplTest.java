package nido.backnido.service.implementations;

import nido.backnido.entity.Location;
import nido.backnido.entity.Product;
import nido.backnido.repository.LocationRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
public class LocationServiceImplTest {

    @InjectMocks
    private LocationServiceImpl locationService;
    @Mock
    private LocationRepository locationRepository;

//    @Test
//    public void saveLocationTest_Ok(){
//       Set<Product> product = new HashSet<>();
//        Location location = new Location(null, "Test city","Test country", 2.0,3.0,product);
//        Location locationResponse = new Location(1L,"Test city","Test country", 2.0,3.0,product);
//
//        when(locationRepository.save(location)).thenReturn(locationResponse);
//
//        locationService.create(location);
//
//        verify(locationRepository).save(location);
//        assertEquals(location.getCity(),locationResponse.getCity());
//        assertEquals(1L, locationResponse.getLocationId());
//        assertNotNull(locationResponse.getLatitude());
//        assertNotNull(locationResponse.getLongitude());
//    }

    @Test
    public void saveLocationTest_Null(){
        when(locationRepository.save(any())).thenReturn(null);
        locationService.create(null);
        verify(locationRepository, times(0)).save(any());
    }

//    @Test
//    public void getAllLocationTest_Ok(){
//        Set<Product> product = new HashSet<>();
//        Location location = new Location(null, "Test city","Test country", 2.0,3.0,product);
//        List<Location> locationList = new ArrayList<>();
//        locationList.add(location);
//
//        when(locationRepository.findAll()).thenReturn(locationList);
//        locationService.getAll();
//
//        verify(locationRepository).findAll();
//        assertEquals(1, locationList.size());
//
//    }

//    @Test
//    public void updateLocationTest_Ok(){
//        Set<Product> product = new HashSet<>();
//        Location locationDB = new Location(1L, "Test city","Test country", 2.0,3.0,null);
//        Location locationNew = new Location(1L, "Test modify city","Test country", 2.0,3.0,product);
//        Location locationResponse = new Location(1L,"Test modify city","Test country", 2.0,3.0,product);
//
//        when(locationRepository.findById(locationDB.getLocationId())).thenReturn(Optional.of(locationResponse));
//        locationService.update(locationNew);
//
//        verify(locationRepository).save(locationNew);
//        assertEquals(locationNew.getCity(), locationResponse.getCity());
//        assertTrue(locationDB.getProducts() != locationResponse.getProducts());
//
//    }

//    @Test
//    public void deleteLocationTest_Ok(){
//        Location locationDB = new Location(1L, "Test city","Test country", 2.0,3.0,null);
//
//        when(locationRepository.findById(anyLong())).thenReturn(Optional.of(locationDB));
//        doNothing().when(locationRepository).deleteById(locationDB.getLocationId());
//        locationService.delete(1L);
//
//        verify(locationRepository, times(1)).deleteById(locationDB.getLocationId());
//        verify(locationRepository).findById(anyLong());
//    }
}
