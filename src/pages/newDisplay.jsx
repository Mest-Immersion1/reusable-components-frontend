import React from "react";
import NewArticle from "../components/newArticle";
import LongNewCard from "../components/longNewCard";

const NewDisplay = () => {
  return (
    <div className="bg-[#F6F8FC] p-4">
      <h1 className="text-gray-900 text-[25px] font-semibold pl-4 md:pl-32 mt-5 mb-10">For you</h1>
      <div className="p-5 justify-center rounded-[20px] mx-auto bg-white mt-4 w-full md:w-[80%] flex flex-col gap-2 gap-y-0">
        <NewArticle />

        <hr />

        <LongNewCard
          newsOutletIcon="https://logowik.com/content/uploads/images/the-guardian-new-20183613.logowik.com.webp"
          title="A moment that changed me: I quit my PhD – and left my severe impostor syndrome behind"
          Image="https://i.guim.co.uk/img/media/590e2d8cbafa1a61f7a4aa9cfdc51979bc9bb57d/0_530_1536_922/master/1536.jpg?width=1140&dpr=2&s=none"
          date="3 days ago"
          link="https://www.theguardian.com/lifeandstyle/article/2024/aug/07/a-moment-that-changed-me-i-quit-my-phd-and-left-my-severe-impostor-syndrome-behind"
        />
      </div>
    </div>
  );
};

export default NewDisplay;
