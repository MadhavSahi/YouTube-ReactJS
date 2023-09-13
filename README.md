# <div align="center"> YouTube Clone in React JS</div>
<div align="center">
  <img src="https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white" alt="YouTube Clone Logo" width="150" height="60" />
</div>
<br>
<!-- ![YouTube Clone Logo](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white) -->

This project is a YouTube clone built using React JS, React Router DOM, Redux, and various other libraries. It offers a rich user experience with features like responsive design, live chat, search functionality, sidebar toggling, debouncing for search, memoization/caching for optimizing API calls, and nested comments using recursion of components. The project is an educational endeavor to explore React and its ecosystem.

## 📌 Live Demo

👉 [Visit Here - YouTube Clone](https://youtube-reactjs-redux-madhavsahi.netlify.app/ "Live Link")

## 📌 Repository

👉 [GitHub Repository - YouTube Clone](https://github.com/MadhavSahi/YouTube-ReactJS "Repo Link")

## 📌 Libraries and Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router DOM**: For handling routing and navigation in the application.
- **Redux Toolkit**: To manage the global state and store.
- **React Icons**: To include various icons throughout the application.
- **Tailwind CSS**: For modular and responsive styling.
- **YouTube Data API**: For fetching video content and suggestions.
- **UUID**: For generating unique keys for elements.

## 📌 Key Features

### YouTube API Integration:

- The application seamlessly integrates with the YouTube API, allowing it to retrieve a wide range of video content directly from YouTube's vast library. 
- Through the power of the `fetch` method, the app dynamically fetches video details, including titles, descriptions, thumbnails, and channel information, ensuring that users have access to the latest and most relevant videos. This real-time data integration keeps the content fresh and also provides users with a diverse selection of videos across various genres and interests. 

### React Router DOM

- Utilizes React Router DOM for handling routing and navigation within the application. Allows seamless navigation between different views, such as the homepage, video playback, search results, and live chat.

### Redux State Management

- Employs Redux Toolkit to efficiently manage global state and store data. Ensures data consistency and accessibility across different components.
- SideBar toggling, Search Suggestions, Live Chat Data, Search suggestions caching functionaliity is achieved through Redux.

### Responsive Design

- The application is designed to be responsive, providing an optimal viewing experience on various devices and screen sizes. It adapts to different screen resolutions and orientations.

### Live Chat

- Implements a real-time chat functionality that enables users to interact with each other while watching live videos. Messages are displayed in a scrollable chat window and updated in real-time.
- User can enter their own message and can see that in Live Chat Window.

### Search Functionality

- Offers a robust search feature that allows users to search for videos by keywords.
- Utilizes debouncing to optimize API calls and enhance user experience.
- Provides auto-suggestions as users type in the search bar, enhancing usability using the **Suggestions API**.

### Sidebar Toggling

- Features a sidebar that users can toggle on or off on click of HamBurger menu. The sidebar provides quick access to navigation links, such as Home, Shorts, Videos, and Live. Users can easily show or hide the sidebar based on their preferences.

### Memoization and Caching

- Implements memoization and caching techniques thorugh Redux to optimize API calls and reduce redundant network requests. This improves application performance and speeds up content retrieval.

### Nested Comments

- Implements nested comments using recursion of components. Users can view and interact with comments and replies in a threaded and organized manner. Replies to comments are visually nested under their parent comments for a clear discussion structure.

### Modal Component 

- A modal component is implemented for user interactions, enhancing the user experience. The modal displays details about me, including contact information such as email, and links to my LinkedIn and GitHub profiles.


## 📌 How to Run Locally

1. Clone the repository from [YouTube - React JS : GitHub](https://github.com/MadhavSahi/YouTube-ReactJS.git).

   ```javascript
   git clone https://github.com/MadhavSahi/YouTube-ReactJS.git
   ```

2. Navigate to the project directory.

   ```javascript
   cd YouTube-ReactJS
   ```

3. Install the dependencies. :-

   ```javascript
   npm install
   ```

4. Create a `.env` file in the project root and add your YouTube Data API key :-
   ```javascript
   REACT_APP_YOUTUBE_API_KEY = your - youtube - api - key;
   ```
5. Start the development server.

   ```javascript
   npm start
   ```

6. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the app.

## 📌 Screenshots

![Landing Home Page](./youtube-reactjs/screenshots/youtube-ss-01.PNG)

<br>

![Video Watch Page + Sidebar collapse + Live Chat + Nested Comments](./youtube-reactjs/screenshots/youtube-ss-002.png)

<br>

![SearchBox Suggestions + Modal Component](./youtube-reactjs/screenshots/youtube-ss-03.PNG)

## 📌 Tech Stack

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

## 📌 Future Improvements

- User authentication and personalization features.
- Video upload functionality.
- Implementing comments and likes.
- Further optimization for performance and user experience.

## 📌 Contributors

### Madhav Sahi
- Email : madhavsahi16@gmail.com
- LinkedIn - [Click here](https://www.linkedin.com/in/madhav-sahi-6a2305161/ "LinkedIn Link")
- GitHub - [Click here](https://github.com/MadhavSahi "GitHub Link")

## 📌 License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

Feel free to contribute, report issues, or provide feedback!

## 📌 Acknowledgements

- Icons used for Tech Stack section :- [shields.io](https://img.shields.io)
