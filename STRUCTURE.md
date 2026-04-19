# Project Structure

## Root

- `_config.yml` -- Jekyll site configuration (metadata, URLs, Google Analytics)
- `index.html` -- Homepage (uses the default layout)
- `404.html` -- Custom 404 error page
- `sitemap.xml` -- Auto-generated sitemap
- `robots.txt` -- Search engine crawling rules
- `gulpfile.js` -- Gulp build tasks (Sass, JS, BrowserSync)
- `package.json` -- Node.js dependencies
- `.nvmrc` -- Node version pin

## Folders

### `_includes/`

Reusable HTML partials loaded by Jekyll layouts:
`head.html`, `header.html`, `footer.html`, `about.html`, `projects.html`, `google-analytics.html`.

### `_layouts/`

Jekyll page layout. `default.html` is the only layout, used by the homepage and 404 page.

### `src/`

Source files processed by Gulp:
- `styles/` -- SCSS source files compiled to `assets/css/main.css`
- `js/` -- JavaScript source (`app.js`) compiled to `assets/js/main.js`
- `fonts/` -- Font source files copied to `assets/fonts/`
- `img/` -- Source images copied to `assets/img/`

### `assets/`

Built/static assets served by the site:
- `css/` -- Compiled CSS
- `js/` -- JavaScript (`main.js`, `sweet-scroll.min.js`, `navbar.js`)
- `fonts/` -- Web fonts (Font Awesome, Devicon)
- `img/` -- Site-wide images (project thumbnails, profile photo, favicon)

### `projects/`

Individual project pages, each in its own folder:
- `event-study/` -- Event study analysis of Spain's energy sector
- `spatial-norway/` -- BEV adoption and charging infrastructure in Norway
- `spatial-cancer/` -- Lip cancer incidence in Scotland (Pandoc-generated)
- `corruption/` -- Game theory model of corruption
- `hidden/` -- Hidden page (accessible via easter egg link on homepage)

Each project folder contains an `index.html` and may include an `images/` subfolder and a PDF of the paper.

### `aboutme/`

Standalone "About Me" page with bio, skills, and contact information.

### `downloads/`

Downloadable files. Contains `cv.pdf`.

### `_site/`

Jekyll build output (not committed to Git).

