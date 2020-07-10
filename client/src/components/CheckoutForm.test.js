import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    const header = screen.getByText(/checkout form/i);

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)
    const checkoutButton = screen.getByRole('button')

    fireEvent.change(firstNameInput, { target: { value: 'Marina' } });
    fireEvent.change(lastNameInput, { target: { value: 'Martinez' } });
    fireEvent.change(addressInput, { target: { value: '1234 EasyStreet' } });
    fireEvent.change(cityInput, { target: { value: 'Raleigh' } });
    fireEvent.change(stateInput, { target: { value: 'NC' } });
    fireEvent.change(zipInput, { target: { value: '27615' } });
    fireEvent.click(checkoutButton);


    const successMessage = screen.getByText(/woo-hoo!/i)
    expect(successMessage).toBeInTheDocument();
});
