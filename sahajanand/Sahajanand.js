
    document.addEventListener('DOMContentLoaded', function() {
        function showDetails(section) {
            const sections = ['food', 'laundry', 'room-amenities', 'house-keeping', 'wifi', 'health-facilities', 'others'];
            sections.forEach(sec => {
                document.getElementById(sec).classList.add('hidden');
                document.querySelector(`button[onclick="showDetails('${sec}')"]`).classList.remove('active');
            });
            document.getElementById(section).classList.remove('hidden');
            document.querySelector(`button[onclick="showDetails('${section}')"]`).classList.add('active');
        }
    
        // Default to showing the "Food" section
        showDetails('food');
    
        const buttons = document.querySelectorAll('.button');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const section = this.getAttribute('onclick').split('\'')[1];
                showDetails(section);
            });
        });
    });
    
       
        
        const mainImage = document.getElementById('mainImage');
        const thumbnails = document.querySelectorAll('.thumb img');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let currentIndex = 0;
        
        const images = [
            'Sahajanand main.jpg',
            's1.jpg',
            's2.jpg',
            's3.jpg',
            's4.JPG'
        ];
        
        function updateMainImage(index, direction) {
            mainImage.classList.add('opacity-0');
            mainImage.style.transform = direction === 'next' ? 'translateX(100%)' : 'translateX(-100%)';
            setTimeout(() => {
                mainImage.src = images[index];
                mainImage.classList.remove('opacity-0');
                mainImage.style.transform = 'translateX(0)';
                thumbnails.forEach((thumb, i) => {
                    thumb.src = images[(index + 1 + i) % images.length];
                    thumb.dataset.image = images[(index + 1 + i) % images.length];
                    thumb.classList.add('opacity-50');
                });
                setTimeout(() => {
                    thumbnails.forEach((thumb) => {
                        thumb.classList.remove('opacity-50');
                    });
                }, 500);
            }, 500);
        }
        
        thumbnails.forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                currentIndex = index;
                updateMainImage(currentIndex, 'next');
            });
        });
        
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            updateMainImage(currentIndex, 'prev');
        });
        
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            updateMainImage(currentIndex, 'next');
        });
        
        updateMainImage(currentIndex, 'next');
        function showDetails(showId, hideId, btn) {
            var showElement = document.getElementById(showId);
            var hideElement = document.getElementById(hideId);
            var btnGroup = btn.parentElement;
        
            btnGroup.querySelectorAll('button').forEach(button => button.classList.remove('active'));
            btn.classList.add('active');
        
            showElement.classList.remove('hidden');
            hideElement.classList.add('hidden');
        }
        
        // Initialize with Non-AC details visible
        document.addEventListener
    
    
        document.addEventListener('DOMContentLoaded', function() {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');
        const tabsContainer = document.querySelector('.tabs');
        const underline = document.createElement('div');
        underline.classList.add('underline');
        tabsContainer.appendChild(underline);
    
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tab = button.getAttribute('data-tab');
                const buttonRect = button.getBoundingClientRect();
                const containerRect = tabsContainer.getBoundingClientRect();
    
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
    
                underline.style.width = `${buttonRect.width}px`;
                underline.style.left = `${buttonRect.left - containerRect.left}px`;
    
                tabContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === tab) {
                        content.classList.add('active');
                    }
                });
            });
        });
    
        // Default tab
        document.querySelector('.tab-button[data-tab="hostel"]').click();
    });
    
    