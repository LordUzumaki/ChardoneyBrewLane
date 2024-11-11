## Chardoney Brew Lane

Chardoney Brew Lane is a full-stack web application for a coffee shop, providing an online menu, shopping cart functionality, and an admin interface for managing coffee products. This project demonstrates a complete stack deployment, including frontend, backend, database, containerization, and CI/CD integration.

## Technologies Used
Frontend: React (with Vite), Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT-based user authentication
Containerization: Docker
CI/CD: GitHub Actions for automated build and deploy
Deployment: (Add your cloud provider if deployed, e.g., AWS)
Features
User authentication and authorization for regular users and admins
Coffee product listing and cart functionality
Admin dashboard for product management (CRUD operations for coffee items)
Responsive design for mobile and desktop
Order summary and checkout capabilities

## Installation and Setup

Clone the Repository:

git clone https://github.com/lorduzumaki/ChardoneyBrewLane.git
cd ChardoneyBrewLane
Setup Environment Variables:

Create a .env file in the root directory of backend and add the following:

MONGO_URI=<your_mongo_connection_string>
JWT_SECRET=<your_jwt_secret>
API_BASE_URL=http://localhost:5000

Docker Setup:

To simplify running the application, use Docker Compose:

docker-compose up -d
This will start the backend, frontend, and MongoDB in containers.
Running the Application Locally
If you prefer to run without Docker:

Install Dependencies:

Frontend:

cd client
npm install

Backend:

cd ../server
npm install
Start the Services:

Backend:

npm start

Frontend:

npm run dev
Access the Application:

Frontend: http://localhost:5173
Backend API: http://localhost:5000/api
Deployment
The project uses GitHub Actions for CI/CD:

CI/CD Pipeline: Each push triggers a GitHub Actions workflow, building the Docker images and deploying.

Secrets Configuration: Set up the following secrets in your GitHub repository:
Any other relevant secrets for deployment.
Usage and Screenshots
Home Page: Displays coffee items available for purchase.

Cart: Users can add items to their cart and view the total.

Admin Dashboard: Admins can add, edit, or delete coffee items.

API Documentation

Endpoint	        Method	     Description
/api/coffee	         GET	    Get all coffee items
/api/coffee/add	    POST	    Add a new coffee item (admin only)
/api/orders/cart	POST	    Add item to cart
/api/orders/cart	GET	        View cart items
/api/users/login	POST	    User login and get token
Contributing
We welcome contributions! Please follow these guidelines:

Fork the repository.
Create a new branch for your feature.
Commit your changes following the commit style guidelines.
Push the branch and create a Pull Request.

License
This project is licensed under the MIT License.


