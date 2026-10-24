# DOSIVYA – Never Miss Your Medicine.

A static, installable (PWA) medicine reminder app: schedules, reminder popups with Taken / Snooze / Skip, missed-dose tracking, dose history, refill alerts and settings. Data is stored in the browser's LocalStorage. There is no backend and no build step.

## Run locally
    npm start            # serves ./public on http://localhost:3000
    npm run check        # compiles the app script and validates config/assets

## Deploy (Vercel)
Framework preset: **Other** · Build command: *(none)* · Output directory: `public` (already set in `vercel.json`).

## Limitations
Reminders fire while DOSIVYA is open (tab or installed app that is still running). Browsers cannot guarantee alarms when the app is closed, the device is off, or battery-saver blocks background activity. Reliable background alarms need a native Android app (exact alarms) or a backend with push notifications.

## Disclaimer
DOSIVYA is a medicine reminder application. It does not provide medical advice, diagnose medical conditions, prescribe medicines, or recommend changes to medication doses. Always follow your healthcare professional's instructions.
