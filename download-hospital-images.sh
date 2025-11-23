#!/bin/bash

# Hospital Images Download Script
# This script attempts to download hospital logos/images

PUBLIC_DIR="/Users/karan/Documents/GHOwebsite/gho_website/public"

echo "📥 Downloading hospital images..."
echo "Target directory: $PUBLIC_DIR"
echo ""

# Create public directory if it doesn't exist
mkdir -p "$PUBLIC_DIR"

# Function to download image
download_image() {
    local url="$1"
    local output="$2"
    local hospital_name="$3"

    echo "⏳ Downloading: $hospital_name"

    if curl -L -f -s -o "$PUBLIC_DIR/$output" "$url"; then
        echo "✅ Success: $output"
    else
        echo "❌ Failed: $output (you may need to download manually)"
    fi
    echo ""
}

echo "=== INDIA ==="
download_image "https://www.maxhealthcare.in/images/max-healthcare-logo.png" "max.png" "Max Healthcare"
download_image "https://www.narayanahealth.org/sites/default/files/nh-logo.png" "narayana.png" "Narayana Health"
download_image "https://www.asterhospitals.in/images/aster-logo.png" "aster.png" "Aster DM Healthcare"

echo "=== TURKEY ==="
download_image "https://www.livhospital.com/images/liv-hospital-logo.png" "liv.png" "Liv Hospital"
download_image "https://www.medicana.com.tr/images/medicana-logo.png" "medicana.png" "Medicana Health Group"

echo "=== THAILAND ==="
download_image "https://www.bnhhospital.com/images/bnh-logo.png" "bnh.png" "BNH Hospital"
download_image "https://www.phukethospital.com/images/bangkok-hospital-logo.png" "bhphuket.png" "Bangkok Hospital Phuket"

echo "=== MALAYSIA ==="
download_image "https://www.kpjhealth.com.my/images/kpj-logo.png" "kpj.png" "KPJ Healthcare"
download_image "https://www.pantai.com.my/images/pantai-logo.png" "pantai.png" "Pantai Hospital"

echo "=== MEXICO ==="
download_image "https://www.christusmuguerza.com.mx/images/christus-logo.png" "christus.png" "Christus Muguerza"
download_image "https://www.starmedica.com/images/star-medica-logo.png" "starmedica.png" "Star Médica"

echo "=== SOUTH KOREA ==="
download_image "https://www.snuh.org/images/snuh-logo.png" "snuh.png" "Seoul National University Hospital"
download_image "https://www.anam.kumc.or.kr/images/ku-logo.png" "kuah.png" "Korea University Anam Hospital"

echo "=== VIETNAM ==="
download_image "https://benhvienbachmai.vn/images/bachmai-logo.png" "bachmai.png" "Bach Mai Hospital"
download_image "https://hoanmy.com/images/hoanmy-logo.png" "hoanmy.png" "Hoan My Medical Corporation"

echo "=== BRAZIL ==="
download_image "https://www.hospitaloswaldocruz.org.br/images/oswaldo-cruz-logo.png" "oswaldocruz.png" "Hospital Alemão Oswaldo Cruz"
download_image "https://www.hc.fm.usp.br/images/clinicas-logo.png" "clinicas.png" "Hospital das Clínicas"

echo "=== UAE ==="
download_image "https://www.clevelandclinicabudhabi.ae/images/cleveland-logo.png" "uae1.png" "Cleveland Clinic Abu Dhabi"
download_image "https://www.ahdubai.com/images/ah-logo.png" "uae2.png" "American Hospital Dubai"
download_image "https://www.mediclinic.ae/images/mediclinic-logo.png" "uae3.png" "Mediclinic City Hospital"

echo "=== GERMANY ==="
download_image "https://www.charite.de/images/charite-logo.png" "ger1.png" "Charité Berlin"
download_image "https://www.klinikum.uni-heidelberg.de/images/heidelberg-logo.png" "ger2.png" "Heidelberg University Hospital"
download_image "https://www.lmu-klinikum.de/images/lmu-logo.png" "ger3.png" "Munich University Hospital"

echo "=== SINGAPORE ==="
download_image "https://www.sgh.com.sg/images/sgh-logo.png" "sg1.png" "Singapore General Hospital"
download_image "https://www.mountelizabeth.com.sg/images/me-logo.png" "sg2.png" "Mount Elizabeth Hospital"
download_image "https://www.rafflesmedicalgroup.com/images/raffles-logo.png" "sg3.png" "Raffles Hospital"

echo "=== SPAIN ==="
download_image "https://www.clinicbarcelona.org/images/clinic-logo.png" "sp1.png" "Hospital Clínic de Barcelona"
download_image "https://www.comunidad.madrid/hospital/lapaz/images/lapaz-logo.png" "sp2.png" "Hospital La Paz"
download_image "https://www.quironsalud.com/images/quironsalud-logo.png" "sp3.png" "Quirónsalud Madrid"

echo ""
echo "✨ Download process completed!"
echo ""
echo "⚠️  NOTE: Many downloads may have failed because:"
echo "   - Logo URLs are guessed and may not be accurate"
echo "   - Websites may use different image paths"
echo "   - Some sites may block automated downloads"
echo ""
echo "📌 NEXT STEPS:"
echo "   1. Check which images downloaded successfully: ls -lh $PUBLIC_DIR/*.png"
echo "   2. For failed downloads, manually visit the hospital websites"
echo "   3. Right-click on their logo → Save image as → Use the filename shown above"
echo ""
echo "🔗 Or use this alternative script to create placeholder images..."
