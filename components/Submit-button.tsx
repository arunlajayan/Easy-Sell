import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      
      className={pending ? "btn btn-ghost" : "btn btn-active btn-primary"}
      aria-disabled={pending}
    >
      {pending ? 'Loading...' : 'Add Product'}
    </button>
  );
}

export default SubmitButton;