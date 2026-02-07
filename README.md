# MPowr Products Inc. Website

Corporate website for MPowr Products Inc., manufacturer of industrial door closers.

🌐 **Live site:** [mpowrproducts.com](https://www.mpowrproducts.com) (pending deployment)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Components:** Custom UI components (shadcn-inspired)
- **Deployment:** Vercel (planned)

## Features

- ✅ Responsive design (mobile-first)
- ✅ Modern industrial aesthetic
- ✅ Product catalog (MP-800 series)
- ✅ Quote request form
- ✅ Contact form
- ✅ Distributor portal with compliance docs
- ✅ SEO optimized with metadata
- 🔄 Shopify integration (planned)
- 🔄 Form email delivery (planned)

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── products/          # Products listing & details
│   ├── contact/           # Contact form
│   ├── quote/             # Quote request form
│   └── distributors/      # Distributor portal
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ui/               # Reusable UI components
└── lib/                  # Utilities
    └── utils.ts
```

## Compliance Documents

The `/public/docs/` folder contains regulatory compliance documents:
- USMCA Certificate 2026
- EU RoHS Compliance Letter
- MP-800 Specification Sheets

## Deployment

### Vercel (Recommended)

1. Connect this repository to Vercel
2. Configure the custom domain: `www.mpowrproducts.com`
3. Deploy

### Environment Variables

For form handling (when implemented):
```
RESEND_API_KEY=your_resend_key
CONTACT_EMAIL=info@mpowrproducts.com
```

For Shopify integration (when implemented):
```
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_TOKEN=your_token
```

## License

Private - MPowr Products Inc. All rights reserved.
