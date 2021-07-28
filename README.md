This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contentful Notes

- [ ] Use `Link` and `Media` content models for embedded content into blog posts.
- [ ] If linking content that is on the site itself omit https://getsession.org.\
      e.g. `https://getsession.org/blog/onion-requests-session-new-message-routing-solution/` => `/blog/onion-requests-session-new-message-routing-solution/`

## Developer Notes

- Use the [Headwind](https://github.com/heybourn/headwind) VSCode extension for sorting TailWindCSS classes.
- Using the [classnames](https://www.npmjs.com/package/classnames) package we can organise our classes into groups that combine at build time.
- Always run `yarn run build && yarn run start` to see how the code works in a production environment before pushing to the server.

```jsx
  <div className={classNames(
    "general classes here - colors, fonts, padding, margin etc",
    "responsive class changes should have it's own string md: lg: etc."
    "placeholder classes",
    "animations, transforms, effect",
    "pseudo classes i.e hover, focus, active, etc.",
    "toggling classes i.e. NavMenu isExpanded"
  )}></div>
```

```css
.custom-class {
  @apply general classes here - colors, fonts, padding, margin etc;
  @apply responsive class changes should have it's own string md: lg: etc.;
  @apply placeholder classes;
  @apply animations, transforms, effect;
  @apply pseudo classes i.e hover, focus, active, etc.;
  @apply toggling classes i.e. NavMenu isExpanded;
}
```

### Gotchas

- We can't use template literals with classes if we want to purge the CSS.
  - https://github.com/tailwindlabs/tailwindcss/issues/2209#issuecomment-677855297
  - https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
  - I.e. `hover:bg-black hover:text-${bgColor}` won't work in production.

## Attributions

‘Android robot head’ by Google available at https://commons.wikimedia.org/wiki/File:Android_robot_head.svg under a Creative Commons Attribution Generic 2.5. Full terms at https://creativecommons.org/licenses/by/2.5/deed.en.
