# CTAGA homepage concept

A redesign concept for the Chisholm Trail Antique Gun Association (Benton, KS),
built as a pitch to replace their current site at ctaga.com. It's a design sample,
not the club's official website.

## What's here

- `index.html`: a single-page homepage with all its CSS and a small menu script inline
- `images/`: club photos (from their older ctaga.net site) and the 1957 charter

No build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8766
```

## What it fixes compared to the current site

- Gun show dates, hours, admission and vendor table info as real text, not PDF flyers
- A public events calendar, with "TBA" where 2027 dates aren't set yet
- A clear explanation of how to join, including dues and the sponsor process
- Mobile layout, page title and description, and event structured data

The page is marked `noindex` so the concept doesn't compete with the club's real site
in search results. Remove that tag and `robots.txt` if this becomes the live site.
