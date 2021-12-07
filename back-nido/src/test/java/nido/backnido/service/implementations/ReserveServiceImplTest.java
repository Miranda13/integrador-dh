package nido.backnido.service.implementations;

import nido.backnido.entity.Product;
import nido.backnido.entity.Reserve;
import nido.backnido.entity.User;
import nido.backnido.repository.ReserveRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;


import java.time.LocalDate;
import java.time.LocalTime;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@SpringBootTest
public class ReserveServiceImplTest {

    @InjectMocks
    private ReserveServiceImpl reserveService;
    @Mock
    private ReserveRepository reserveRepository;

    @Test
    public void saveReserveTest_Ok(){
        Product product = new Product();
        User user = new User();

        Reserve reserve = new Reserve(null,
                LocalDate.of(2021,12,10),
                LocalDate.of(2021, 12, 12),
                LocalTime.of(1,30,20),
                true,
                "Info test",
                user,
                product,
                true);
        Reserve reserveResponse = new Reserve( 1L,LocalDate.of(2021,12,10),
                LocalDate.of(2021,12,12),
                LocalTime.of(1,30,20),
                true,
                "Info test",
                user,product,true);

        when(reserveRepository.save(reserve)).thenReturn(reserveResponse);

        reserveService.create(reserve);

        verify(reserveRepository).save(reserve);
        assertEquals(reserve.getDateIn(),reserveResponse.getDateIn());
        assertEquals(1L, reserveResponse.getReservationId());
    }
}
