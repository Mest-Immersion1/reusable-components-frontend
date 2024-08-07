import React from 'react';

const NewsletterSubscription = ({ 
  title, 
  description, 
  placeholder, 
  buttonText, 
  backgroundColor = 'bg-indigo-50', 
  gradientFrom = 'from-indigo-600', 
  gradientTo = 'to-indigo-500',
  buttonColor = 'bg-gradient-to-br from-indigo-600 to-indigo-500', // Default button color
  buttonTextColor = 'text-white', // Default button text color
  titleColor = 'text-gray-700', // Default title color
  descriptionColor = 'text-gray-500', // Default description color
  inputTextColor = 'text-gray-800', // Default input text color
  placeholderColor = 'placeholder-gray-800' // Default placeholder color
}) => {
  return (
    <div className={`p-6 py-6 rounded md:px-12 md:py-12 lg:py-16 ${backgroundColor}`}>
      <div className="flex flex-col items-center justify-between space-y-4 lg:space-y-0 lg:space-x-8">
        <div className="max-w-2xl mb-4 text-center lg:mb-8">
          <h3 className={`mb-2 text-3xl font-semibold ${titleColor} lg:text-4xl`}>
            {title}
          </h3>
          <div className={`text-lg ${descriptionColor}`}>
            {description}
          </div>
        </div>
        <form>
          <div className="space-y-4">
            <div>
              <label htmlFor="member_email" className="sr-only">Email address</label>
              <input
                className={`inline-block w-full px-4 py-4 ${inputTextColor} ${placeholderColor} bg-white border border-gray-200 rounded-md revue-form-field focus:outline-none`}
                required
                placeholder={placeholder}
                type="email"
              />
            </div>
            <div className="flex items-center justify-center revue-form-actions">
              <button
                type="submit"
                className={`inline-block px-4 py-2 font-semibold text-center ${buttonTextColor} transition-all duration-700 rounded-full cursor-pointer h-10 ${buttonColor} hover:${gradientTo} hover:${gradientFrom} focus:outline-none active:outline-none`}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
