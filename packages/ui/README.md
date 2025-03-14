# @genii/ui

This package contains shared UI components for the Genii platform, built with shadcn/ui and TailwindCSS 4.

## Installation

The UI package is already included in the monorepo, so you don't need to install it separately. Just import the components you need in your application.

## Usage

### Importing Components

You can import components directly from the `@genii/ui` package:

```tsx
import { Button, Input, Label, Card } from "@genii/ui";

// Use the components in your application
function MyComponent() {
  return (
    <div>
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
      <Button>Submit</Button>
    </div>
  );
}
```

### Available Components

The following components are available:

- `Button`: A customizable button component with various styles and sizes
- `Input`: A text input component
- `Label`: A label component for form elements
- `Card`: A card component with header, content, and footer sections

### Styling

All components use a monochrome base with zinc as the primary color. The components are designed to work with both light and dark modes.

### Customizing Components

You can customize the appearance of components by passing a `className` prop:

```tsx
<Button className="bg-blue-500 hover:bg-blue-600">Custom Button</Button>
```

## Adding New Components

To add new components to the UI package:

1. Create a new file in the `src/components/ui` directory
2. Implement the component following the shadcn/ui pattern
3. Export the component from the `src/index.ts` file

## Building

To build the UI package:

```bash
cd packages/ui
pnpm run build
```
