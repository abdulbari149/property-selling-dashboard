interface AuthHeaderProps {
  title: string;
  subTitle: string;
}
const AuthHeader: React.FC<AuthHeaderProps> = ({ title, subTitle }) => {
  return (
    <div className="mb-[15px] space-y-[10px]">
      <h1 className="text-center text-[35px] font-bold lg:text-start">
        {title}
      </h1>
      <p className="text-center text-[16px] leading-6 whitespace-pre-wrap font-normal text-stone-400 lg:text-start">
        {subTitle}
      </p>
    </div>
  );
};
export default AuthHeader;
