---
title: Example Page Using Partials
---

# Example Page with Markdoc Partials

This page demonstrates the use of Markdoc partials for reusable content.

## Profile Section

Below is a profile section included from a partial:

{% partial file="profile-header" /%}

{% partial file="social-links" /%}

<LineBreak lines=1/>

## Benefits of Using Partials

1. **Consistency**: The social links and profile header above are defined once and can be reused across multiple pages
2. **Easy Updates**: Change the partial file, and all pages using it are automatically updated
3. **Clean Code**: Your page markdown stays focused on unique content

## How This Works

The content you see above comes from:
- `partials/profile-header.md` - Contains the profile image and name
- `partials/social-links.md` - Contains the social media links

When you build or run the dev server, these partials are automatically inserted into the page.

## Try It Yourself

1. Edit the files in the `partials/` directory
2. Run `npm run dev` to see the changes
3. All pages using those partials will be updated!

<Alert status="info">
  The original index.md file still contains the hardcoded content. You can update it to use partials instead for easier maintenance.
</Alert>