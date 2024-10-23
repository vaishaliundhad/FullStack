import React from "react";
import { ImPower } from "react-icons/im";
import { IoIosArrowForward, IoMdAlarm } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { TbArrowsCross } from "react-icons/tb";
// import PayPal from "../../assets/images/paypal.png";
// import Compare from "../../assets/svg/compare.svg";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { FaShippingFast } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaShip } from "react-icons/fa6";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
// import InnerBanner from "../helper/InnerBanner";
const ProductSide = () => {
  return (
    <div>
      {/* <div>
        <InnerBanner title="Blog" Breadcrumbs="Fashion" />
      </div> */}

      <div className="px-[15px] md:px-[30px] py-2 overflow-x-hidden">
        <h2 className="text-[26px]  mb-[20px]">Cotton jersey top</h2>
        <div className="flex items-center gap-2 mb-[18px]">
          <button className="text-[11px] border border-black px-4 py-[5px] pt-[6px] rounded-sm font-semibold">
            Best Seller
          </button>
          <ImPower className="text-[rgb(219,18,21)] powerAnimation ml-2" />
          <p className="text-[14px] font-semibold">
            Selling Fast! 56 people have this in their carts.
          </p>
        </div>
        <div className="flex gap-3 items-center mb-[30px]">
          <p className="text-[28px] text-[#db1215]">$8.00</p>
          <del className="text-[20px] text-[rgba(0,0,0,0.55)]">&#36;10.00</del>
          <button className="bg-[rgba(252,87,50)] text-white px-[10px] py-1 rounded-2xl text-[12px] font-bold">
            20&#37; OFF
          </button>
        </div>
        <div className="flex items-center gap-3 mb-[30px]">
          <button className="bg-black rounded-sm text-white px-3 py-[2px] font-medium">
            20
          </button>
          <p className="text-[14px] font-semibold">
            People are viewing this right now
          </p>
        </div>
        <div className="border border-[crimson] w-fit px-[30px] py-[15px] mb-[30px]">
          <div className="flex items-center justify-center gap-1.5 leading-[20px]">
            <IoMdAlarm className="AlarmAnimation text-[13px]" />
            <p className="text-[10px] font-bold">HURRY UPI SALES ENDS IN:</p>
          </div>
          <p className="text-[18px] font-semibold text-[crimson]">
            11Day : 15Hours : 48Mins : 10Secs
          </p>
        </div>
        <p className="mb-[15px] text-[14px] font-medium">
          Color : <span className="font-bold">Beige</span>
        </p>
        <div className="flex h-[25px] gap-[15px] mb-[20px] *:h-full *:aspect-square *:rounded-full *:shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px]">
          <div className=" bg-[#c8ad7f]"></div>
          <div className="bg-black"></div>
          <div className="bg-[#a8bcd4]"></div>
          <div className="bg-white"></div>
        </div>
        <div className="flex  text-[14px]  justify-between">
          <p className="mb-[15px] font-medium">
            Size : <span className="font-bold">S</span>
          </p>
          <p className="font-semibold underline underline-offset-4">
            Find Your Size
          </p>
        </div>
        <div className="flex gap-[10px] mb-[30px]">
          <button className="NewArrivalPagination active">S</button>
          <button className="NewArrivalPagination">M</button>
          <button className="NewArrivalPagination">L</button>
          <button className="NewArrivalPagination">XL</button>
        </div>
        <p className="mb-[15px] font-bold text-[14px]">Quantity</p>
        <div className="flex gap-8 font-bold bg-[rgb(242,242,242)] w-fit items-center mb-[30px]">
          <p className="hover:text-[crimson] cursor-pointer w-[38px] flex justify-center text-lg">
            &#x2212;
          </p>
          <p className="hover:text-[crimson] cursor-pointer h-12  flex items-center justify-center">
            1
          </p>
          <p className="hover:text-[crimson] cursor-pointer w-[38px] flex justify-center text-lg">
            &#x2b;
          </p>
        </div>
        <div className="flex gap-[10px] items-center">
          <button className="py-[14px] px-6 rounded bg-black text-white flex-1">
            Add to cart - $8.00
          </button>
          <span className="border p-3 rounded  hover:border-black cursor-pointer">
            <FaRegHeart className="text-[23px]" />
          </span>
          <span className="border p-3 rounded  hover:border-black cursor-pointer">
            <TbArrowsCross className="text-[23px]" />
          </span>
        </div>
        <div className="grid mt-[15px]">
          <button className="flex  rounded items-center gap-1 bg-[rgb(255,197,32)] py-[14px] px-6 justify-center">
            <p className="text-[14px] text-[rgb(37,59,128)] font-semibold italic">
              Buy with
            </p>
            <img src="" alt="pay pal logo" />
            {/* <img src={PayPal} alt="pay pal logo" /> */}
          </button>
        </div>
        <p className="text-[14px] underline text-center mt-[10px] text-[rgb(134,134,134)]">
          More payment options
        </p>
        <div className="grid grid-cols-2 gap-[8px] md:grid-cols-4 my-[30px] ">
          <div className="flex gap-[8px] hover:text-[crimson] cursor-pointer">
            <img src="" alt="color compare" />
            {/* <img src={Compare} alt="color compare" /> */}
            <p className="text-[14px] font-semibold">Compare color</p>
          </div>
          <div className="flex gap-[8px] items-center hover:text-[crimson] cursor-pointer">
            <HiQuestionMarkCircle className="text-[20px] inline-block" />
            <p className="text-[14px] font-semibold">Ask a question</p>
          </div>
          <div className="flex gap-[8px] items-center hover:text-[crimson] cursor-pointer">
            <FaShippingFast className="text-[20px] inline-block" />
            <p className="text-[14px] font-semibold">Delivery & Return</p>
          </div>
          <div className="flex gap-[8px] items-center hover:text-[crimson] cursor-pointer">
            <FaShareAlt className="text-[20px] inline-block" />
            <p className="text-[14px] font-semibold">Delivery & Return</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 *:flex *:flex-col *:justify-center *:items-center *:p-[30px] *:border *:border-[#ebebeb] *:gap-[16px] *:rounded gap-6">
          <div>
            <span className="w-fit text-[25px]">
              <FaShip />
            </span>
            <p className="text-[14px] text-center">
              Estimate delivery times: <b>12-26 days</b> (International),{" "}
              <b>3-6 days</b> (United States).
            </p>
          </div>
          <div>
            <span className="w-fit text-[25px]">
              <GiReturnArrow />
            </span>
            <p className="text-[14px] text-center">
              Return within <b>30 days</b> of purchase. Duties & taxes are
              non-refundable.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-[30px] gap-4">
          <div className="flex gap-2 items-center">
            <span>
              <MdOutlineSecurity />
            </span>
            <p className="text-[14px] font-semibold">Guarantee Safe Checkout</p>
          </div>
          <div className="grid grid-cols-5 *:w-full gap-3">
            {/* <img src={img1} alt="payment option" />
          <img src={img3} alt="payment option" />
          <img src={img2} alt="payment option" />
          <img src={img4} alt="payment option" />
          <img src={img5} alt="payment option" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSide;