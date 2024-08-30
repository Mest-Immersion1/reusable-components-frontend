import React, { useState } from 'react';
import { EllipsisVertical, Link2, X, Facebook } from 'lucide-react';
import x from "../assets/images/tweeter.png";
import whatsapp from "../assets/images/whatsapp.png";
import email from "../assets/images/email.png";

const More = ({ menuItem, link, title, imageSrc, newsOutletName, newsOutletIcon, time }) => {
  const [showCard, setShowCard] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(link);
    alert('Link copied to clipboard!');
    setShowShareModal(false);
  };

  const handleShareFacebook = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
    window.open(facebookShareUrl, '_blank');
    setShowShareModal(false);
  };

  const handleShareTwitter = () => {
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(link)}&text=${encodeURIComponent(title)}`;
    window.open(twitterShareUrl, '_blank');
    setShowShareModal(false);
  };

  const handleShareGmail = () => {
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(link)}`;
    window.open(mailtoUrl, '_blank');
    setShowShareModal(false);
  };

  const handleShareWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${title} ${link}`)}`;
    window.open(whatsappUrl, '_blank');
    setShowShareModal(false);
  };

  const handleSaveForLater = () => {
    const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];
    const isArticleSaved = savedArticles.some(article => article.link === link);

    if (!isArticleSaved) {
      savedArticles.push({ title, imageSrc, link, newsOutletName, time });
      localStorage.setItem('savedArticles', JSON.stringify(savedArticles));
      alert('Article saved for later!');
    } else {
      alert('Article is already saved!');
    }

    setShowCard(false);
  };

  return (
    <div className="relative flex items-center group">
      <button
        className="hidden group-hover:flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
        onClick={() => setShowCard(!showCard)}
      >
        <EllipsisVertical />
      </button>

      {showCard && (
        <div className="absolute bottom-0 left-0">
          <div className="absolute bottom-0 left-0 border rounded-lg shadow-lg p-4 w-64 sm:w-80 bg-white z-50">
            {menuItem.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  if (item.label === 'Save for later') {
                    handleSaveForLater();
                  } else if (item.label === 'Share') {
                    setShowShareModal(true);
                  } else if (item.label.startsWith('Go to')) {
                    window.open(link, '_blank');
                  } else {
                    alert(item.label);
                  }
                  setShowCard(false);
                }}
              >
                <item.icon className="mr-4 text-gray-500" size={20} />
                <span className="text-gray-500 whitespace-nowrap">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {!showCard && (
        <span className="absolute top-12 transform -translate-y-1/2 bg-gray-700 text-sm opacity-0 group-hover:opacity-100 text-white p-1 rounded">
          More
        </span>
      )}

      {showShareModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75 p-4 sm:p-8">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg lg:max-w-xl relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={() => setShowShareModal(false)}
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <img src={newsOutletIcon} alt="News Logo" className="h-8" />
              <span className="text-lg font-semibold">{newsOutletName}</span>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-medium">{title}</h2>
            </div>
            <p className="mb-4 text-gray-600">Share this via</p>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center cursor-pointer" onClick={handleCopyLink}>
                <Link2 size={36} className="text-gray-700" />
                <span className="text-sm mt-2">Copy link</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer" onClick={handleShareFacebook}>
                <Facebook size={36} className="text-blue-800 fill-blue-800" />
                <span className="text-sm mt-2">Facebook</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer" onClick={handleShareTwitter}>
                <img src={x} alt="X" className="h-9" />
                <span className="text-sm mt-2">X (Twitter)</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer" onClick={handleShareWhatsApp}>
                <img src={whatsapp} alt="WhatsApp" className="h-9" />
                <span className="text-sm mt-2">WhatsApp</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer" onClick={handleShareGmail}>
                <img src={email} alt="Email" className="h-9" />
                <span className="text-sm mt-2">Email</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default More;
