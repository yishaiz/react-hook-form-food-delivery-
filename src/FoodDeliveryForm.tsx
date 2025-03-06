import { ChangeEvent, SyntheticEvent, useState } from 'react';

type FoodDeliveryFormType = {
  customerName: string;
  mobile: string;
};

export default function FoodDeliveryForm() {
  const [values, setValues] = useState<FoodDeliveryFormType>({
    customerName: '',
    mobile: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(values);
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
