import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosBurger from '@/config/axiosBurger';
import { Button } from "@/components/UI/Button/Button";
import { Ingredients } from '@/interfaces/Ingredients';
import { TContactData } from '@/interfaces/contactData';
import { parseContactData } from '@/helpers/parseContactData';
import { Modal } from '@/components/UI/Modal/Modal';
import { Spinner } from '@/components/UI/Spinner/Spinner';
import './ContactData.css';

export const ContactData = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [ingredients, setIngredients] = useState<Ingredients | null>(parseContactData(location));
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [contactData, setContactData] = useState<TContactData>({
    name: "",
    email: "",
    postal: "",
    street: ""
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement> ) => {
    const {name, value} = e.target;
    setContactData(prevState => ({...prevState, [name]: value}))
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const allDataReq = Object.values(contactData).every(el => el !== "");

    const order = {
      ingredients,
      contactData,
      price: location.state.price
    };

    if(allDataReq) {
      setIsLoading(true);
      await axiosBurger.post("orders.json", order);
      setIsLoading(false);
      setContactData(prevState => ({...prevState, name: "", street: "", postal: "", email: ""}));
      navigate({pathname: "/"});
    } else {
      setShowModal(true);
    };
  };

  return (
    <div className="ContactData">
      <Spinner show={isLoading}/>
      <Modal show={showModal} onClosed={() => setShowModal(false)}>
        <h1>Заполните все поля!</h1>
      </Modal>
      <h4>Enter your Contact Data</h4>
      <form onSubmit={onSubmitHandler}>
        <input 
          className="Input" 
          type="text" 
          name="name" 
          placeholder="Your Name"
          onChange={onChangeHandler}
          value={contactData.name}
        />
        <input 
          className="Input" 
          type="email"
          name="email"
          placeholder="Your Mail"
          onChange={onChangeHandler}
          value={contactData.email}
        />
        <input 
          className="Input" 
          type="text" 
          name="street"
          placeholder="Street"
          onChange={onChangeHandler}
          value={contactData.street}
        />
        <input 
          className="Input" 
          type="text" 
          name="postal"
          placeholder="Postal Code"
          onChange={onChangeHandler}
          value={contactData.postal}
        />
        <Button 
          isSubmit={true}
          btnType="Success"
        >
          ORDER
        </Button>
      </form>
    </div>
  );
};

