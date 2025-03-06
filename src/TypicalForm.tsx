import { ChangeEvent, SyntheticEvent, useState } from 'react';

type FoodDeliveryFormType = {
  customerName: string;
  mobile: string;
};

type FoodDeliveryFormErrorType = {
  customerName: string;
  mobile: string;
};

export default function TypicalForm() {
  const [values, setValues] = useState<FoodDeliveryFormType>({
    customerName: '',
    mobile: '',
  });

  const [errors, setErrors] = useState<FoodDeliveryFormErrorType>({
    customerName: '',
    mobile: '',
  });

  const validateFormData = (): boolean => {
    // const errors: FoodDeliveryFormErrorType = {

    const tempErrors: FoodDeliveryFormErrorType = {
      customerName: '',
      mobile: '',
    };

    if (values.customerName === '') {
      tempErrors.customerName = 'Customer name is required';
    }

    if (values.mobile === '') {
      tempErrors.customerName = 'Mobile is required';
    }

    setErrors(tempErrors);

    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateFormData()) {
      console.log('form data', values);
    } else {
      console.log('form is invalid');
    }
  };

  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          name="customerName"
          className="form-control"
          placeholder="Customer Name"
          value={values.customerName}
          onChange={handleInputChange}
        />
        <label htmlFor="floatingInput">Customer Name</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          name="mobile"
          className="form-control"
          placeholder="Mobile"
          value={values.mobile}
          onChange={handleInputChange}
        />
        <label htmlFor="floatingInput">Mobile</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
