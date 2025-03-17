import { useForm } from 'react-hook-form';

type FoodDeliveryFormType = {
  customerName: string;
  mobile: string;
};

export default function FoodDeliveryForm() {
  const { register, handleSubmit } = useForm<FoodDeliveryFormType>();
  // console.log(register('customerName'));

  const onSubmit = (formData:FoodDeliveryFormType ) => {
    
  };

  /*
  

  const onSubmit = (formData: FoodDeliveryFormType) => {
    console.log('form data', formData);
  };

  const onError = (errors) => {
    console.log('validation errors', errors);
  };
*/
  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-floating mb-3">
        <input
          {...register('customerName', { value: 'Fiona' })}
          type="text"
          className="form-control"
          placeholder="Customer Name"
        />
        <label htmlFor="floatingInput">Customer Name</label>
      </div>

      <div className="form-floating mb-3">
        <input
          {...register('mobile')}
          type="text"
          className="form-control"
          placeholder="Mobile"
        />
        <label htmlFor="floatingInput">Mobile</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
