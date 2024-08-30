import React from "react";
import "./App.css";
import Image from "./assets/images/donaldTrump.jpg";
import ArticleCard from "./components/articleCard";
import NewsCard from "./components/newsCard";
import NewImg from "./assets/images/hero_1.jpeg";
import Basketball from "./assets/images/basketball.jpg";
import ImageSlider from "./components/slidder";
import NewsOverlayCard from "./components/overlayCard";
import MySlider from "./components/slid";
import SlideImg1 from "./assets/images/image1.webp";
import SlideImg2 from "./assets/images/image2.webp";
import SlideImg3 from "./assets/images/image3.webp";
import SlideImg4 from "./assets/images/image4.webp";
import NewsCarousel from "./components/slid2";
import ShareButton from "./components/shareButton";
import Image5 from "./assets/images/afgan.webp";

import Article from "./components/newsFeed";
import NewsletterSubscription from "./components/subscribe";
import NotificationIcon from "./components/notification";
import NewsGrid from "./components/newsGrid";
import ArticleGrid from "./components/articlesGrid";
import SearchComponent from "./components/searchBar";
import NewCard from "./components/newCard";
import SmallNewCard from "./components/smallNewCard";
import LongNewCard from "./components/longNewCard";
import NewArticle from "./components/newArticle";
import NewDisplay from "./pages/newDisplay";
import NavBar from "./components/navBar";
import More from "./components/more";
import { Bookmark, Share2, ThumbsUp, ThumbsDown, Link2, EyeOff } from 'lucide-react';
import gymnastic from "./assets/images/gymnastic1.webp";

const images = [
  {
    image: SlideImg3,
    title: "Title 1",
    description: "Description for Image 1",
  },
  {
    image: NewImg,
    title: "Title 2",
    description: "Description for Image 2",
  },
  {
    image: Basketball,
    title: "Title 3",
    description: "Description for Image 3",
  },
  {
    image: NewImg,
    title: "Title 4",
    description: "Description for Image 4",
  },
];
const news = [
  { title: "Article 1", url: "/article-1" },
  { title: "Article 2", url: "/article-2" },
  { title: "Article 3", url: "/article-3" },
];
const articles = [
  {
    image: "https://via.placeholder.com/800x400?text=News+1",
    title: "Breaking News 1",
    description: "Description for breaking news 1.",
  },
  {
    image: "https://via.placeholder.com/800x400?text=News+2",
    title: "Breaking News 2",
    description: "Description for breaking news 2.",
  },
  {
    image: "https://via.placeholder.com/800x400?text=News+3",
    title: "Breaking News 3",
    description: "Description for breaking news 3.",
  },
  // Add more articles as needed
];
const articless = [
  {
    image:
      "https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w1920/f_auto/primary/seg5z4rka8kxjsijnn5g",
    category: "Sports",
    date: { day: "25", month: "May" },
    title: "Simone Biles started her golden day at Paris 2024 Olympics",
    categoryColor: "bg-indigo-600",
    headingUrl: "https://example.com/article",
  },
  {
    image: Image5,
    category: "Politics",
    date: { day: "10", month: "Mar" },
    title: "Afghanistan's President Ashraf Ghani Speaks At The Council",
    categoryColor: "bg-green-500",
    headingUrl: "https://example.com/article",
  },

  {
    image:
      "https://media.vogue.co.uk/photos/61e69b45b852fe8e00138481/2:3/w_1920,c_limit/1198930383",
    category: "Entertainment",
    date: { day: "20", month: "Jan" },
    title: "Selena Gomez talks focusing on acting over music",
    categoryColor: "bg-orange-500",
    headingUrl: "https://example.com/article",
  },

  {
    image:
      "https://www.usnews.com/object/image/00000182-468c-d0e6-a5e2-e69d50f80000/gettyimages-1230421222.jpg?update-time=1659041116099&size=responsive640",
    category: "Health",
    date: { day: "25", month: "May" },
    title: "Staff Shortages Choking U.S. Health Care System",
    categoryColor: "bg-red-500",
    headingUrl: "https://example.com/article",
  },
];

const mainArticle = {
  image:
    "https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&amp;w=1201&amp;h=676&amp;crop=1",
  title: "Revenge of the Never Trumpers",
  topic: "Election",
  description:
    "Meet the Republican dissidents fighting to push Donald Trump out of office—and reclaim their party.",
  url: "#",
};

