Spilt it

Receipt Bill Splitter (AI + Manual Assignment)

Upload a receipt image, let AI extract the line items, then assign items to people and get a fair split. Unassigned amounts (tax/fees/missed items) are split evenly so the totals always add up.

Straight talk: Calling Anthropic (or any paid AI) from the browser is unsafe and will fail due to missing auth headers/CORS. You must put a tiny server in front (or switch to a client-side OCR like Tesseract.js). Details below.

Demo (local)

Upload receipt → 2) Click Analyze Receipt → 3) Add people → 4) Click names under each item to assign → 5) See per-person totals.

Features

📸 Receipt OCR/parse via AI → store, date, items, subtotal, tax, total (JSON).

👥 People manager → add, rename, remove.

🧮 Accurate split → split assigned items proportionally; split unassigned/taxes evenly.

⚠️ Hard JSON guard → strips code fences; JSON.parse with error UI.

🎨 Polished UI with Tailwind + lucide-react icons.

Tech

React (functional component + hooks)

Tailwind CSS classes in JSX (configure Tailwind or replace with your styles)

lucide-react icons

AI back end required (Anthropic Claude or your OCR of choice)
