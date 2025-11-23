#!/bin/bash

# Destination Images Download Script
# Downloads images from Unsplash for all destination pages

PUBLIC_DIR="/Users/karan/Documents/GHOwebsite/gho_website/public"

echo "📥 Downloading destination images from Unsplash..."
echo "Target directory: $PUBLIC_DIR"
echo ""

# Create public directory if it doesn't exist
mkdir -p "$PUBLIC_DIR"

# Function to download image from Unsplash
download_unsplash() {
    local query="$1"
    local output="$2"
    local description="$3"

    echo "⏳ Downloading: $description"

    # Unsplash Source API (basic, no auth needed but limited)
    # Using 1920x1080 for hero, 800x600 for medical, 600x400 for experience
    local width="${4:-1920}"
    local height="${5:-1080}"

    # Try Unsplash Source API
    local url="https://source.unsplash.com/${width}x${height}/?${query// /%20}"

    if curl -L -f -s -o "$PUBLIC_DIR/$output" "$url" 2>/dev/null; then
        if [ -s "$PUBLIC_DIR/$output" ]; then
            echo "✅ Success: $output"
        else
            echo "❌ Failed: $output (empty file)"
            rm -f "$PUBLIC_DIR/$output"
        fi
    else
        echo "❌ Failed: $output (download error - may need manual download)"
    fi
    echo ""
}

echo "========================================"
echo "🇹🇷 TURKEY"
echo "========================================"
download_unsplash "Istanbul,Blue,Mosque" "turkey-hero.jpg" "Turkey Hero" 1920 1080
download_unsplash "Istanbul,modern,city" "turkey-med-1.jpg" "Istanbul" 800 600
download_unsplash "Ankara,Turkey,cityscape" "turkey-med-2.jpg" "Ankara" 800 600
download_unsplash "Antalya,coastal,resort" "turkey-med-3.jpg" "Antalya" 800 600
download_unsplash "Izmir,Turkey,waterfront" "turkey-med-4.jpg" "Izmir" 800 600
download_unsplash "Pamukkale,thermal,pools" "turkey-exp-1.jpg" "Wellness & Nature" 600 400
download_unsplash "Cappadocia,balloons" "turkey-exp-2.jpg" "Cultural" 600 400
download_unsplash "Istanbul,bazaar,shopping" "turkey-exp-3.jpg" "Shopping" 600 400
download_unsplash "Turkish,cuisine,food" "turkey-exp-4.jpg" "Culinary" 600 400

echo "========================================"
echo "🇲🇽 MEXICO"
echo "========================================"
download_unsplash "Mexico,City,architecture" "mexico-hero.jpg" "Mexico Hero" 1920 1080
download_unsplash "Mexico,City,skyline" "mexico-med-1.jpg" "Mexico City" 800 600
download_unsplash "Guadalajara,Mexico" "mexico-med-2.jpg" "Guadalajara" 800 600
download_unsplash "Monterrey,Mexico,skyline" "mexico-med-3.jpg" "Monterrey" 800 600
download_unsplash "Cancun,beach,aerial" "mexico-med-4.jpg" "Cancún" 800 600
download_unsplash "Tulum,beach,wellness" "mexico-exp-1.jpg" "Wellness & Nature" 600 400
download_unsplash "Chichen,Itza,ruins" "mexico-exp-2.jpg" "Cultural" 600 400
download_unsplash "Mexico,shopping,luxury" "mexico-exp-3.jpg" "Shopping" 600 400
download_unsplash "Mexican,tacos,food" "mexico-exp-4.jpg" "Culinary" 600 400

