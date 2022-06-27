import SelectInput from "../../Inputs/SelectInput";
import Textarea from "../../Inputs/Textarea";
import TextInput from "../../Inputs/TextInput";
import { ReactComponent as WhiteArrowRight } from "../../../assets/svgs/white-arrow-right.svg";

const BillingForm = () => {
  const options = [
    {
      text: "Option One",
      value: "Option One",
    },
    {
      text: "Option Two",
      value: "Option Two",
    },
  ];
  return (
    <form className="mt-5">
      <h4 className="block mb-2 text-sm font-semibold text-gray-900">
        Card Details
      </h4>
      <div className="flex flex-wrap mt-3">
        <TextInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          placeholder="Enter card name "
          label="Name on card"
          type="text"
        />
        <TextInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          placeholder="Enter card number"
          label="Card number"
          type="text"
        />
      </div>
      <div className="flex flex-wrap  mt-5 mb-5">
        <TextInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          placeholder="MM/YY"
          label="Expiry"
          type="text"
        />
        <TextInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          placeholder="Enter CVV"
          label="CVV"
          type="text"
        />
      </div>
      <hr />

      <h4 className="block mb-2 text-sm font-semibold text-gray-900 mt-5">
        Billing address
      </h4>
      <div className="flex flex-wrap mt-3">
        <TextInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          placeholder="Enter address"
          label="Street address"
          type="text"
        />
        <TextInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          placeholder="Enter city"
          label="City"
          type="text"
        />
      </div>
      <div className="flex flex-wrap mt-3">
        <TextInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          placeholder="Enter state/province"
          label="State/Province"
          type="text"
        />
        <TextInput
          className="w-full md:w-1/2 md:mb-0  px-3"
          placeholder="Enter zip code"
          label="Zip code"
          type="text"
        />
      </div>
      <button
        type="button"
        className="text-white flex bg-primary  font-medium rounded-md text-sm px-3 py-2.5 mr-2 mb-2 mt-10"
      >
        <span className="flex justify-center items-center">
          Next <WhiteArrowRight className="ml-2" />
        </span>
      </button>
    </form>
  );
};

export default BillingForm;
