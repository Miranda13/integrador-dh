package nido.backnido.service.implementations;

import nido.backnido.entity.*;
import nido.backnido.entity.dto.FavoriteDTO;
import nido.backnido.entity.dto.ProductDTO;
import nido.backnido.entity.dto.UserDTO;
import nido.backnido.repository.FavoriteRepository;
import nido.backnido.service.ImageService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.*;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.times;

@SpringBootTest
public class FavoriteServiceImplTest {

    @InjectMocks
    private FavoriteServiceImpl favoriteService;
    @Mock
    private FavoriteRepository favoriteRepository;
    @MockBean
    private ImageService imageService;

    @Test
    public void saveFavoriteTest_Ok(){
        Product product = new Product();
        User user = new User();

        Favorite favorite = new Favorite(null, user, product);
        Favorite favoriteResponse = new Favorite(1L, user, product);

        when(favoriteRepository.save(favorite)).thenReturn(favoriteResponse);

        favoriteService.create(favorite);

        verify(favoriteRepository).save(favorite);
        assertEquals(favorite.getProduct(),favoriteResponse.getProduct());
        assertEquals(1L, favoriteResponse.getFavoriteId());
    }

    @Test
    public void getAllFavoriteTest_Ok(){
        ProductDTO product = new ProductDTO();
        FavoriteDTO favorite = new FavoriteDTO(null, getUser(), product);
        List<Favorite> favoriteList = new ArrayList<>();

        for(Favorite favorite1: favoriteRepository.findAll()) {
            favorite.getProduct().setImages(imageService.findByProductId(favorite1.getProduct()));
            favoriteList.add(favorite1);
            when(favoriteRepository.findAll()).thenReturn(favoriteList);
            favoriteService.getAll();
            verify(favoriteRepository).findAll();
            assertEquals(1, favoriteList.size());
        }
    }

    @Test
    public void deleteFavoriteTest_Ok(){
        Product product = new Product();
        Favorite favoriteDB = new Favorite(1L, getUser(), product);

        when(favoriteRepository.findById(anyLong())).thenReturn(Optional.of(favoriteDB));
        doNothing().when(favoriteRepository).deleteById(favoriteDB.getFavoriteId());
        favoriteService.delete(1L);

        verify(favoriteRepository, times(1)).deleteById(favoriteDB.getFavoriteId());
        verify(favoriteRepository).findById(anyLong());
    }

    private User getUser(){
        Role role = new Role();
        Set<Reserve> reserves = new HashSet<>();
        UserDTO user = new UserDTO(1L, "name test", "surname test", "email test", role);
        return new User(user.getUserId(), user.getName(), user.getSurname(), user.getEmail(), "123456",true, role,reserves, true);
    }
}
