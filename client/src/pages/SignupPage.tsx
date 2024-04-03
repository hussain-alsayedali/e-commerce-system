import Button from "../components/Button.tsx";

export default function SignupPage() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <form
          action=""
          className="flex flex-col justify-center items-center align-middle w-11/12"
        >
          <div className="w-full mt-4">
            <label className="font-semibold" htmlFor="name-input">
              Name
            </label>
            <input
              name="name-input"
              id="name-input"
              type="text"
              className="rounded w-full border border-gray-300 block mt-2 py-2 "
            />
          </div>
          <div className="w-full mt-4">
            <label className="font-semibold" htmlFor="email-input">
              Email
            </label>
            <input
              name="email-input"
              id="email-input"
              type="text"
              className="rounded w-full border border-gray-300 block mt-2 py-2 "
            />
          </div>
          <div className="w-full mt-4">
            <label className="font-semibold" htmlFor="password-input">
              Password
            </label>
            <input
              name="password-input"
              id="password-input"
              type="text"
              className="rounded w-full border border-gray-300 block mt-2 py-2 "
            />
          </div>
          <div className="w-full mt-4">
            <label className="font-semibold" htmlFor="confirm">
              Confirm Password
            </label>
            <input
              name="confirm-input"
              id="confirm-input"
              type="text"
              className="rounded w-full border border-gray-300 block mt-2 py-2"
            />
            <div className="mt-4 ">
              <Button title="Sign up" />
            </div>
          </div>
        </form>
        <h2 className="mt-4 font-bold">Have an account ?</h2>
        <div className="w-11/12 mt-4">
          <Button title="Sign in" />
        </div>
      </div>
    </div>
  );
}
