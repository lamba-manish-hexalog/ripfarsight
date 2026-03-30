#!/bin/bash
set -e

echo "🚀 RipFarSight Deployment — $(date)"
cd /var/www/ripfarsight

echo "📦 Pulling latest code..."
git pull origin main

echo "🔧 Installing backend dependencies..."
cd backend && npm ci && npm run build && cd ..

echo "🎨 Installing frontend dependencies..."
cd frontend && npm ci && npm run build && cd ..

echo "🔄 Restarting backend..."
pm2 restart rfs-backend

echo "✅ Deployment complete!"
