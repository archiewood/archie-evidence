# Markdoc Partials Support for Evidence

This project now supports Markdoc partials, allowing you to create reusable content snippets that can be included in your Evidence pages.

## How to Use

### 1. Create Partials

Store your reusable content in the `partials/` directory as markdown files:

```
partials/
├── social-links.md
├── profile-header.md
└── any-other-partial.md
```

### 2. Include Partials in Your Pages

Use the following syntax in your Evidence markdown files to include a partial:

```markdown
{% partial file="social-links" /%}
```

Or with the `.md` extension:

```markdown
{% partial file="social-links.md" /%}
```

### 3. Build Process

The partials are automatically processed when you run:

- `npm run dev` - For development
- `npm run build` - For production builds

The preprocessing happens automatically before Evidence builds your pages.

## Example Usage

In your `pages/index.md`:

```markdown
---
title: My Page
---

{% partial file="profile-header" /%}

{% partial file="social-links" /%}

Rest of your content...
```

## Available Commands

- `npm run preprocess` - Manually run the Markdoc preprocessor
- `npm run preprocess:restore` - Restore original pages from backup

## How It Works

1. Before Evidence builds, the preprocessor scans all markdown files in the `pages/` directory
2. It looks for `{% partial file="..." /%}` tags
3. Replaces these tags with the content from the corresponding file in `partials/`
4. Creates a backup of original files in `.evidence/pages-backup/`
5. Evidence then processes the files with partials already included

## Benefits

- **Reusability**: Define content once, use it in multiple pages
- **Consistency**: Ensure consistent formatting across pages
- **Maintainability**: Update content in one place, reflects everywhere
- **Clean Code**: Keep your pages focused on unique content

## Notes

- Partials can include other partials (recursive processing)
- The preprocessor warns if a partial file is not found
- Original files are backed up before processing
- Partials support full markdown syntax and Evidence components