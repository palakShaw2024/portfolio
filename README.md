# React + Vite

# Developer Portfolio
A personal portfolio showcasing projects, skills, theme-based styling, and a resume viewer. Built with Vite + React and custom CSS.

# Features
 @ Day-based theme selector with persistent choice (localStorage)
 @ Profile, Skills (with tooltips), Projects, Comments/Feedback sections
 @ Resume section with view/download buttons (linkable)
 @ Responsive layout and smooth CSS animations
 @ Easy theming using CSS variables

 
# Project Structure
portfolio/
public/ — static assets
src/
App.jsx, App.css — app entry and global styles
main.jsx — React entry
components/
code.jsx — main portfolio component (sections, state, handlers)
codes.css — component styles
assets/ — images used in themes and projects


# Build (production)
@ How to Use / Customize
  Theme colors: edit the themes object in code.jsx to change primary, secondary, and images.
  Resume links: replace placeholder Google Docs URLs in the resume section with your resume                     PDF or public link.
  Add projects: update the projects array in code.jsx with name, icon, url, and image.
  Skill tooltips: update skillInfo mapping in code.jsx to tweak hover descriptions.
  Accessibility & Performance Notes
Headings use gradient text with fallbacks for better readability on non-WebKit browsers.
Animations respect responsiveness; consider adding prefers-reduced-motion support if needed.
Keep images optimized (compressed) to improve load times.

# Common Commands
Install: npm install
Dev: npm run dev
Build: npm run build
Preview production build: npm run preview
Troubleshooting

License
Add your preferred license information here (e.g., MIT).

Would you like a shorter README or a version with badge links (build/status, license, contact) included?