const smallArticles = [
  {
    image:
      "https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1",
    title: "Trump Steps Back Into Coronavirus Spotlight",
    url: "#",
  },
  {
    image:
      "https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1",
    title: "How Trump's Mistakes Became Biden's Big Breaks",
    url: "#",
  },
  {
    image:
      "https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1",
    title: "Survey: Many Americans 'Dissatisfied' With U.S.",
    url: "#",
  },
  {
    image:
      "https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1",
    title: "How Trump's Mistakes Became Biden's Big Breaks",
    url: "#",
  },
  {
    image:
      "https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1",
    title: "Survey: Many Americans 'Dissatisfied' With U.S.",
    url: "#",
  },
  {
    image:
      "https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1",
    title: "Trump Steps Back Into Coronavirus Spotlight",
    url: "#",
  },
];

const filterOptions = [
  { value: "all", label: "All" },
  { value: "Politics", label: "Politics" },
  { value: "Entertainment", label: "Entertainment" },
  { value: "Health", label: "Health" },
  { value: "Tech", label: "Tech" },
  { value: "Sports", label: "Sports" },
];

const menuItems = [
  { label: "Home", link: "/" },
  { label: "For you", link: "/for-you" },
  { label: "Following", link: "/following" },
  { label: "World", link: "/world" },
  { label: "Local", link: "/local" },
  { label: "Business", link: "/business" },
  { label: "Technology", link: "/technology" },
  { label: "Entertainment", link: "/entertainment" },
  { label: "Sports", link: "/sports" },
  { label: "Science", link: "/science" },
  { label: "Health", link: "/health" },
];

const menuItem = [
  { icon: Bookmark, label: 'Save for later' },
  { icon: Share2, label: 'Share' },
  { icon: Link2, label: 'Go to Bloomberg' },
  { icon: Link2, label: 'Go to Ekow Dontoh' },
  { icon: EyeOff, label: 'Hide all stories from Bloomberg' },
  { icon: ThumbsUp, label: 'More stories like this' },
  { icon: ThumbsDown, label: 'Fewer stories like this' }
];

