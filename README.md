# User Management Application

A Vue 3 application for managing users, built with the following technologies:

-   **Vue 3**: Frontend framework
-   **Pinia**: State management
-   **TypeScript**: Typed JavaScript
-   **Vite**: Build tool
-   **Vitest**: Testing framework

## Features

-   **User Management**:
    -   Add, edit, and delete users.
    -   Search users by first name, last name, or email.
    -   Sort users by various fields (e.g., first name, last name, last visit).
-   **Pagination**:
    -   Display users page by page.
    -   Navigate between pages with previous/next buttons.
-   **Dynamic State Management**:
    -   Reactive state with `Pinia` for efficient data handling.

## Project Structure

The project is organized using a **[feature sliced design](https://feature-sliced.design/)** structure:

```plaintext
src/
├── app/
|   ├── router/
|   |   ├── index.ts         # Routes
│   ├── App.vue              # Root Vue component
│   ├── AppLayout.vue        # Basic Content Wrapper
├── features/
│   ├── userManagement/      # User management feature
│   └── filters/             # Filtering and sorting utilities
├── pages/                   # Pages ui
├── shared/                  # Reusable utilities and components
├── userList.json            # Sample user data
├── main.ts                  # Entry point for the application
```

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/ArtiomKuzmenok/user-list.git
    cd user-management
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the development server**:

    ```bash
    npm run dev
    ```

4. **Open the application**:
   Navigate to [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

Here are the available scripts for the project:

-   `npm run dev`: Start the development server.
-   `npm run build`: Build the application for production.
-   `npm run preview`: Preview the production build.
-   `npm run test`: Run all tests.
-   `npm run test:watch`: Run tests in watch mode.

## Testing

The project uses **Vitest** and **Vue Test Utils** for testing.

1. **Run all tests**:

    ```bash
    npm run test
    ```

2. **Run tests in watch mode**:
    ```bash
    npm run test:watch
    ```

Test files are located in the `__tests__` directories within each feature.

## Usage

### User Management

1. **Add Users**:

    - Use the "Add User" form to add a new user to the system.

2. **Edit Users**:

    - Click the "Edit" button next to a user to update their details.

3. **Delete Users**:

    - Click the "Delete" button to remove a user from the list.

4. **Pagination**:

    - Use the "Prev" and "Next" buttons to navigate between pages of users.

5. **Search**:

    - Use the search bar to filter users by their first name, last name, or email.

6. **Sorting**:
    - Click on column headers to sort users in ascending or descending order.

## Example Data

The application uses sample data from `userList.json`. You can replace this file with your own data for testing.

Example structure of `userList.json`:

```json
[
	{
		"id": 1,
		"firstName": "John",
		"lastName": "Doe",
		"email": "john.doe@example.com",
		"lastVisitedAt": 1672505600000
	},
	{
		"id": 2,
		"firstName": "Jane",
		"lastName": "Doe",
		"email": "jane.doe@example.com",
		"lastVisitedAt": 1672592000000
	}
]
```
