package nido.backnido.service;

import nido.backnido.entity.Score;
import nido.backnido.entity.dto.ScoreDTO;

import java.util.List;
import java.util.Optional;

public interface ScoreService {

    void create(Score newScore);
    void update(Score updatedScore);
    void delete(Long id);
    double getAverageProductScore(Long productId);
    List<Score> getScoreByProductId(Long productId);
}
