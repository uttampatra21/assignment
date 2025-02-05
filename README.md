Next.js Transactions Dashboard
This project is a Transactions Dashboard built using Next.js, featuring pagination, search, sorting, and data download functionalities. The dashboard displays transaction details in a table format and allows users to interact with the data efficiently.

Features

Pagination: Navigate through the table data with ease using the pagination controls.
Search Functionality: Filter transactions by Order ID using the search bar.
Sorting Functionality: Sort the table data based on different criteria:
Order Amount (Low to High)
Order Amount (High to Low)
Date (Latest to Oldest)
Date (Oldest to Latest)
Download Data: Download the table data in an Excel file format with a single click.
Detailed View: Click on an Order ID to be redirected to a new page displaying detailed transaction information.
Getting Started
Prerequisites
Node.js (version 12.x or later)
npm (version 6.x or later) or yarn
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/nextjs-transactions-dashboard.git
Navigate to the project directory:
bash
Copy code
cd nextjs-transactions-dashboard
Install the dependencies:
bash
Copy code

npm install

# or

yarn install

Setting Up the Project :

Environment Variables: Create a .env.local file in the root directory to store your environment variables. Add any necessary configuration settings, such as API endpoints, database connection strings, or authentication keys. For example:
env

Copy code :

NEXT_PUBLIC_API_ENDPOINT=https://api.example.com
Data Source: Ensure you have a data source for transactions. You can either use a mock data file or connect to an external API. For development purposes, you might want to use a mock data file. Create a file named data.js in the utils directory and add your mock data there.

Running the Project: Start the development server:

bash
Copy code
npm run dev

# or

yarn dev
Open your browser and navigate to http://localhost:3000 to see the dashboard in action.

Project Structure :

pages/: Contains the main pages for the Next.js application.
index.js: The main page displaying the transactions table.
[orderId].js: The detailed transaction information page for a specific Order ID.
components/: Contains the reusable components used throughout the project.
Table.js: The table component displaying the transaction data.
Pagination.js: The pagination component.
Search.js: The search bar component.
SortControls.js: The component for sorting controls.
DownloadButton.js: The download button component.
styles/: Contains the CSS files for styling the components.
utils/: Contains utility functions used in the project.
data.js: Functions for handling data operations like sorting, filtering, and pagination.

Usage

Pagination :

The pagination controls are located at the bottom of the table. Use them to navigate through the pages of transaction data.

Search :

The search bar is located above the table. Enter an Order ID to filter the transactions and display only the relevant results.

Sorting :

The sorting controls are located above the table. Click on the respective buttons to sort the table data by Order Amount or Date.

Download Data :

The download button is located above the table. Click on it to download the current table data in an Excel file format.

Detailed View :

Click on any Order ID in the table to be redirected to a new page displaying detailed information about the selected transaction.

Contact

For any questions or inquiries, please contact 6294718722