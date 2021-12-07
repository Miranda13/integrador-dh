package nido.backnido.service.implementations;

import nido.backnido.entity.Category;
import nido.backnido.entity.Favorite;
import nido.backnido.entity.Product;
import nido.backnido.entity.User;
import nido.backnido.repository.CategoryRepository;
import nido.backnido.repository.FavoriteRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@SpringBootTest
public class FavoriteServiceImplTest {

    @InjectMocks
    private FavoriteServiceImpl favoriteService;
    @Mock
    private FavoriteRepository favoriteRepository;

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
}
