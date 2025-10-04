
# neo-ram-prisma

![Oficial Repository] (https://github.com/Neo-Ram/prisma-ui-library)
![npm version](https://img.shields.io/npm/v/neo-ram-prisma)
![npm downloads](https://img.shields.io/npm/dt/neo-ram-prisma)

> **Current version:** 0.0.4

An accessible and customizable React component library.

## Installation

```bash
npm install neo-ram-prisma
```

## Available variants

- **variant**: `primary`, `secondary`, `success`, `warning`, `danger`
- **size**: `xs`, `sm`, `md`, `lg`, `xl`
- **fontSize**: `fs-xs`, `fs-sm`, `fs-md`, `fs-lg`, `fs-xl`
- **colorVision**: `normal`, `protanopia`, `deuteranopia`, `tritanopia`
- **accessibility**: `default`, `low-vision`, `high-contrast`

## Usage example

```tsx
import { Button } from 'neo-ram-prisma';

export default function Demo() {
  return (
    <Button
      variant="primary"
      size="md"
      fontSize="fs-md"
      colorVision="normal"
      accessibility="default"
      isLoading={false}
      disabled={false}
    >
      Accessible Button
    </Button>
  );
}
```

---


**Autors:** Neo-Ram & OmarMur