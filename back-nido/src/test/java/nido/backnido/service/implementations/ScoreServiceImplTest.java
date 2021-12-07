package nido.backnido.service.implementations;

import nido.backnido.entity.Favorite;
import nido.backnido.entity.Product;
import nido.backnido.entity.Score;
import nido.backnido.entity.User;
import nido.backnido.repository.ScoreRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@SpringBootTest
public class ScoreServiceImplTest {

    @InjectMocks
    private ScoreServiceImpl scoreService;
    @Mock
    private ScoreRepository scoreRepository;

    @Test
    public void saveScoreTest_Ok(){
        Product product = new Product();
        User user = new User();

        Score score = new Score(null,4, user, product);
        Score scoreResponse = new Score(1L, 4,user, product);

        when(scoreRepository.save(score)).thenReturn(scoreResponse);
        scoreService.create(score);

        verify(scoreRepository).save(score);
        assertEquals(score.getProduct(),scoreResponse.getProduct());
        assertEquals(1L, scoreResponse.getScoreId());
    }

}
