# User Management Dashboard

This project is a React-based user management dashboard featuring CRUD operations, filtering, searching, sorting, pagination, and a modern glassmorphism UI.  
It uses the JSONPlaceholder API for demo user data.

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

## Features

- Table and card views for users
- Add, edit, and delete users (local state only)
- Filter and search by name, email, department
- Sort by clicking table headers
- Pagination with selectable page size
- Responsive, modern UI (glassmorphism)

## Development Challenges & Reflections

### Challenges Faced

- **State Management:**  
  Ensuring all CRUD actions update local state correctly, especially with pagination and filtering.
- **Pagination & Filtering:**  
  Keeping pagination in sync with filtered results and resetting page when filters change.
- **UI Consistency:**  
  Designing a clean, responsive UI that works well for both table and card views.
- **Mock API Limitations:**  
  Since JSONPlaceholder is read-only, all changes are local and reset on refresh.

### Improvements for Future

- **Backend Integration:**  
  Connect to a real backend API for persistent CRUD operations.
- **Better Error Handling:**  
  Add user feedback for failed actions and loading states.
- **Unit & Integration Tests:**  
  Add automated tests for components and logic.
- **Accessibility:**  
  Improve keyboard navigation and ARIA attributes for modals and controls.
- **Performance:**  
  Optimize rendering for large datasets (e.g., virtualization, infinite scroll).
- **User Roles & Permissions:**  
  Add support for different user roles and access levels.

---

## Learn More

See [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) for more details.

---
### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
