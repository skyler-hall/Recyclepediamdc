# Content Updates Documentation for Project Maintainers

## Table of Contents

- [Overview](#overview)
- [How to Update Content](#how-to-update-content)
- [How to Add New Text](#how-to-add-new-text)
  - [Editing Existing Text](#editing-existing-text-without-adding-new-a-new-key)
  - [Adding New Text](#adding-new-text-new-key-value-pairs-etc)

## Overview

All text information is stored in JSON files in the `messages` folder.

This is because we are using the [next-intl](https://next-intl-docs.vercel.app/docs/introduction) library to handle internationalization (i.e. multi-language support).

## How to Update Content

To update content, you will need to edit the JSON files in the `messages` folder.

Each JSON file is named after the language it supports (e.g. `en.json` for English and `es.json` for Spanish).

Each JSON file is organized by page (e.g. `HomePage.json`, `ItemsPage.json`, `LearnPage.json`, etc.).

Some pages have multiple sections (names of components) (e.g. `HomePage.json` has `NavigationCard`, `PageCards`, `Footer`, etc.).

Each section has a set of key-value pairs.

The key is the name of the text you want to update.

The value is the text you want to update it to.

**Note:** If you are updating a key that already exists, the new value will overwrite the old value.

If you are adding a key-value pair that does not already exist, changing the name of an existing key, or deleting a key-value pair, the content on that page will not display properly.

## How to Add New Text

### Editing Existing Text Without Adding New a New Key

- Navigate to the JSON file in the `messages` folder.
- Edit the value section of the pair (i.e. modify the existing text to the desired text)

### Adding New Text (New Key-Value Pairs, etc.)

- Navigate to either the component or page in the `app/[locale]/` directory.
- If this is a new component, dynamically import the `useTranslations` hook from `next-intl`.
- Use the `t` function to update the text.

  It will roughly look like this: where any text being translate is wrapped in `{t('key')}`.

  ```jsx
  'use client';
  import { useTranslations } from 'next-intl';

  export default function NewComponent() {
    // Initialize translations for a specific section/page
    const t = useTranslations('PageName.sectionName');

    // Example of using different translation patterns:
    return (
      <div>
        {/* Basic text translation */}
        <h1>{t('title')}</h1>

        {/* Translation with variables */}
        <p>{t('welcome', { name: 'User' })}</p>

        {/* Raw translations for arrays/objects */}
        {t.raw('items').map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}

        {/* Nested translations */}
        <button>{t('buttons.submit')}</button>
      </div>
    );
  }
  ```

  Then add the corresponding translations to `messages/en.json`:

  ```json
  {
    "PageName": {
      "sectionName": {
        "title": "Page Title",
        "welcome": "Welcome, {name}!",
        "items": [
          {
            "title": "Item 1",
            "description": "Description 1"
          },
          {
            "title": "Item 2",
            "description": "Description 2"
          }
        ],
        "buttons": {
          "submit": "Submit"
        }
      }
    }
  }
  ```

**Note:** An exact copy of the structure will be needed for each language.
