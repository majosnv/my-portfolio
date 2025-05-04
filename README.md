# Portfolio Web Application

## Project Description

This is a personal portfolio web application created using React.js. The site presents professional experiences, projects, and skills of the developer. The application is responsive, with a modern design and smooth animations created using Framer Motion.

Live demo: https://panenko.netlify.app/

## Main Features

- Modern, responsive design
- Animations created with Framer Motion
- Projects section with GitHub links
- Overview of technical skills with icons
- Contact options
- Mobile device optimization

## Technologies

- React.js 19
- Tailwind CSS for styling
- Framer Motion for animations
- Iconify for icons

## Project Structure

```
my-portfolio/
│
├── public/                  # Static files
│   ├── index.html           # Main HTML file
│   ├── title.js             # JavaScript for dynamic title
│   ├── ja.png               # Profile image
│   ├── project1.png         # Project 1 image
│   └── project2.jpg         # Project 2 image
│
├── src/                     # Application source code
│   ├── components/          # React components
│   │   └── Portfolio.jsx    # Main portfolio component
│   ├── App.js               # Main React component
│   ├── index.js             # Application entry point
│   ├── App.css              # Styles for App.js
│   └── index.css            # Global styles
│
├── package.json             # Project configuration and dependencies
├── package-lock.json        # Exact versions of dependencies
└── tailwind.config.js       # Tailwind CSS configuration
```

## Installation and Running the Project

### Requirements

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation Steps

1. Clone the repository:
   ```bash
   git clone <your-repository-URL>
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   
4. Open a browser and visit: `http://localhost:3000`

### Creating a Production Version

To create an optimized production version:

```bash
npm run build
```

The resulting files will be saved to the `build/` folder and are ready for deployment.

## File Explanation

### Key Files

- **src/components/Portfolio.jsx** - Main component containing the entire portfolio including projects section, skills, and contacts
- **src/App.js** - Root React component that renders the Portfolio component
- **public/index.html** - Basic HTML file with metadata and links to static resources
- **tailwind.config.js** - Tailwind CSS configuration, defines custom colors and fonts
- **public/title.js** - JavaScript for dynamic browser title changes

### Directories

- **public/** - Contains static files such as images, icons, and HTML template
- **src/** - Contains all application source code
- **src/components/** - Contains React components for individual parts of the application

## Content Modification

To modify the portfolio, simply edit the `src/components/Portfolio.jsx` file:

- The `projects` array to update displayed projects
- The `skills` array to update displayed skills
- The contact section at the bottom of the file
