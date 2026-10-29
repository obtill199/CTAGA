# CTAGA homepage concept

A redesign concept for the Chisholm Trail Antique Gun Association (Benton, KS),
built as a pitch to replace their current site at ctaga.com. This is a design
sample, not the club's official website.

## Preview

Open `index.html` directly, or serve this folder with `python3 -m http.server 8766`.
No build step or application dependencies are required. Google Fonts are optional;
the page uses system fallbacks if they cannot load.

- `index.html`: semantic page content and event structured data
- `styles.css`: responsive heritage design, print and reduced-motion styles
- `script.js`: mobile navigation and accessible event filters
- `events/`: downloadable all-day calendar invitation
- `images/`: existing club photos and the 1957 charter

## Visitor improvements

- Photography-led homepage, cream navigation, clearer typography and quick links
- Gun show, rendezvous, and community event filters with announced result counts
- Spring show calendar download, official show updates and directions
- Actionable RSVP and clinic inquiries, visitor FAQs and direct dues renewal
- Keyboard-friendly mobile menu with Escape, focus return and section focus
- Skip link, visible focus, reduced motion, and no-JavaScript navigation fallback

The spring and fall 2027 dates and $75 vendor tables were checked against
[the official gun show page](https://www.ctaga.com/gun-show) on October 28, 2026.
The obsolete fall 2026 checkout link was removed. Previous-show admission is
explicitly labeled; visitors are directed to the club for 2027 pricing and tickets.
Other club content and photos are inherited from the original concept and should
be reviewed by the club before launch. TBA events remain unconfirmed.

## Verification

Local browser checks cover 320, 390, 768, 1440 and 1920 pixel widths, image loading,
internal links, filters, mobile menu, keyboard FAQ use, skip link, reduced motion,
calendar dates, and navigation/events with JavaScript disabled. Screenshots and
verification evidence are kept locally in `review/`.

This concept remains marked `noindex, nofollow`. Keep that protection until the
club approves a launch; update both the robots meta tag and `robots.txt` then.
