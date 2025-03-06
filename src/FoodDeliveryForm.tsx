import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

type FoodDeliveryFormType = {
  customerName: string;
  mobile: string;
};

export default function FoodDeliveryForm() {
  const { register, handleSubmit } = useForm<FoodDeliveryFormType>();

  // const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {

  const onSubmit = (formData: FoodDeliveryFormType) => {
    // e.preventDefault();

    console.log('form data', formData);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Customer Name"
          {...register('customerName')}
        />
        <label htmlFor="floatingInput">Customer Name</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Mobile"
          {...register('mobile')}
        />
        <label htmlFor="floatingInput">Mobile</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
