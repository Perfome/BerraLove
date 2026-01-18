// Yıldızlar oluştur
function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Çiçekler oluştur
function createFlowers() {
    const garden = document.getElementById('garden');
    const flowerCount = 15;
    const colors = [
        ['#ffb3d9', '#ff69b4', '#ff1493'],
        ['#ffc0cb', '#ff69b4', '#c71585'],
        ['#ff6eb4', '#ff1493', '#c71585'],
        ['#ffb6c1', '#ff69b4', '#ff1493'],
        ['#ffa6c9', '#ff69b4', '#c71585']
    ];
    
    for (let i = 0; i < flowerCount; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        
        const leftPos = (i * (100 / flowerCount)) + (Math.random() * 5);
        flower.style.left = leftPos + '%';
        flower.style.bottom = Math.random() * 50 + 'px';
        flower.style.animationDelay = (i * 0.2) + 's';
        
        // Gövde
        const stem = document.createElement('div');
        stem.className = 'stem';
        stem.style.height = (80 + Math.random() * 40) + 'px';
        
        // Yapraklar
        const leafLeft = document.createElement('div');
        leafLeft.className = 'leaf left';
        stem.appendChild(leafLeft);
        
        const leafRight = document.createElement('div');
        leafRight.className = 'leaf right';
        stem.appendChild(leafRight);
        
        // Taç yapraklar
        const petals = document.createElement('div');
        petals.className = 'petals';
        
        const colorSet = colors[Math.floor(Math.random() * colors.length)];
        
        for (let j = 0; j < 5; j++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            const gradient = `linear-gradient(135deg, ${colorSet[0]}, ${colorSet[1]})`;
            petal.style.background = gradient;
            petal.style.boxShadow = `0 0 15px ${colorSet[2]}`;
            petals.appendChild(petal);
        }
        
        // Çiçek merkezi
        const center = document.createElement('div');
        center.className = 'flower-center';
        
        // Parıltılar
        for (let k = 0; k < 4; k++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = (Math.random() * 20 - 10) + 'px';
            sparkle.style.top = (Math.random() * 20 - 10) + 'px';
            sparkle.style.animationDelay = (k * 0.3) + 's';
            center.appendChild(sparkle);
        }
        
        stem.appendChild(petals);
        stem.appendChild(center);
        flower.appendChild(stem);
        garden.appendChild(flower);
    }
}

// Uçan kalpler oluştur
function createFloatingHearts() {
    const heartsContainer = document.getElementById('floatingHearts');
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }, 800);
}

// Sayfa yüklendiğinde çalıştır
window.addEventListener('load', () => {
    createStars();
    createFlowers();
    createFloatingHearts();
});

// Fare hareketinde ek etkiler
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.querySelectorAll('.flower').forEach((flower, index) => {
        const speed = (index % 3 + 1) * 0.5;
        const moveX = (x - 0.5) * 20 * speed;
        const moveY = (y - 0.5) * 10 * speed;
        flower.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});
