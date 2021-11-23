package nido.backnido.repository;

import nido.backnido.entity.Score;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import java.util.Optional;

public interface ScoreRepository extends JpaRepository<Score, Long> {
    @Query("select avg(s.score) as promedio from Score s where s.product.productId = :id")
    double getAverageProductScore(Long id);
}