echo "========================================"
echo "🇹🇭 THAILAND"
echo "========================================"
download_unsplash "Bangkok,Grand,Palace" "thailand-hero.jpg" "Thailand Hero" 1920 1080
download_unsplash "Bangkok,cityscape,Chao,Phraya" "thailand-med-1.jpg" "Bangkok" 800 600
download_unsplash "Phuket,beach,resort" "thailand-med-2.jpg" "Phuket" 800 600
download_unsplash "Chiang,Mai,temple" "thailand-med-3.jpg" "Chiang Mai" 800 600
download_unsplash "Pattaya,beach,Thailand" "thailand-med-4.jpg" "Pattaya" 800 600
download_unsplash "Thailand,spa,wellness" "thailand-exp-1.jpg" "Wellness & Nature" 600 400
download_unsplash "Thai,temple,Buddha" "thailand-exp-2.jpg" "Cultural" 600 400
download_unsplash "Bangkok,market,shopping" "thailand-exp-3.jpg" "Shopping" 600 400
download_unsplash "Thai,food,pad,thai" "thailand-exp-4.jpg" "Culinary" 600 400

echo "========================================"
echo "🇻🇳 VIETNAM"
echo "========================================"
download_unsplash "Hanoi,Vietnam,cityscape" "vietnam-hero.jpg" "Vietnam Hero" 1920 1080
download_unsplash "Ho,Chi,Minh,City,skyline" "vietnam-med-1.jpg" "Ho Chi Minh City" 800 600
download_unsplash "Hanoi,Old,Quarter" "vietnam-med-2.jpg" "Hanoi" 800 600
download_unsplash "Da,Nang,beach,Vietnam" "vietnam-med-3.jpg" "Da Nang" 800 600
download_unsplash "Nha,Trang,beach" "vietnam-med-4.jpg" "Nha Trang" 800 600
download_unsplash "Halong,Bay,Vietnam" "vietnam-exp-1.jpg" "Wellness & Nature" 600 400
download_unsplash "Vietnam,temple,Hue" "vietnam-exp-2.jpg" "Cultural" 600 400
download_unsplash "Vietnam,market,lanterns" "vietnam-exp-3.jpg" "Shopping" 600 400
download_unsplash "Vietnamese,pho,food" "vietnam-exp-4.jpg" "Culinary" 600 400

echo "========================================"
echo "🇨🇷 COSTA RICA"
echo "========================================"
download_unsplash "Costa,Rica,rainforest" "costa-rica-hero.jpg" "Costa Rica Hero" 1920 1080
download_unsplash "San,Jose,Costa,Rica" "costa-rica-med-1.jpg" "San José" 800 600
download_unsplash "Escazu,Costa,Rica" "costa-rica-med-2.jpg" "Escazú" 800 600
download_unsplash "Heredia,Costa,Rica" "costa-rica-med-3.jpg" "Heredia" 800 600
download_unsplash "Santa,Ana,Costa,Rica" "costa-rica-med-4.jpg" "Santa Ana" 800 600
download_unsplash "Costa,Rica,volcano,nature" "costa-rica-exp-1.jpg" "Wellness & Nature" 600 400
download_unsplash "Costa,Rica,culture" "costa-rica-exp-2.jpg" "Cultural" 600 400
download_unsplash "Costa,Rica,artisan,market" "costa-rica-exp-3.jpg" "Shopping" 600 400
download_unsplash "Costa,Rica,gallo,pinto" "costa-rica-exp-4.jpg" "Culinary" 600 400

echo "========================================"
echo "🇦🇪 UAE"
echo "========================================"
download_unsplash "Dubai,Burj,Khalifa,sunset" "uae-hero.jpg" "UAE Hero" 1920 1080
download_unsplash "Dubai,Marina,skyline" "uae-med-1.jpg" "Dubai" 800 600
download_unsplash "Abu,Dhabi,Sheikh,Zayed,Mosque" "uae-med-2.jpg" "Abu Dhabi" 800 600
download_unsplash "Sharjah,UAE" "uae-med-3.jpg" "Sharjah" 800 600
download_unsplash "Ajman,UAE,beach" "uae-med-4.jpg" "Ajman" 800 600
download_unsplash "Dubai,luxury,spa" "uae-exp-1.jpg" "Wellness & Nature" 600 400
download_unsplash "Dubai,Gold,Souk" "uae-exp-2.jpg" "Cultural" 600 400
download_unsplash "Dubai,Mall,shopping" "uae-exp-3.jpg" "Shopping" 600 400
download_unsplash "Arabic,food,mezze" "uae-exp-4.jpg" "Culinary" 600 400

