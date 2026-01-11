# LoveAll.ai Website Deployment Guide

## Production Environment

- **Live URL**: https://v0.loveall.com.cn
- **EC2 Instance**: i-065e575963cc00a74 (52.80.97.172)
- **Region**: cn-north-1 (Beijing)
- **Instance Type**: t3.small
- **SSH Key**: tennais.pem

## Deployment Architecture

```
User → DNS → ALB (HTTPS) → EC2 (nginx) → Static Files
```

## How to Update the Website

### Option 1: Quick Update (Recommended for small changes)

1. **Make your changes locally** to the React code

2. **Build the production bundle**:
   ```bash
   npm run build
   ```

3. **Upload to EC2** (from project root):
   ```bash
   # Create tarball
   cd dist
   tar -czf ../website-update.tar.gz .
   cd ..

   # Upload to EC2
   scp -i /Users/xinyuguo/Desktop/Tech_Hack/Intelligent_Tennis/AWS/tennais.pem \
       website-update.tar.gz \
       ec2-user@52.80.97.172:/tmp/
   ```

4. **Deploy on EC2**:
   ```bash
   # SSH into EC2
   ssh -i /Users/xinyuguo/Desktop/Tech_Hack/Intelligent_Tennis/AWS/tennais.pem \
       ec2-user@52.80.97.172

   # Extract and deploy
   cd /tmp
   tar -xzf website-update.tar.gz
   sudo rm -rf /usr/share/nginx/html/*
   sudo cp -r * /usr/share/nginx/html/
   sudo chown -R nginx:nginx /usr/share/nginx/html

   # Reload nginx
   sudo systemctl reload nginx

   # Exit
   exit
   ```

5. **Verify**: Visit https://v0.loveall.com.cn to see your changes

### Option 2: Single File Update (e.g., demo video)

For updating individual files like videos or images:

```bash
# Upload the file
scp -i /Users/xinyuguo/Desktop/Tech_Hack/Intelligent_Tennis/AWS/tennais.pem \
    public/demo-video.mp4 \
    ec2-user@52.80.97.172:/tmp/demo-video-new.mp4

# Deploy it
ssh -i /Users/xinyuguo/Desktop/Tech_Hack/Intelligent_Tennis/AWS/tennais.pem \
    ec2-user@52.80.97.172 \
    "sudo mv /tmp/demo-video-new.mp4 /usr/share/nginx/html/demo-video.mp4 && \
     sudo chown nginx:nginx /usr/share/nginx/html/demo-video.mp4"
```

### Option 3: Automated Deployment Script

Create a deployment script `deploy.sh`:

```bash
#!/bin/bash

# Configuration
EC2_HOST="52.80.97.172"
SSH_KEY="/Users/xinyuguo/Desktop/Tech_Hack/Intelligent_Tennis/AWS/tennais.pem"
EC2_USER="ec2-user"

echo "Building production bundle..."
npm run build

echo "Creating tarball..."
cd dist
tar -czf ../website-update.tar.gz .
cd ..

echo "Uploading to EC2..."
scp -i $SSH_KEY website-update.tar.gz $EC2_USER@$EC2_HOST:/tmp/

echo "Deploying on EC2..."
ssh -i $SSH_KEY $EC2_USER@$EC2_HOST << 'EOF'
cd /tmp
tar -xzf website-update.tar.gz
sudo rm -rf /usr/share/nginx/html/*
sudo cp -r * /usr/share/nginx/html/
sudo chown -R nginx:nginx /usr/share/nginx/html
sudo systemctl reload nginx
rm -f website-update.tar.gz
EOF

echo "Deployment complete!"
echo "Visit: https://v0.loveall.com.cn"

# Cleanup
rm website-update.tar.gz
```

Make it executable: `chmod +x deploy.sh`

Then run: `./deploy.sh`

## Common Tasks

### Check nginx status
```bash
ssh -i /Users/xinyuguo/Desktop/Tech_Hack/Intelligent_Tennis/AWS/tennais.pem \
    ec2-user@52.80.97.172 "sudo systemctl status nginx"
```

### View nginx logs
```bash
ssh -i /Users/xinyuguo/Desktop/Tech_Hack/Intelligent_Tennis/AWS/tennais.pem \
    ec2-user@52.80.97.172 "sudo tail -f /var/log/nginx/access.log"
```

### Check deployed files
```bash
ssh -i /Users/xinyuguo/Desktop/Tech_Hack/Intelligent_Tennis/AWS/tennais.pem \
    ec2-user@52.80.97.172 "ls -lh /usr/share/nginx/html/"
```

### Restart nginx (if needed)
```bash
ssh -i /Users/xinyuguo/Desktop/Tech_Hack/Intelligent_Tennis/AWS/tennais.pem \
    ec2-user@52.80.97.172 "sudo systemctl restart nginx"
```

## AWS Resources to Maintain

### EC2 Instance
- **Keep running**: Don't stop or terminate the instance
- **Backups**: Consider creating AMI snapshots periodically
- **Updates**: Occasionally update system packages:
  ```bash
  sudo yum update -y
  ```

### SSL Certificate
- **Auto-renewal**: ACM certificates auto-renew
- **Monitoring**: Check certificate expiration in AWS Console → Certificate Manager

### Load Balancer
- **Health checks**: Monitor in AWS Console → EC2 → Target Groups
- **Target should show**: "healthy"

### DNS
- **Current CNAME records**:
  1. `_237a0d9da5ed93ed2571615116d2100c.v0` → ACM validation
  2. `v0` → `loveall-website-alb-464133003.cn-north-1.elb.amazonaws.com.cn`

## Troubleshooting

### Website not loading
1. Check ALB target health:
   ```bash
   aws elbv2 describe-target-health \
       --target-group-arn arn:aws-cn:elasticloadbalancing:cn-north-1:052133212682:targetgroup/loveall-website-tg/39ed14f6b02a5856 \
       --region cn-north-1
   ```

2. Check nginx status (see above)

3. Check security group rules allow traffic

### SSL certificate issues
- Verify certificate status in ACM console
- Check DNS CNAME records are correct

### Files not updating
- Clear browser cache (Cmd+Shift+R)
- Verify files deployed: `ls -lh /usr/share/nginx/html/`
- Check nginx config: `sudo nginx -t`

## Cost Optimization

Current monthly costs (approximate):
- EC2 t3.small: ~$15-20/month
- ALB: ~$16/month
- Data transfer: Variable

To reduce costs:
- Consider stopping EC2 during off-hours (requires automation)
- Use t3.micro if traffic is low (save ~50% on EC2)

## GitHub Repository

- **Repo**: https://github.com/Thewhey-Brian/loveall-website
- **Videos**: Stored with Git LFS

### Commit and Push Changes
```bash
git add .
git commit -m "Description of changes"
git push origin master
```

## Support

For AWS issues:
- AWS Console: https://console.amazonaws.cn/
- Region: cn-north-1 (Beijing)
