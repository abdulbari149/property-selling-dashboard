import React from "react";
import { MdChevronRight } from "react-icons/md";

interface BreadCrumbProps {
  id: number;
  value: string;
  caret?: boolean;
  active: boolean;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({
  id,
  value,
  caret,
  active,
}) => {
  return (
    <>
      <div className="flex items-center space-x-2">
        <div
          className={
            `grid h-[30px] w-[30px] place-content-center rounded-full text-[16px] font-normal ` +
            (active
              ? "bg-[#000000] text-stone-100"
              : "bg-[#c2c2c24b] text-stone-500")
          }
        >
          {id}
        </div>
        <p>{value}</p>
      </div>
      {caret ? <MdChevronRight size={20} /> : null}
    </>
  );
};

export default BreadCrumb;
