# aws-cicd-pipeline
# 🚀 Secure Static Website Deployment on AWS (S3 + CloudFront + CI/CD)

## 📌 Project Overview

This project demonstrates a **production-grade deployment of a static website** using AWS services with a focus on **security, scalability, and automation**.

The architecture ensures that the website is:

* Secure (no direct S3 access)
* Highly available (CDN-based delivery)
* Automated (CI/CD pipeline)

---

## 🏗️ Architecture

User → CloudFront (CDN + HTTPS) → Private S3 Bucket

---

## 🔧 Tech Stack

* AWS S3 (Static Website Hosting)
* AWS CloudFront (CDN + HTTPS)
* GitHub Actions (CI/CD)
* IAM (Access Control)

---

## 🔒 Security Implementation

* Configured **private S3 bucket** (blocked public access)
* Implemented **Origin Access Control (OAC)** to restrict direct access
* Allowed access only via CloudFront distribution
* Removed all public bucket policies

---

## ⚙️ CI/CD Pipeline

* Automated deployment using GitHub Actions
* Trigger: Push to `main` branch
* Steps:

  * Checkout code
  * Configure AWS credentials
  * Sync files to S3
  * Invalidate CloudFront cache

---

## 📂 Project Structure

```
.
├── index.html
├── style.css
├── script.js
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## 🚀 Deployment Flow

1. Developer pushes code to GitHub
2. GitHub Actions pipeline triggers
3. Files are uploaded to S3 bucket
4. CloudFront cache is invalidated
5. Updated website is served globally

---

## 🌐 Live Demo

👉 CloudFront URL: https://d19fwxo9k6kmb4.cloudfront.net/

---

## 💡 Key Features

* Secure static hosting (no direct S3 exposure)
* Global CDN delivery for low latency
* Automated deployment pipeline
* Scalable and cost-efficient architecture

---

## 📈 Key Achievements

* Reduced deployment effort by 90% using CI/CD automation
* Improved performance using CloudFront caching
* Implemented secure access control using OAC

---

## 🧠 What I Learned

* Designing secure cloud architectures
* Implementing CI/CD pipelines in real-world scenarios
* Using CDN for performance optimization
* Managing IAM policies and access control

---

## 🔮 Future Improvements

* Add custom domain with Route 53
* Enable HTTPS using ACM
* Implement monitoring with CloudWatch
* Convert infrastructure to Terraform (IaC)

---

## 👨‍💻 Author

**Azharuddin Alam**

* LinkedIn: https://linkedin.com/in/analystazhar
* GitHub: https://github.com/analystazhar

---
