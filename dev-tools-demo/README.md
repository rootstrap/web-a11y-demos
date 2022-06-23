# Playlist example

This demo contains the implementation of a simple playlist. The "currently playing video" is located on the left of the screen and the list with all the videos is on the right side. Each video tile contains the video title, duration, and progress information. Users can change the video by selecting it in the list.

This demo is divided into **three** different implementations, considering going from not accessible at all, then somewhat accessible, and totally accessible. The purpose of this example is to understand the difference between each of these implementations.

## View the example in our code sandbox

Visit [CodeSandbox demo](https://codesandbox.io/s/github/rootstrap/web-a11y-demos/tree/master/playlist-demo)

### Run de example locally

1. Install dependencies with `npm install`
2. Start the project with `npm start`
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Explanation

### Not accessible

Structural, semantic HTML is the key starting point toward good accessibility practices. When a screen reader, or any sort of assistive device scans a web page, it gets information about the DOM, or the HTML structure of the page. No styles or JavaScript will be read by a screen reader. In this example we found the following:

- There is an abuse of the use of `<divs>` tags. There is no semantic difference between the title of the pages, video items, or links.
- Bad practice using _onClick_ function to link redirection instead of `<a>` tags. Links are not accessible using the keyboard or screen reader. It's impossible to navigate to a video using these tools.

### Somewhat accessible

When we write semantically correct HTML, we’re letting the browser know what type of content it’s dealing with and how that content relates to other content. By doing this, assistive technology is more easily able to do its job because it has a structure that it can work with. In this example we found the following:

- Good semantics for the labeling of texts using heading. The page title is using`<h1>` while the video title is using `<h2>`.
- Good semantic for list creation using `<ol>` and wrapping each item with `<li>` tags.
- Correct implementation on video links using `<a>` tags. Links are now accessible by using the keyboard or screen reader. But, there are still several improvements that can be made.

### "Totally" accessible

Having semantically correct HTML allows assistive technology to easily do its job, but is that enough? There are occasional instances, for example, where content should be made available to screen reader users but hidden from sighted users. In the vast majority of cases, content that is available visually should be available to screen reader users, and vice versa.
There are a few cases where information or meaning is apparent visually but may not be apparent to screen reader users. In these cases, it may be appropriate to cause content to be read by a screen reader, but have the content remain invisible to sighted users.

There are several mechanisms that can be used for hiding content. In this example `sr-only` class is used. We can find the following improvements:

- Use of `aria-label` to give more context to screen readers.
- Use of `aria-hidden` to hide elements from screen readers.
- Addition of visual information using `sr-only` class name.
- `Helmet` to manage the document's head section.
- Wrapping buttons that correspond to navigation using `<nav>`
