# Event Timeline Configuration Guide

## Overview
The Event Timeline section automatically shows/hides result and download buttons based on configured dates and times.

## Configuration File
All settings are in `.env.local` file in the project root.

## Environment Variables

### Event 1: Group Discussion Prelims Results
- **Date/Time Variable**: `NEXT_PUBLIC_EVENT1_RESULT_DATE`
- **Download URL Variable**: `NEXT_PUBLIC_EVENT1_RESULT_URL`
- **Format**: `YYYY-MM-DD HH:mm` (24-hour format)
- **Example**: `2026-02-21 18:00` (6:00 PM on Feb 21, 2026)

### Event 2: Country Allotment Results  
- **Date/Time Variable**: `NEXT_PUBLIC_EVENT2_RESULT_DATE`
- **Download URL Variable**: `NEXT_PUBLIC_EVENT2_RESULT_URL`
- **Format**: `YYYY-MM-DD HH:mm` (24-hour format)
- **Example**: `2026-02-21 20:00` (8:00 PM on Feb 21, 2026)

### Event 3: Position Paper Download
- **Date/Time Variable**: `NEXT_PUBLIC_EVENT3_DOWNLOAD_DATE`
- **Download URL Variable**: `NEXT_PUBLIC_EVENT3_DOWNLOAD_URL`
- **Format**: `YYYY-MM-DD HH:mm` (24-hour format)
- **Example**: `2026-02-22 10:00` (10:00 AM on Feb 22, 2026)

## How It Works

1. **Before the configured date/time**: 
   - Button appears as grayed out
   - Shows "Available on [date]" message
   - Not clickable

2. **After the configured date/time**:
   - Button becomes active with blue gradient
   - Clickable and links to the configured PDF/file
   - Opens in new tab

## Updating Configuration

### To change the release date/time:
Edit the `.env.local` file and update the date in `YYYY-MM-DD HH:mm` format.

Example:
```env
NEXT_PUBLIC_EVENT1_RESULT_DATE=2026-02-21 18:00
```

### To change the download file:
1. Place your PDF file in the `public/downloads/` folder
2. Update the URL in `.env.local`:

Example:
```env
NEXT_PUBLIC_EVENT1_RESULT_URL=/downloads/gd-prelims-results.pdf
```

## File Locations

### For Results/Downloads:
- Place all PDF files in: `public/downloads/`
- Example paths:
  - `public/downloads/gd-prelims-results.pdf`
  - `public/downloads/country-allotment-results.pdf`
  - `public/downloads/position-paper-template.pdf`

## Important Notes

1. **After changing .env.local**: Restart your development server
   ```bash
   # Stop the server (Ctrl+C)
   npm run dev  # Start again
   ```

2. **For production**: Make sure to set these environment variables in your hosting platform's environment settings (Vercel, Netlify, etc.)

3. **Time Zone**: The dates are compared in the user's local timezone. Times in `.env.local` are treated as local time.

4. **Testing**: To test immediately, set the dates to a time in the past:
   ```env
   NEXT_PUBLIC_EVENT1_RESULT_DATE=2020-01-01 00:00
   ```

## Current Configuration

Check `.env.local` file for current settings.

Default configuration:
- Event 1 Results: Feb 21, 2026 at 6:00 PM
- Event 2 Results: Feb 21, 2026 at 8:00 PM  
- Event 3 Download: Feb 22, 2026 at 10:00 AM
