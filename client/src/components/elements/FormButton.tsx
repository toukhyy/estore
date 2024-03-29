interface IProps {
  title: string;
}

export const FormButton = ({ title }: IProps) => {
  return (
    <button
      type="submit"
      className=" rounded-md border-b-8 border-b-brand-pink-500 bg-slate-600 py-2 font-semibold text-white shadow-md duration-300 hover:bg-slate-500"
    >
      {title}
    </button>
  );
};
