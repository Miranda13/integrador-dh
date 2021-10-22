package nido.backnido.repository;

import nido.backnido.entity.CategoryHotel;
import nido.backnido.entity.dto.CategoryHotelDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryHotelRepository extends JpaRepository<CategoryHotel, Long> {

    @Query("SELECT new nido.backnido.entity.dto.CategoryHotelDTO(c.title, c.description, c.imagesImageId) FROM CategoryHotel c WHERE c.title LIKE CONCAT('%',:title,'%')")
    List<CategoryHotelDTO> findByCategoryTitle(@Param("title")String title);

}

