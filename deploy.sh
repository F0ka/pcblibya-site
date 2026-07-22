#!/bin/bash
set -e

cd "$(dirname "$0")"

if [ ! -d node_modules ]; then
  echo "node_modules not found — installing dependencies..."
  npm install
fi

npm run build

echo ""
echo "Build complete. nginx serves the static site from: /var/www/pcblibya.com/out"
echo "Make sure your nginx root points there (this script lives in app/, out/ is generated next to it)."
