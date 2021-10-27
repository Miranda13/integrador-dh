package nido.backnido.repository;

import nido.backnido.entity.CategoryHotel;
import nido.backnido.entity.CategoryRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface CategoryRoomRepository extends JpaRepository<CategoryRoom, Long> {

    @Query("FROM CategoryRoom c WHERE c.numberOfBeds >= :numberOfBeds")
    List<CategoryRoom> findByNumberOfBeds(@Param("numberOfBeds")int numberOfBeds);

}
