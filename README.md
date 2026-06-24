# StartUpLanding

A modern startup landing page template built with HTML, Tailwind CSS, and JavaScript.

This project includes a responsive landing page with marketing sections, pricing, features, and a contact page with form validation and localStorage persistence.

## Features

- Responsive landing page layout using Tailwind CSS
- Hero section, feature cards, pricing display, and video section
- Contact form with client-side validation
- Contact form data stored in browser `localStorage`
- Uses a custom Tailwind theme with brand colors and shadows
- Static files ready to open from the `dist` folder

## Project Structure

- `dist/index.html` — main landing page
- `dist/contact-us/contact.html` — contact form page
- `dist/contact-us/script.js` — form validation and localStorage logic
- `src/output.css` — compiled/custom stylesheet for the project
- `images-proj/` — project assets used across the site

## Usage

1. Open `StartUpLanding/dist/index.html` in your browser.
2. Navigate to the Contact page via the navigation menu.
3. Fill out the contact form and submit.
4. The form data is validated and saved to browser `localStorage`.

## Notes

- The contact form saves only the CV file name, not the uploaded file itself.
- This is a static project and does not require a backend server.

## Recommended Workflow

- Use a local static server if you want to test page navigation and asset loading more reliably.
- If you want to customize styles, edit `src/output.css` and reload the page.

## License

This project is provided for learning and demo purposes.
