import React, { useState as useStateMock, setState } from "react";
import '@testing-library/jest-dom/extend-expect';
import Booking from '../Booking';
import { render, screen, queryByAttribute, fireEvent } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import products from './products.json';
import userEvent from "@testing-library/user-event";


describe('', () => {
    let booking;
    beforeEach(() => {
        booking = render(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Booking product={products[0]} />}> </Route>
                </Routes>
            </BrowserRouter>, { attachTo: document.body });
    })
    it('render', () => {
        expect(booking).toBeTruthy();
    });
    it('contain form of booking', () => {
        expect(screen.getAllByLabelText(/nombre/i)).toBeTruthy();
        expect(screen.getAllByLabelText(/apellido/i)).toBeTruthy();
        expect(screen.getAllByLabelText(/correo electrónico/i)).toBeTruthy();
        expect(screen.getAllByLabelText(/ciudad/i)).toBeTruthy();
        expect(screen.getAllByLabelText(/dejá información adicional al vendedor/i)).toBeTruthy();
        expect(screen.getAllByLabelText(/covid/i, { exact: false })).toBeTruthy();
        expect(screen.getByText(/check in/i)).toBeTruthy();
        expect(screen.getByText(/check out/i)).toBeTruthy();
        expect(screen.getByText(/horario de llegada/i, { exact: false })).toBeTruthy();
        expect(screen.getByRole('button', { name: /confirmar reserva/i })).toBeTruthy();
    });
    /* it ('additional information product', () => {
        expect(screen.getByText(/normas de la casa/i)).toBeTruthy();
        expect(screen.getByText(/salud y seguridad/i)).toBeTruthy();
        expect(screen.getByText(/política de cancelación/i)).toBeTruthy();
    }); */
    it('calendar', () => {
        const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
        "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const today = new Date();
        let month = today.getMonth();
        let nextMonth = month + 1 > 11 ? 0 : month + 1;
        let previousMonth = month - 1 < 0 ? 11 : month - 1;
        let twoMonth = month + 2 > 11 ? 1 : month + 1;
        
        expect(screen.getByText(monthNames[month])).toBeTruthy();
        expect(screen.getByText(monthNames[nextMonth])).toBeTruthy();
        
        const buttonPrevious = screen.getByRole('button', { name: 'Previous Month'});
        buttonPrevious.click();
        expect(screen.getByText(monthNames[month])).toBeTruthy();
        expect(screen.getByText(monthNames[previousMonth])).toBeTruthy();

        const buttonNext = screen.getByRole('button', { name: 'Next Month'});
        buttonNext.click();
        buttonNext.click();
        expect(screen.getByText(monthNames[nextMonth])).toBeTruthy();
        expect(screen.getByText(monthNames[twoMonth])).toBeTruthy();
    });
    it('titles', () => {
        expect(screen.getByText('Completá tus datos')).toBeTruthy();
        expect(screen.getByText('Seleccioná tu fecha de reserva')).toBeTruthy();
        expect(screen.getByText('Tu horario de llegada')).toBeTruthy();
        /* expect(screen.getByText(/qué tenes que saber/i)).toBeTruthy(); */
    });
})