echo "========================================"
echo "🇮🇳 INDIA"
echo "========================================"
download_unsplash "Taj,Mahal,India" "india-hero.jpg" "India Hero" 1920 1080
download_unsplash "New,Delhi,India,Gate" "india-med-1.jpg" "New Delhi" 800 600
download_unsplash "Mumbai,Gateway,of,India" "india-med-2.jpg" "Mumbai" 800 600
download_unsplash "Chennai,Marina,Beach" "india-med-3.jpg" "Chennai" 800 600
download_unsplash "Bangalore,India,tech" "india-med-4.jpg" "Bengaluru" 800 600
download_unsplash "Kerala,backwaters,Ayurveda" "india-exp-1.jpg" "Wellness & Nature" 600 400
download_unsplash "Jaipur,palace,India" "india-exp-2.jpg" "Cultural" 600 400
download_unsplash "Indian,bazaar,textiles" "india-exp-3.jpg" "Shopping" 600 400
download_unsplash "Indian,curry,spices" "india-exp-4.jpg" "Culinary" 600 400

echo "========================================"
echo "🇩🇪 GERMANY"
echo "========================================"
download_unsplash "Berlin,Brandenburg,Gate" "germany-hero.jpg" "Germany Hero" 1920 1080
download_unsplash "Berlin,TV,tower" "germany-med-1.jpg" "Berlin" 800 600
download_unsplash "Munich,Marienplatz" "germany-med-2.jpg" "Munich" 800 600
download_unsplash "Frankfurt,skyline" "germany-med-3.jpg" "Frankfurt" 800 600
download_unsplash "Hamburg,Speicherstadt" "germany-med-4.jpg" "Hamburg" 800 600
download_unsplash "Black,Forest,Germany,spa" "germany-exp-1.jpg" "Wellness & Nature" 600 400
download_unsplash "Neuschwanstein,castle" "germany-exp-2.jpg" "Cultural" 600 400
download_unsplash "Munich,shopping,street" "germany-exp-3.jpg" "Shopping" 600 400
download_unsplash "German,sausage,pretzel" "germany-exp-4.jpg" "Culinary" 600 400

echo "========================================"
echo "🇲🇾 MALAYSIA"
echo "========================================"
download_unsplash "Kuala,Lumpur,Petronas,Towers" "malaysia-hero.jpg" "Malaysia Hero" 1920 1080
download_unsplash "Kuala,Lumpur,KLCC" "malaysia-med-1.jpg" "Kuala Lumpur" 800 600
download_unsplash "Penang,Georgetown" "malaysia-med-2.jpg" "Penang" 800 600
download_unsplash "Johor,Bahru,Malaysia" "malaysia-med-3.jpg" "Johor Bahru" 800 600
download_unsplash "Malacca,Malaysia,river" "malaysia-med-4.jpg" "Malacca" 800 600
download_unsplash "Langkawi,beach,Malaysia" "malaysia-exp-1.jpg" "Wellness & Nature" 600 400
download_unsplash "Batu,Caves,Malaysia" "malaysia-exp-2.jpg" "Cultural" 600 400
download_unsplash "Kuala,Lumpur,shopping" "malaysia-exp-3.jpg" "Shopping" 600 400
download_unsplash "Malaysian,nasi,lemak" "malaysia-exp-4.jpg" "Culinary" 600 400

