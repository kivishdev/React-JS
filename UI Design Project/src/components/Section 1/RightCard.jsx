import React from "react";

const RightCard = (props) => {
  console.log('Ye final Data', props.CardNum);

  return (
    <div className="h-full w-60 shrink-0 overflow-hidden relative rounded-4xl">
      <img
        className="h-full w-full object-cover"
        src={props.CardImg}
        alt=""
      />

      <div className="absolute top-0 left-0 h-full w-full p-3 flex flex-col justify-between">
        <h2 className="bg-white text-2xl font-bold rounded-full h-6 w-6 flex justify-center items-center">
          {props.CardNum}
        </h2>
        <div>
          <p className="text-xl leading-normal text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure
            eos fugit?
          </p>
          <div className="flex justify-between">
            <button className="bg-yellow-600 text-white px-4 py-1 font-semibold   rounded-full">
              {props.CardTag}
            </button>
            <button className="bg-blue-600 text-white px-2 py- font-semibold   rounded-full">
              <i class="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
