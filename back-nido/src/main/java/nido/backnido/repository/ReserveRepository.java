package nido.backnido.repository;

import nido.backnido.entity.Reserve;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface ReserveRepository extends JpaRepository<Reserve, Long> {

    // que el producto no este en un registro de reserva con dateIn y dateOut igual o entre medio de dateIn y dateOut deseado
    /*

        SELECT R.reservation_id FROM reserves as R
        RIGHT JOIN products as P
        ON R.products_product_id = 1
        WHERE '2021-11-05' BETWEEN date_in AND date_out OR '2021-11-15' BETWEEN date_in AND date_out;

         -> FROM Category c WHERE c.fecha between :fecha1 AND :fecha2

     */
    /*@Query(value = "SELECT r FROM Reserve r WHERE r.product.productId = :productId AND :first BETWEEN r.dateIn AND r.dateOut OR :second BETWEEN r.dateIn AND r.dateOut")*/
	@Query(value ="SELECT * FROM reserves r WHERE (r.products_product_id = :productId) AND ((:first BETWEEN r.date_in AND r.date_out) OR (:second BETWEEN r.date_in AND r.date_out))",nativeQuery = true)
    Optional<Reserve> checkAvailability(@Param("first")LocalDate first,
                                        @Param("second")LocalDate second,@Param("productId") Long productId);

    /*
         SELECT R.reservation_id, R.date_in, R.date_out FROM reserves as R
         WHERE R.products_product_id = 1;
     */

    
    @Query(value = "SELECT r FROM Reserve r WHERE r.product.productId = :productId")
    List<Reserve> findReservationsByProductId(@Param("productId") Long productId);


}