function App() {
  return (
    <>
      <ArticleCard
        title="Trump asks New York appeals court to throw out $454 million civil judgment"
        snippet="Lawyers for Donald Trump asked a New York appeals court Monday to throw out the $454 million judgment in his civil fraud trial, arguing that the monetary penalty was unconstitutional and that most of the case should have been barred because the conduct was too old."
        image={Image}
        date="24th July, 2024"
        url="https://www.aljazeera.com/news/"
        backgroundColor=""
      />
<div className="pt-10">
<NewsCard
        image={NewImg}
        title="Tiny Love Stories: ‘He Liked to Give Me Gifts'"
        snippet="Modern Love in miniature, featuring reader-submitted stories of no more than 100 words."
        readTime="5 mins"
        date="24th July, 2024"
        url="https://www.aljazeera.com/news/"
        backgroundColor="bg-orange-50"
      />
</div>
      

      <NewsOverlayCard
        image={Basketball}
        title="Basketball final game"
        description="Marshal High School among the first 5."
        width="w-[40%]"
        height="h-[20%]"
        textSizeTitle="text-2xl" // Custom title text size
        textSizeDescription="text-base" // Custom description text size
        textColor="text-yellow-300" // Custom text color
      />

      <div className="p-4">
        <ImageSlider
          images={images}
          textSizeTitle="text-[50px]" // Custom title text size
          textSizeDescription="text-[20px]" // Custom description text size
          textColor="text-black-300" // Custom text color
        />
      </div>

      <MySlider
        heading="Top Stories"
        url="https://www.aljazeera.com/news/"
        slides={[
          {
            image: SlideImg1,
            title:
              "Protests Erupt in Venezuela as Nations Denounce Election Result",
          },
          {
            image: SlideImg2,
            title:
              "In 2020, Harris Ran on Progressive Ideas. That May Haunt Her in 2024",
          },
          {
            image: SlideImg3,
            title:
              "Stalkers, Disease and Doubt: A Gymnast’s Hard Road Back to the Games",
          },
          {
            image: SlideImg4,
            title:
              "Benjamin Netanyahu Vows ‘Severe’ Response to Rocket Attack Tied to Hezbollah",
          },
        ]}
      />

      <NewsCarousel heading="Latest News" articles={articles} />

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Share Button Example</h1>

        <ShareButton />
      </div>

      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {articless.map((article, index) => (
            <Article
              key={index}
              image={article.image}
              category={article.category}
              date={article.date}
              title={article.title}
              categoryColor={article.categoryColor}
              headingUrl={article.headingUrl}
            />
          ))}
        </div>
      </div>

      <NewsletterSubscription
        title="Subscribe to newsletter"
        description="Welcome to our newsletter! We are thrilled to bring you the latest news and updates on all things America. Whether you're a proud citizen or just a fan of the land of the free and the home of the brave, we have something for everyone."
        placeholder="Your email address..."
        buttonText="Join 10k+ others"
        backgroundColor="bg-blue-50"
        gradientFrom="from-blue-600"
        gradientTo="to-blue-500"
        buttonColor="bg-gradient-to-br from-blue-600 to-blue-500"
        buttonTextColor="text-white"
        titleColor="text-blue-700"
        descriptionColor="text-gray-500"
        inputTextColor="text-blue-800"
        placeholderColor="placeholder-gray-500"
      />
      <div className="p-30 flex justify-center mt-14 pb-[20rem]">
        <NotificationIcon
          count={4}
          iconColor="text-teal-600"
          bgColor="bg-teal-500"
          pingColor="bg-teal-200"
          width="w-10"
          height="h-8"
          articles={news}
        />
      </div>

      <ArticleGrid
        mainArticle={mainArticle}
        smallArticles={smallArticles}
        hoverBgColor="bg-gray-200"
        hoverTextColor="text-indigo-600"
      />
      <div className="flex justify-center">
        <SearchComponent
          filterOptions={filterOptions}
          bgColor="bg-gray-100"
          borderColor="border-blue-500"
          darkBgColor="dark:bg-gray-800"
          darkBorderColor="dark:border-blue-600"
          textColor="text-gray-700"
          darkTextColor="dark:text-gray-300"
        />
      </div> 

      
      <SmallNewCard 
       newsOutletIcon="https://upload.wikimedia.org/wikipedia/commons/6/66/CNN_International_logo.svg"
       newsOutletName="CNN news"
       title="USA rolls, Serbia comes back and France’s home court advantage. Here are 6 important lessons learnt from the men’s basketball quarterfinals"
       date="2 days ago"
       link="https://edition.cnn.com/2024/08/06/sport/olympic-takeaways-mens-basketball-quarterfinals-spt/index.html"/>

      <LongNewCard
       newsOutletIcon="https://logowik.com/content/uploads/images/the-guardian-new-20183613.logowik.com.webp"
       title="A moment that changed me: I quit my PhD – and left my severe impostor syndrome behind "
       Image="https://i.guim.co.uk/img/media/590e2d8cbafa1a61f7a4aa9cfdc51979bc9bb57d/0_530_1536_922/master/1536.jpg?width=1140&dpr=2&s=none"
       date="3 days ago"
       link="https://www.theguardian.com/lifeandstyle/article/2024/aug/07/a-moment-that-changed-me-i-quit-my-phd-and-left-my-severe-impostor-syndrome-behind"
     />

       <NewArticle />

      {/* <NewCard 
      imageSrc={gymnastic}
      newsOutletName="Yahoo!"
      newsOutletIcon="https://duet-cdn.vox-cdn.com/thumbor/0x0:2000x1333/828x552/filters:focal(1000x667:1001x668):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg"
      title="Romanian PM to boycott Olympics' closing ceremony after 'scandalous situation' in..."
      time="19 minutes ago"
      link="https://www.yahoo.com/news/romanian-pm-boycott-olympics-closing-152445637.html"
      className="md:w-1/2"
      menuItem={menuItem}
      />  */}
     
      <NavBar
        logoSrc="https://upload.wikimedia.org/wikipedia/commons/3/33/Google_News.png"
        menuItems={menuItems}
        userAvatar="https://pics.craiyon.com/2023-11-21/ZPNowLM3Sw6biUFWZkQfqA.webp"
         selectedColor="decoration-blue-700"
      />
      <NewDisplay/>

      <div className="pb-40">
      <More menuItem={menuItem}/>
      </div>
    </>
  );
}

export default App;
