import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, screen, queryByAttribute, fireEvent} from '@testing-library/react';
import FormLogin from '../FormLogin';
import { BrowserRouter, Route, Routes} from "react-router-dom";

describe('login-tests', () => {
    let login;
    let submitForm;
    const getById = queryByAttribute.bind(null, 'id');

    beforeEach (() => {
        submitForm = jest.fn();
        login = render(
        <BrowserRouter>
            <Routes>
                <Route path= "/" element = {<FormLogin submitForm = {submitForm} />}> </Route>
            </Routes>
        </BrowserRouter>, { attachTo: document.body });
    });

    it ('render', () => {
        expect(login).not.toBeNull();
    });

    it ('h2', () => {
        const h2 = screen.getByText('Iniciar sesión');
        expect(h2).not.toBeNull();
    });

    it ('button login', () => {
        expect(screen.getByRole('button', {name: /Ingresar/})).toBeTruthy();
    });

    it ('validate blank form', () => {
        getById(login.container, 'button-login').click();
        const spans = screen.getAllByText('Este campo es obligatorio');
        expect(spans).toHaveLength(2);
    });

    it ('login', () => {
        fireEvent.change(screen.getByLabelText(/correo electrónico/i), { target: {
            value: 'anam@correo.com'
        }});
        fireEvent.change(screen.getByLabelText(/contraseña/i), { target: {
         value: 'Digital456'
         }});
        getById(login.container, 'button-login').click();
        const message = screen.queryByText('Este campo es obligatorio');
        expect(message).not.toBeInTheDocument();
    })
})