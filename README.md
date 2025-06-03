# Harmony - Life Management System

A beautiful and comprehensive life management system built with Next.js, React, and Tailwind CSS. Harmony helps you organize your time, studies, goals, and finances all in one place.

## Features

- **Life Minute Tracker**: Plan and track your day by the minute with a drag-and-drop interface
- **Study Organizer**: Manage your academic life with calendar integration and assignment tracking
- **Progress Tracker**: Set and visually track personal goals
- **Weekly Planner**: Plan your week with a clean visual format
- **Finance Tracker**: Track expenses and income with spreadsheet functionality

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI
- **Icons**: Heroicons
- **Database**: Prisma with your choice of database
- **Authentication**: JWT with bcrypt for password hashing

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/JBell2003/Harmony.git
   ```

2. Install dependencies:
   ```bash
   cd harmony
   npm install
   ```

3. Set up your environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
harmony/
├── src/
│   ├── app/
│   │   ├── time-tracker/
│   │   ├── study/
│   │   ├── goals/
│   │   ├── planner/
│   │   ├── finance/
│   │   └── layout.tsx
│   ├── components/
│   │   └── Navigation.tsx
│   └── lib/
├── public/
├── prisma/
└── package.json
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
