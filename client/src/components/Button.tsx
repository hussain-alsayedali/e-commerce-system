interface props {
  /** The text to display inside the button */
  title: string;
  /** Whether the button can be interacted with */
}
// md:px-8 md:w-auto
export default function Button({ title }: props) {
  return (
    <button className="bg-purple-800 text-white rounded-3xl w-full py-2 px-2  ">
      {title}
    </button>
  );
}
