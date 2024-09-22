# TutorTap

TutorTap is a platform designed to connect university students with tutors in a more efficient and streamlined way. The inspiration for the project comes from the common challenges faced by students in finding timely and reliable academic help. TutorTap aims to bridge that gap by providing an easy-to-use solution for students and tutors alike.

## Inspiration

The idea for TutorTap was inspired by the difficulty many students face in accessing help for their university courses. Our goal was to create a tool that makes it easier to connect with tutors, speeding up the process and providing a more effective learning experience.

## What It Does

TutorTap connects tutors and students, allowing them to interact more efficiently. The platform offers:

- **Student and Tutor Sign-up:** Separate registration flows for students and tutors.
- **Find Tutors:** A search function for students to quickly find available tutors based on subjects or areas of expertise.
- **Login and Authentication:** Secure login using Auth0 for easy access.
- **Future Enhancements:** Video chat and messaging functionality for real-time interaction between students and tutors (in progress).

## Tech Stack

- **Frontend:** React, React Bootstrap
- **Backend:** NestJS, MongoDB Atlas
- **Authentication:** Auth0
- **Database:** MongoDB Atlas (Cloud)
- **API Testing:** Postman

## How We Built It

The application is built using a combination of technologies to provide a seamless user experience:

- **Frontend:** Built with React and styled using React Bootstrap. The frontend is designed to offer intuitive navigation with clear separation between student and tutor user interfaces.
- **Backend:** The backend is powered by NestJS, handling API requests and database operations. MongoDB Atlas is used for data storage.
- **Authentication:** We integrated Auth0 for secure user authentication, including role-based access control (students and tutors).
- **Database:** Collections for students and tutors are set up and tested using Postman API.

## Challenges We Ran Into

While developing TutorTap, we encountered several challenges:

- **Merge Conflicts:** Managing and resolving code conflicts during the collaborative development process.
- **Project Incompletion:** At this stage, the backend is 75% complete, and the frontend is 90% done. We still need to connect the two layers via APIs.
- **Feature Development:** We are missing some key features, including profile pages and complete API communication between frontend and backend.

## Accomplishments We're Proud Of

- **Team Collaboration:** Despite the challenges, we successfully connected with each other and worked as a team in our first Hackathon.
- **Learning:** We gained hands-on experience with new technologies, including Auth0 and MongoDB Atlas, which was invaluable for our growth as developers.
- **Building Something New:** This was our first hackathon, and we’re proud of the progress we made, even though the project isn't fully complete yet.

## What We Learned

Throughout this project, we learned:

- How to integrate **Auth0** for authentication and role-based access.
- The basics of working with **MongoDB Atlas** for cloud database storage.
- Frontend development using **React**, as well as how to structure and style pages with **React Bootstrap**.

## Next Steps for TutorTap

Our roadmap includes the following enhancements:

- **Profile Pages:** Implement profile pages for both students and tutors, allowing them to showcase their details and expertise.
- **API Integration:** Complete the API communication between the frontend and backend. Currently, CORS has been enabled in the backend, but the connection is not yet functional.
- **API Authentication & Protection:** Finalize the NestJS backend, including authentication using Auth0 to protect API routes.
- **Video Chat & Messaging:** Implement real-time interaction features, including video chat and a message box for seamless communication between students and tutors.
- **Testing:** Conduct further testing with Auth0, including verifying API authentication, audience keys, and full integration of security layers.

## Future Enhancements

In addition to the core functionality, we plan to add:

- **Advanced Search Features:** Enhance the search functionality with filters for subject expertise, tutor availability, and more.
- **Rating System:** Implement a rating and feedback system for students to rate their tutoring sessions.
- **Calendar Integration:** Allow tutors and students to schedule sessions and sync with their calendars.
- **Mobile App:** Explore the potential for a mobile app version of TutorTap for on-the-go access.

## How to Run the Project Locally

### Prerequisites

- Node.js (>= 16.x)
- npm or Yarn
- MongoDB Atlas account for database access
- Auth0 account for authentication

### Installation
   ```bash
   git clone https://github.com/yourusername/tutortap.git
   cd tutortap
   npm install
   ```
