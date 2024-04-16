import emptycart from "./src/assets/emptycart.png";

export default function ProductCartCard({
  name,
  unitPrice,
  description,
  units,
  addUnit,
  removeUnit,
}: {
  name: string;
  unitPrice: number;
  description: string;
  units: number;
  addUnit: () => void;
  removeUnit: () => void;
}) {
  return (
    <div className="flex-col w-11/12 border border-purple-300 bg-purple-50 rounded p-4 mt-4 ">
      <div className="flex gap-y-2 justify-between">
        <div>
          <h3 className="text-l font-semibold">product Name :{name}</h3>
          <p>description: {description}</p>
          <p>unit price :{unitPrice}</p>
          <p>total : {unitPrice * units} </p>
        </div>
        <div>
          <img src="./src/assets/emptycart.png" alt="" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-x-4">
          <button
            onClick={removeUnit}
            className=" p-2 bg-purple-300 w-12 rounded"
          >
            -1
          </button>
          <span className="border p-2  w-12 rounded text-center">{units}</span>
          <button onClick={addUnit} className=" p-2 bg-purple-300 w-12 rounded">
            +1
          </button>
        </div>
        <div className="flex gap-8">
          <button>♥</button>
          <button>✖</button>
        </div>
      </div>
    </div>
  );
}
