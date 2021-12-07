package nido.backnido.service.implementations;

import nido.backnido.entity.*;
import nido.backnido.repository.ScoreRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest
public class ScoreServiceImplTest {

    @InjectMocks
    private ScoreServiceImpl scoreService;
    @Mock
    private ScoreRepository scoreRepository;

//    @Test
//    public void saveScoreTest_Ok(){
//        Product product = new Product();
//        User user = new User();
//
//        Score score = new Score(null,4, user, product);
//        Score scoreResponse = new Score(1L, 4,user, product);
//
//        when(scoreRepository.save(score)).thenReturn(scoreResponse);
//        scoreService.create(score);
//
//        verify(scoreRepository).save(score);
//        assertEquals(score.getProduct(),scoreResponse.getProduct());
//        assertEquals(1L, scoreResponse.getScoreId());
//    }

    @Test
    public void saveScoreTest_Null(){
        when(scoreRepository.save(any())).thenReturn(null);
        scoreService.create(null);
        verify(scoreRepository, times(0)).save(any());
    }

    @Test
    public void updateScoreTest_Ok(){
//        Product product = new Product();
//        User user = new User();
//
//        Score scoreDB = new Score(1L, 4,user, product);
//        Score ScoreNew = new Score(1L, 4,user, product);
//        Score ScoreResponse = new Score(1L,4,user, product);
//
//        when(scoreRepository.findById(scoreDB.getScoreId())).thenReturn(Optional.of(ScoreResponse));
//      //  scoreService.update(ScoreNew);
//
//        verify(scoreRepository).save(ScoreNew);
//        assertEquals(ScoreNew.getScore(), ScoreResponse.getScore());

    }

    @Test
    public void deleteScoreTest_Ok(){
        Product product = new Product();
        User user = new User();
        Score scoreDB = new Score(1L, 4,user, product);

        when(scoreRepository.findById(anyLong())).thenReturn(Optional.of(scoreDB));
        doNothing().when(scoreRepository).deleteById(scoreDB.getScoreId());
        scoreService.delete(1L);

        verify(scoreRepository, times(1)).deleteById(scoreDB.getScoreId());
        verify(scoreRepository).findById(anyLong());
    }

}
