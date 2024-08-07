import React from "react";
import NewCard from "./newCard";
import gymnastic from "../assets/images/gymnastic1.webp";
import SmallNewCard from "./smallNewCard";

const NewArticle = () => {
  return (
    <div className=" bg-transparent flex gap-2 pb-0">
      <NewCard
        imageSrc={gymnastic}
        newsOutletName="Yahoo!"
        newsOutletIcon="https://duet-cdn.vox-cdn.com/thumbor/0x0:2000x1333/828x552/filters:focal(1000x667:1001x668):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg"
        title="Romanian PM to boycott Olympics' closing ceremony after 'scandalous situation' in..."
        time="19 minutes ago"
        link="https://www.yahoo.com/news/romanian-pm-boycott-olympics-closing-152445637.html"
      />

      <div className="flex flex-col">
        <SmallNewCard
          newsOutletIcon="https://upload.wikimedia.org/wikipedia/commons/6/66/CNN_International_logo.svg"
          newsOutletName="CNN news"
          title="USA rolls, Serbia comes back and France’s home court advantage. Here are 6 important lessons learnt from the men’s basketball quarterfinals"
          date="2 days ago"
          link="https://edition.cnn.com/2024/08/06/sport/olympic-takeaways-mens-basketball-quarterfinals-spt/index.html"
        />
        <SmallNewCard
          newsOutletIcon="https://upload.wikimedia.org/wikipedia/commons/6/66/CNN_International_logo.svg"
          newsOutletName="CNN news"
          title="USA rolls, Serbia comes back and France’s home court advantage. Here are 6 important lessons from the men’s basketball quarterfinals"
          date="2 days ago"
          link="https://edition.cnn.com/2024/08/06/sport/olympic-takeaways-mens-basketball-quarterfinals-spt/index.html"
        />
        <SmallNewCard
          newsOutletIcon="https://upload.wikimedia.org/wikipedia/commons/6/66/CNN_International_logo.svg"
          newsOutletName="CNN news"
          title="USA rolls, Serbia comes back and France’s home court advantage. Here are 6 important lessons from the men’s basketball quarterfinals"
          date="2 days ago"
          link="https://edition.cnn.com/2024/08/06/sport/olympic-takeaways-mens-basketball-quarterfinals-spt/index.html"
        />
      </div>
    </div>
  );
};

export default NewArticle;
