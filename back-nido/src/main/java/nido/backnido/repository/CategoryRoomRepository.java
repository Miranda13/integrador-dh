package nido.backnido.repository;

import nido.backnido.entity.CategoryRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRoomRepository extends JpaRepository<CategoryRoom, Long> {
}
