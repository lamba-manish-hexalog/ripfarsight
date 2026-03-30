#!/bin/bash
set -e

echo "🚀 RipFarSight Docker Deployment — $(date)"
cd /var/www/ripfarsight

echo "📦 Pulling latest code..."
git pull origin main

echo "🐳 Building and starting containers..."
docker compose pull --ignore-buildable
docker compose build --no-cache
docker compose up -d

echo "⏳ Waiting for DB to be healthy..."
docker compose wait db

echo "🔄 Running migrations and seed..."
docker compose run --rm migrate

echo "✅ Deployment complete!"
echo ""
echo "Services running:"
docker compose ps
echo ""
echo "Frontend: http://localhost"
echo "Backend API: http://localhost:4000/health"
