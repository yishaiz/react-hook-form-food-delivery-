import { useForm } from 'react-hook-form';
import { useRenderCount } from './userRenderCount';

type FoodDeliveryFormType = {
  orderNo: number;
  customerName: string;
  mobile: string;
  email: string;
};

export default function FoodDeliveryForm() {
  // useRenderCount()
  const { register, handleSubmit } = useForm<FoodDeliveryFormType>({
    defaultValues: {
      orderNo: new Date().valueOf(),
      customerName: '',
      mobile: '',
      email: '',
    },
  });

  const onSubmit = (formData: FoodDeliveryFormType) => {
    console.log({ formData });
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <div className="row mb-2">
        <div className="col">
          <div className="form-floating">
            <input
              type="text"
              disabled
              className="form-control"
              placeholder="#OrderNo"
              {...register('orderNo')}
            />
            <label htmlFor="#OrderNo">Customer Name</label>
          </div>
        </div>

        <div className="col">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Mobile"
              {...register('mobile')}
            />
            <label htmlFor="floatingInput">Mobile</label>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Customer Name"
              {...register('customerName')}
            />
            <label htmlFor="floatingInput">Customer Name</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating">
            <input
              {...register('email')}
              type="text"
              className="form-control"
              placeholder="Email"
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
