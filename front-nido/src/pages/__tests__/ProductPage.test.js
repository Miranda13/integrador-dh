import React from "react";
import '@testing-library/jest-dom/extend-expect';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProductPage from '../ProductPage';
import Product from '../../components/Product';
import { BrowserRouter, Route, Routes} from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe ('render home', () => {
    let product;

    beforeEach (() => {
        product = mount(
        <BrowserRouter>
            <Routes>
                <Route path= "/" element = {<ProductPage/>}> </Route>
            </Routes>
        </BrowserRouter>);
    });

    it ('render', () => {
        expect(product).toBeTruthy();
    });

    it ('Has detail product', () => {
        expect(product.find('h2').contains('Cargando...')).toBeTruthy();
    });

});

