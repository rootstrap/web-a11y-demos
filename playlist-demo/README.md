# Playlist example

This demo contains the implementation of a simple playlist. The currently playing video is located on the left of the screen and the list with all the videos is on the right side. Each video tile contains the video title, duration, and progress information. Users can change the video by selecting it in the list.

This demo is divided into **three** different implementations, considering going from not accessible at all, then somewhat accessible, and totally accessible. The purpose of this example is to understand the difference between each of these implementations.

### Bad semantic

Structural, semantic HTML is the key starting point toward good accessibility practices. When a screen reader, or any sort of assistive device scans a web page, it gets information about the DOM, or the HTML structure of the page. No styles or JavaScript will be read by a screen reader. In this example we found the following:

- There is an abuse of the use of `<divs>` tags. There is no semantic difference between the title of the pages, video items, or links.
- Bad practice using _onClick_ function to link redirection instead of `<a>` tags. Links are not accessible using the keyboard or screen reader. It's impossible to navigate to a video using these tools.

### Good semantic

When we write semantically correct HTML, we’re letting the browser know what type of content it’s dealing with and how that content relates to other content. By doing this, assistive technology is more easily able to do its job because it has a structure that it can work with. In this example we found the following:

- Good semantics for the labeling of texts using heading. The page title is using`<h1>` while the video title is using `<h2>`.
- Good semantic for list creation using `<ol>` and wrapping each item with `<li>` tags.
- Correct implementation on video links using `<a>` tags. Links are now accessible by using the keyboard or screen reader. But, there are still several improvements that can be made.

### Really good semantic

## View the example in our code sandbox

Visit [link]()

### Run de example locally

1. Install dependencies with `npm install`
2. Start the project with `npm start`
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
