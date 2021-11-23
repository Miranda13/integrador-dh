package nido.backnido.entity.dto;

import nido.backnido.entity.Product;
import nido.backnido.entity.User;

import java.time.LocalDate;
import java.time.LocalTime;

public class ReserveDTO {

    private Long reservationId;
    private LocalDate dateIn;
    private LocalDate dateOut;
    private LocalTime hourIn;
    private User user;
    private Product product;

}
