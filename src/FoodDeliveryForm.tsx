import { useState } from 'react';

type FoodDeliveryFormType = {
  customerName: string;
  mobile: string;
};

export default function FoodDeliveryForm() {
  const [values, setValues] = useState<FoodDeliveryFormType>({
    customerName: '',
    mobile: '',
  });

  return (
    <form>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Customer Name"
        />
        <label htmlFor="floatingInput">Customer Name</label>
      </div>
    </form>
  );
}
