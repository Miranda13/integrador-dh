import React from "react";
import '@testing-library/jest-dom/extend-expect';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import LoginPage from '../LoginPage';
import FormLogin from '../../components/FormLogin';
import { BrowserRouter, Route, Routes} from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe ('render login', () => {
    let login;

    beforeEach (() => {
        login = mount(
            <BrowserRouter>
                <Routes>
                    <Route path= "/" element = {<LoginPage/>}> </Route>
                </Routes>
            </BrowserRouter>);
    });

    it ('render', () => {
        expect(login).toBeTruthy();
    });

    it ('Has content as login form', () => {
        expect(login.containsMatchingElement(<FormLogin />)).toEqual(true);
    });
    
})