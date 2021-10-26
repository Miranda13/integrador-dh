package nido.backnido.repository;

import nido.backnido.entity.CategoryHotel;
import nido.backnido.entity.dto.CategoryHotelDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface CategoryHotelRepository extends JpaRepository<CategoryHotel, Long> {

    @Query("FROM CategoryHotel c WHERE c.title LIKE CONCAT('%',:title,'%')")
    List<CategoryHotel> findByCategoryTitle(@Param("title")String title);

    @Transactional
    @Modifying
    @Query("DELETE FROM CategoryHotel c WHERE c.title LIKE CONCAT('%',:title,'%')")
    void deleteByCategoryTitle(@Param("title")String title);
}