echo "========================================"
echo "🇸🇬 SINGAPORE"
echo "========================================"
download_unsplash "Singapore,Marina,Bay,Sands" "singapore-hero.jpg" "Singapore Hero" 1920 1080
download_unsplash "Singapore,Orchard,Road" "singapore-med-1.jpg" "Orchard Road" 800 600
download_unsplash "Singapore,Marina,Bay" "singapore-med-2.jpg" "Marina Bay" 800 600
download_unsplash "Singapore,Sentosa" "singapore-med-3.jpg" "Sentosa" 800 600
download_unsplash "Singapore,Changi,Airport" "singapore-med-4.jpg" "Changi" 800 600
download_unsplash "Singapore,Gardens,by,the,Bay" "singapore-exp-1.jpg" "Wellness & Nature" 600 400
download_unsplash "Singapore,Chinatown" "singapore-exp-2.jpg" "Cultural" 600 400
download_unsplash "Singapore,Raffles,shopping" "singapore-exp-3.jpg" "Shopping" 600 400
download_unsplash "Singapore,hawker,food" "singapore-exp-4.jpg" "Culinary" 600 400

echo "========================================"
echo "🇰🇷 SOUTH KOREA"
echo "========================================"
download_unsplash "Seoul,Namsan,Tower,night" "south-korea-hero.jpg" "South Korea Hero" 1920 1080
download_unsplash "Seoul,Gangnam,skyline" "south-korea-med-1.jpg" "Seoul" 800 600
download_unsplash "Busan,Haeundae,beach" "south-korea-med-2.jpg" "Busan" 800 600
download_unsplash "Incheon,Korea" "south-korea-med-3.jpg" "Incheon" 800 600
download_unsplash "Daegu,Korea" "south-korea-med-4.jpg" "Daegu" 800 600
download_unsplash "Korea,spa,jjimjilbang" "south-korea-exp-1.jpg" "Wellness & Nature" 600 400
download_unsplash "Gyeongbokgung,palace,Seoul" "south-korea-exp-2.jpg" "Cultural" 600 400
download_unsplash "Seoul,Myeongdong,shopping" "south-korea-exp-3.jpg" "Shopping" 600 400
download_unsplash "Korean,BBQ,kimchi" "south-korea-exp-4.jpg" "Culinary" 600 400

echo "========================================"
echo "🇪🇸 SPAIN"
echo "========================================"
download_unsplash "Barcelona,Sagrada,Familia" "spain-hero.jpg" "Spain Hero" 1920 1080
download_unsplash "Barcelona,skyline" "spain-med-1.jpg" "Barcelona" 800 600
download_unsplash "Madrid,Gran,Via" "spain-med-2.jpg" "Madrid" 800 600
download_unsplash "Valencia,City,of,Arts" "spain-med-3.jpg" "Valencia" 800 600
download_unsplash "Seville,Plaza,Spain" "spain-med-4.jpg" "Seville" 800 600
download_unsplash "Costa,del,Sol,beach" "spain-exp-1.jpg" "Wellness & Nature" 600 400
download_unsplash "Alhambra,Granada" "spain-exp-2.jpg" "Cultural" 600 400
download_unsplash "Barcelona,Gothic,Quarter" "spain-exp-3.jpg" "Shopping" 600 400
download_unsplash "Spanish,tapas,paella" "spain-exp-4.jpg" "Culinary" 600 400

echo ""
echo "✨ Download process completed!"
echo ""
echo "⚠️  NOTE: This script uses Unsplash's free source API which:"
echo "   - Returns random images matching your search terms"
echo "   - May not always return the exact image you want"
echo "   - Images may vary in quality and relevance"
echo ""
echo "📌 RECOMMENDED NEXT STEPS:"
echo "   1. Review all downloaded images: ls -lh $PUBLIC_DIR/*-hero.jpg $PUBLIC_DIR/*-med-*.jpg $PUBLIC_DIR/*-exp-*.jpg"
echo "   2. Replace any unsuitable images manually using the guide: DESTINATION_IMAGES_GUIDE.md"
echo "   3. Go to unsplash.com and search for specific images that match your needs"
echo "   4. Download high-quality images directly for best results"
echo ""
echo "🎨 For better control and quality, consider manual downloads from:"
echo "   https://unsplash.com"
echo ""
