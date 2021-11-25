package nido.backnido.entity.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import nido.backnido.entity.Product;
import nido.backnido.entity.User;

import java.time.LocalDate;
import java.time.LocalTime;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ReserveDTO {

    private Long reservationId;
    private LocalDate dateIn;
    private LocalDate dateOut;
    private LocalTime hourIn;
    private User user;
    private Product product;

}
