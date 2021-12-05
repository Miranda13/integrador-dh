import React from "react";
import '@testing-library/jest-dom/extend-expect';
import FormRegister from '../FormRegister';
import {render, screen, queryByAttribute, fireEvent} from '@testing-library/react';
import { BrowserRouter, Route, Routes} from "react-router-dom";

describe('register-tests', () => {
    let register;
    let submitForm;
    const getById = queryByAttribute.bind(null, 'id');

    beforeEach (() => {
        submitForm = jest.fn();
        register = render(
        <BrowserRouter>
            <Routes>
                <Route path= "/" element = {<FormRegister submitForm = {submitForm} />}> </Route>
            </Routes>
        </BrowserRouter>, { attachTo: document.body });
    });

    it ('render', () => {
        expect(register).not.toBeNull();
    });

    it ('h2', () => {
        const h2 = getById(register.container, 'section-title');
        expect(h2).not.toBeNull();
    });

    it ('button register', () => {
        expect(screen.getByRole('button', {name: /Crear cuenta/})).toBeTruthy();
    });

    it ('validate blank form', () => {
        getById(register.container, 'button-register').click();
        const spans = screen.getAllByText('Este campo es obligatorio');
        expect(spans).toHaveLength(6);
    });

    it ('register', () => {
       fireEvent.change(screen.getByLabelText(/nombre/i), { target: {
           value: 'Anamaria'
       }});
       fireEvent.change(screen.getByLabelText(/apellido/i), { target: {
        value: 'Miranda'
        }});
        fireEvent.change(getById(register.container, 'email'), { target: {
            value: 'anam@correo.com'
        }});
        fireEvent.change(getById(register.container, 'repeatEmail'), { target: {
            value: 'anam@correo.com'
        }});
        fireEvent.change(getById(register.container, 'password'), { target: {
            value: 'Digital456'
        }});
        fireEvent.change(getById(register.container, 'repeatPassword'), { target: {
            value: 'Digital456'
        }});
       getById(register.container, 'button-register').click();
       const message = screen.queryByText('Este campo es obligatorio');
       expect(message).not.toBeInTheDocument();
    });
})