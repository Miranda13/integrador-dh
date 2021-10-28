package nido.backnido.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import nido.backnido.entity.CategoryHotel;
import nido.backnido.entity.dto.CategoryHotelDTO;
import nido.backnido.exception.CustomBindingException;
import nido.backnido.repository.CategoryHotelRepository;
import nido.backnido.service.CategoryHotelService;
import nido.backnido.service.implementations.CategoryHotelServiceImpl;
import nido.backnido.utils.UtilsException;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.mockito.BDDMockito;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = CategoryHotelController.class)
@ActiveProfiles("test")
class CategoryHotelControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CategoryHotelService categoryHotelService;

    @MockBean
    private CategoryHotelRepository categoryHotelRepository;

    @Autowired
    ObjectMapper objectMapper;

    @Test // BACKEND-CONTROLLER-NID013
    public void createCategoryValidationReturnsStatus201Test() throws Exception {

        mockMvc.perform(post("http://localhost:8080/api/v1/categoryhotel")
                .content(objectMapper.writeValueAsString(buildValidCategory()))
                .contentType("application/json"))
                .andExpect(status().isCreated());

    }

    @Test // BACKEND-CONTROLLER-NID014
    public void createCategoryValidationReturnsStatus400Test() throws Exception {

        mockMvc.perform(post("http://localhost:8080/api/v1/categoryhotel")
                .content(objectMapper.writeValueAsString(buildInvalidCategory()))
                .contentType("application/json"))
                .andExpect(status().isBadRequest());

    }

    @Test // BACKEND-CONTROLLER-NID015
    public void listAllReturnsStatus200Test() throws Exception {

        List<CategoryHotel> expectedResponse = new ArrayList<>();
        expectedResponse.add(buildValidCategory());

        BDDMockito.given(categoryHotelRepository.findAll()).willReturn(expectedResponse);

        mockMvc.perform(get("http://localhost:8080/api/v1/categoryhotel"))
                .andExpect(status().isOk());
    }

    @Test // BACKEND-CONTROLLER-NID016
    public void listAllEmptyReturnsSize0Test() throws Exception {

        List<CategoryHotel> expectedResponse = new ArrayList<>();

        BDDMockito.given(categoryHotelRepository.findAll()).willReturn(expectedResponse);

        assertEquals(0, categoryHotelService.getAll().size());
    }

//    @Test // BACKEND-CONTROLLER-NID017
//    public void validUpdateReturnsStatus200Test() throws Exception {
//
//        CategoryHotel expectedResponse = new CategoryHotel(1L, "Updated", "Updated", 2L);
//        expectedResponse.setCategoryHotelId(1L);
//
//        BDDMockito.given(categoryHotelRepository.findById(anyLong())).willReturn(Optional.of(expectedResponse));
//
//        mockMvc.perform(post("http://localhost:8080/api/v1/categoryhotel")
//                .content(objectMapper.writeValueAsString(buildValidCategory()))
//                .contentType("application/json"));
//
//        mockMvc.perform(put("http://localhost:8080/api/v1/categoryhotel")
//                .content(objectMapper.writeValueAsString(expectedResponse))
//                .contentType("application/json"))
//                .andExpect(status().isOk());
//
//        assertEquals("Updated", categoryHotelService.getById(1L).getTitle());
//        assertEquals("Updated", categoryHotelService.getById(1L).getDescription());
//
//    }

    @Test // BACKEND-CONTROLLER-NID018
    public void invalidContentUpdateReturnsStatus400Test() throws Exception {

        CategoryHotel expectedResponse = buildInvalidCategory();
        expectedResponse.setCategoryHotelId(1L);

        BDDMockito.given(categoryHotelRepository.findById(1L)).willReturn(Optional.of(buildValidCategory()));

        mockMvc.perform(put("http://localhost:8080/api/v1/categoryhotel")
                .content(objectMapper.writeValueAsString(expectedResponse))
                .contentType("application/json"))
                .andExpect(status().isBadRequest());

    }

//    @Test // BACKEND-CONTROLLER-NID019
////    TODO Caso de prueba BACKEND-CONTROLLER-NID019. No logré hacer que el mock arroje una excepción que dispare un Status 400. Esto sí funciona con la App desplegada.
//    public void invalidIdUpdateReturnsStatus400Test() throws Exception {
//
//        List<String> s = new ArrayList<>();
//        s.add("Id");
//
//        when(categoryHotelRepository.save(any(CategoryHotel.class))).thenThrow(new CustomBindingException("ASD", 404, s));
//
//        CustomBindingException customBindingException = assertThrows(CustomBindingException.class, () ->
//                mockMvc.perform(put("http://localhost:8080/api/v1/categoryhotel")
//                        .content(objectMapper.writeValueAsString(buildValidCategory()))
//                        .contentType("application/json")));
//
//        assertEquals(HttpStatus.NOT_FOUND, customBindingException.getCodeError());
//
//    }

    @Test // BACKEND-CONTROLLER-NID020
    public void validDeleteByTitleTest() throws Exception {

    }

    @Test // BACKEND-CONTROLLER-NID021
    public void invalidDeleteByTitleTest() {

    }






    private CategoryHotel buildValidCategory() {
        CategoryHotel newCategory = new CategoryHotel();
        newCategory.setCategoryHotelId(1L);
        newCategory.setTitle("Familiar");
        newCategory.setDescription("Hotel familiar");
        newCategory.setImagesImageId(1L);
        return newCategory;
    }

    private CategoryHotel buildInvalidCategory() {
        CategoryHotel newCategory = new CategoryHotel();
        return newCategory;
    }

}