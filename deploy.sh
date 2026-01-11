#!/bin/bash

# LoveAll.ai Website Deployment Script
# Usage: ./deploy.sh

# Configuration
EC2_HOST="52.80.97.172"
SSH_KEY="/Users/xinyuguo/Desktop/Tech_Hack/Intelligent_Tennis/AWS/tennais.pem"
EC2_USER="ec2-user"

echo "🚀 Starting deployment to v0.loveall.com.cn..."

# Build production bundle
echo "📦 Building production bundle..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Create tarball
echo "📦 Creating tarball..."
cd dist
tar -czf ../website-update.tar.gz .
cd ..

# Upload to EC2
echo "⬆️  Uploading to EC2..."
scp -o StrictHostKeyChecking=no -i "$SSH_KEY" website-update.tar.gz $EC2_USER@$EC2_HOST:/tmp/

# Deploy on EC2
echo "🔧 Deploying on EC2..."
ssh -o StrictHostKeyChecking=no -i "$SSH_KEY" $EC2_USER@$EC2_HOST << 'EOF'
cd /tmp
tar -xzf website-update.tar.gz
sudo rm -rf /usr/share/nginx/html/*
sudo cp -r * /usr/share/nginx/html/
sudo chown -R nginx:nginx /usr/share/nginx/html
sudo systemctl reload nginx
rm -f website-update.tar.gz
echo "✅ Files deployed and nginx reloaded"
EOF

# Cleanup
echo "🧹 Cleaning up..."
rm website-update.tar.gz

echo ""
echo "✅ Deployment complete!"
echo "🌐 Visit: https://v0.loveall.com.cn"
