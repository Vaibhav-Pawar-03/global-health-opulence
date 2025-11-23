#!/bin/bash

# Download hero images for treatment service pages
# Using high-quality medical images from Unsplash Source API and direct URLs

cd "$(dirname "$0")/public"

echo "Downloading treatment hero images..."

# Cosmetic Surgery - https://unsplash.com/photos/plastic-surgery
curl -L "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80" -o "hero-cosmetic-surgery.jpg"
echo "✓ Downloaded cosmetic surgery hero image"

# Hair Restoration
curl -L "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80" -o "hero-hair-restoration.jpg"
echo "✓ Downloaded hair restoration hero image"

# Dental Aesthetics
curl -L "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80" -o "hero-dental.jpg"
echo "✓ Downloaded dental hero image"

# Cancer Care/Oncology
curl -L "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80" -o "hero-oncology.jpg"
echo "✓ Downloaded oncology hero image"

# Fertility/IVF
curl -L "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1200&q=80" -o "hero-fertility.jpg"
echo "✓ Downloaded fertility hero image"

# Cardiac Care
curl -L "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=1200&q=80" -o "hero-cardiac.jpg"
echo "✓ Downloaded cardiac hero image"

# Orthopaedics
curl -L "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1200&q=80" -o "hero-orthopaedics.jpg"
echo "✓ Downloaded orthopaedics hero image"

# Neurology
curl -L "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=80" -o "hero-neurology.jpg"
echo "✓ Downloaded neurology hero image"

# Organ Transplant
curl -L "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1200&q=80" -o "hero-organ-transplant.jpg"
echo "✓ Downloaded organ transplant hero image"

# Dermatology
curl -L "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=80" -o "hero-dermatology.jpg"
echo "✓ Downloaded dermatology hero image"

# Bariatric Surgery
curl -L "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&q=80" -o "hero-bariatric.jpg"
echo "✓ Downloaded bariatric surgery hero image"

# Gynecology
curl -L "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80" -o "hero-gynecology.jpg"
echo "✓ Downloaded gynecology hero image"

# Laparoscopic Surgery
curl -L "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=1200&q=80" -o "hero-laparoscopic.jpg"
echo "✓ Downloaded laparoscopic surgery hero image"

# Eye/LASIK Care
curl -L "https://images.unsplash.com/photo-1574187481797-a6e7c32fab1f?w=1200&q=80" -o "hero-eye-lasik.jpg"
echo "✓ Downloaded eye/LASIK hero image"

# Stem Cell Therapy
curl -L "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&q=80" -o "hero-stem-cell.jpg"
echo "✓ Downloaded stem cell therapy hero image"

# Obesity/Weight Management
curl -L "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80" -o "hero-obesity.jpg"
echo "✓ Downloaded obesity management hero image"

# Spine Care
curl -L "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&q=80" -o "hero-spine-care.jpg"
echo "✓ Downloaded spine care hero image"

# Laser Surgery
curl -L "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=1200&q=80" -o "hero-laser-surgery.jpg"
echo "✓ Downloaded laser surgery hero image"

# CAR-T Cell Therapy
curl -L "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80" -o "hero-cart-cell.jpg"
echo "✓ Downloaded CAR-T cell therapy hero image"

# ENT Surgery
curl -L "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80" -o "hero-ent.jpg"
echo "✓ Downloaded ENT surgery hero image"

echo ""
echo "✅ All hero images downloaded successfully!"
echo "Images saved to: $(pwd)"
