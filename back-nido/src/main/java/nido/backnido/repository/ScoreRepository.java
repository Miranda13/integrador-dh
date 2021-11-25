package nido.backnido.repository;

import nido.backnido.entity.Score;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import java.util.Optional;

@Repository
public interface ScoreRepository extends JpaRepository<Score, Long> {
    @Query(value = "select avg(s.score) as promedio from Score s where s.product.productId = :id", nativeQuery = true)
    double getAverageProductScore(@Param("id")Long id);
}
