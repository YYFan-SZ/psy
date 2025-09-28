document.addEventListener('DOMContentLoaded', function() {
    // 默认语言为英文
    let currentLang = 'en';
    
    // 导航栏切换功能
    const mainNavLinks = document.querySelectorAll('.main-nav a');
    const subcategoryNavs = document.querySelectorAll('.subcategory-nav a');
    const resourceCards = document.querySelectorAll('.resource-card');
    
    // 初始化语言设置
    initLanguage();
    
    // 初始化收藏列表
    let favorites = JSON.parse(localStorage.getItem('psychologyResourceFavorites')) || [];
    
    // 初始化收藏按钮切换
    initFavoritesToggle();
    
    // 初始化语言切换功能
    const translateToggleBtn = document.getElementById('translate-toggle');
    if (translateToggleBtn) {
        translateToggleBtn.addEventListener('click', function() {
            // 切换语言
            currentLang = currentLang === 'en' ? 'zh' : 'en';
            translateToggleBtn.innerHTML = `<i class="fas fa-language"></i> ${currentLang === 'en' ? '中文' : 'English'}`;
            translatePage(currentLang);
            // 保存语言设置到本地存储
            localStorage.setItem('language', currentLang);
        });
        
        // 从本地存储加载语言设置，默认为英文
        const savedLang = localStorage.getItem('language');
        if (savedLang) {
            currentLang = savedLang;
        } else {
            currentLang = 'en'; // 默认设置为英文
        }
        
        // 更新按钮文本 - 显示当前可切换到的语言
        translateToggleBtn.innerHTML = `<i class="fas fa-language"></i> ${currentLang === 'en' ? '中文' : 'English'}`;
        translatePage(currentLang);
    }
    
    // 语言初始化函数
    function initLanguage() {
        // 默认使用英文
        currentLang = 'en';
        translatePage('en');
    }
    
    // 翻译页面内容
    function translatePage(lang) {
        // 更新当前语言
        currentLang = lang;
        
        // 翻译所有带有translatable类的元素
        document.querySelectorAll('.translatable').forEach(element => {
            if (element.hasAttribute(`data-${lang}`)) {
                element.textContent = element.getAttribute(`data-${lang}`);
            }
        });
        
        // 翻译所有带有translatable-placeholder类的输入框占位符
        document.querySelectorAll('.translatable-placeholder').forEach(element => {
            if (element.hasAttribute(`data-${lang}`)) {
                element.placeholder = element.getAttribute(`data-${lang}`);
            }
        });
        
        // 更新子分类导航（如果存在活动的主分类）
        const activeMainNav = document.querySelector('.main-nav li.active a');
        if (activeMainNav) {
            const category = activeMainNav.getAttribute('data-category');
            updateSubcategoryNav(category);
        }
    }
    
// 初始化收藏切换按钮
function initFavoritesToggle() {
    const favoritesToggleBtn = document.getElementById('favorites-toggle');
    const favoritesBar = document.getElementById('favorites-bar');
    const mainContent = document.querySelector('.main-content');
    
    favoritesToggleBtn.addEventListener('click', function() {
        // 切换收藏栏显示状态
        if (favoritesBar.style.display === 'none' || !favoritesBar.style.display) {
            favoritesBar.style.display = 'block';
            favoritesToggleBtn.classList.add('active');
            // 将收藏栏放在主分类下方
            const mainNav = document.querySelector('.main-nav');
            mainNav.after(favoritesBar);
        } else {
            favoritesBar.style.display = 'none';
            favoritesToggleBtn.classList.remove('active');
        }
        
        // 重新渲染收藏列表
        let favorites = JSON.parse(localStorage.getItem('psychologyResourceFavorites')) || [];
        renderFavorites(favorites);
    });
}
    
    // 主分类切换
    mainNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 更新活动状态
            mainNavLinks.forEach(item => item.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            // 更新子分类导航
            updateSubcategoryNav(category);
            
            // 显示对应分类的资源卡片
            filterResources(category);
            
            // 阻止页面滚动和跳动
            window.scrollTo(window.scrollX, window.scrollY);
        });
    });
    
    // 子分类切换
    function setupSubcategoryListeners() {
        const subcategoryLinks = document.querySelectorAll('.subcategory-nav a');
        subcategoryLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // 更新活动状态
                subcategoryLinks.forEach(item => item.parentElement.classList.remove('active'));
                this.parentElement.classList.add('active');
                
                const subcategory = this.getAttribute('data-subcategory');
                const mainCategory = subcategory.split('.').slice(0, 2).join('.');
                
                // 显示对应子分类的资源卡片
                filterResources(mainCategory, subcategory);
                
                // 阻止页面滚动和跳动
                window.scrollTo(window.scrollX, window.scrollY);
            });
        });
    }
    
    // 更新子分类导航
    function updateSubcategoryNav(category) {
        const subcategoryList = document.getElementById('subcategory-list');
        subcategoryList.innerHTML = '';
        
        // 获取当前语言
        const lang = currentLang;
        
        // 子分类翻译对象
        const subcategoryTranslations = {
            'en': {
                '2.1.1': 'Online Courses',
                '2.1.2': 'Classic Books & Textbooks',
                '2.1.3': 'Academic Resources',
                '2.2.1': 'Psychological Tests',
                '2.2.2': 'Experimental Tools',
                '2.2.3': 'Data Analysis Software',
                '2.3.1': 'Cognitive Psychology',
                '2.3.2': 'Developmental Psychology',
                '2.3.3': 'Clinical & Counseling Psychology',
                '2.3.4': 'Social Psychology',
                '2.3.5': 'Educational Psychology',
                '2.3.6': 'Neuroscience & Brain Science',
                '2.4.1': 'Forums',
                '2.4.2': 'Professional Associations',
                '2.4.3': 'Social Groups',
                '2.5.1': 'Counseling & Therapy Platforms',
                '2.5.2': 'Mental Health Applications',
                '2.5.3': 'Psychology Podcasts/Video Channels',
                '2.6.1': 'Open Source Datasets',
                '2.6.2': 'Experimental Paradigm Libraries',
                '2.6.3': 'Papers & Academic Databases'
            },
            'zh': {
                '2.1.1': '在线课程',
                '2.1.2': '经典书籍与教材推荐',
                '2.1.3': '学术入门资源',
                '2.2.1': '心理测验',
                '2.2.2': '实验工具',
                '2.2.3': '数据分析软件',
                '2.3.1': '认知心理学',
                '2.3.2': '发展心理学',
                '2.3.3': '临床与咨询心理学',
                '2.3.4': '社会心理学',
                '2.3.5': '教育心理学',
                '2.3.6': '神经科学与脑科学',
                '2.4.1': '论坛',
                '2.4.2': '专业学会',
                '2.4.3': '社交群组',
                '2.5.1': '心理咨询与治疗预约平台',
                '2.5.2': '心理健康应用',
                '2.5.3': '心理学播客/视频频道',
                '2.6.1': '开源数据集',
                '2.6.2': '实验范式库',
                '2.6.3': '论文与学术数据库'
            }
        };
        
        // 根据主分类添加对应的子分类
        switch(category) {
            case '2.1':
                subcategoryList.innerHTML = `
                    <li class="active"><a href="#" data-subcategory="2.1.1">${subcategoryTranslations[lang]['2.1.1']}</a></li>
                    <li><a href="#" data-subcategory="2.1.2">${subcategoryTranslations[lang]['2.1.2']}</a></li>
                    <li><a href="#" data-subcategory="2.1.3">${subcategoryTranslations[lang]['2.1.3']}</a></li>
                `;
                break;
            case '2.2':
                subcategoryList.innerHTML = `
                    <li class="active"><a href="#" data-subcategory="2.2.1">${subcategoryTranslations[lang]['2.2.1']}</a></li>
                    <li><a href="#" data-subcategory="2.2.2">${subcategoryTranslations[lang]['2.2.2']}</a></li>
                    <li><a href="#" data-subcategory="2.2.3">${subcategoryTranslations[lang]['2.2.3']}</a></li>
                `;
                break;
            case '2.3':
                subcategoryList.innerHTML = `
                    <li class="active"><a href="#" data-subcategory="2.3.1">${subcategoryTranslations[lang]['2.3.1']}</a></li>
                    <li><a href="#" data-subcategory="2.3.2">${subcategoryTranslations[lang]['2.3.2']}</a></li>
                    <li><a href="#" data-subcategory="2.3.3">${subcategoryTranslations[lang]['2.3.3']}</a></li>
                    <li><a href="#" data-subcategory="2.3.4">${subcategoryTranslations[lang]['2.3.4']}</a></li>
                    <li><a href="#" data-subcategory="2.3.5">${subcategoryTranslations[lang]['2.3.5']}</a></li>
                    <li><a href="#" data-subcategory="2.3.6">${subcategoryTranslations[lang]['2.3.6']}</a></li>
                `;
                break;
            case '2.4':
                subcategoryList.innerHTML = `
                    <li class="active"><a href="#" data-subcategory="2.4.1">${subcategoryTranslations[lang]['2.4.1']}</a></li>
                    <li><a href="#" data-subcategory="2.4.2">${subcategoryTranslations[lang]['2.4.2']}</a></li>
                    <li><a href="#" data-subcategory="2.4.3">${subcategoryTranslations[lang]['2.4.3']}</a></li>
                `;
                break;
            case '2.5':
                subcategoryList.innerHTML = `
                    <li class="active"><a href="#" data-subcategory="2.5.1">${subcategoryTranslations[lang]['2.5.1']}</a></li>
                    <li><a href="#" data-subcategory="2.5.2">${subcategoryTranslations[lang]['2.5.2']}</a></li>
                    <li><a href="#" data-subcategory="2.5.3">${subcategoryTranslations[lang]['2.5.3']}</a></li>
                `;
                break;
            case '2.6':
                subcategoryList.innerHTML = `
                    <li class="active"><a href="#" data-subcategory="2.6.1">${subcategoryTranslations[lang]['2.6.1']}</a></li>
                    <li><a href="#" data-subcategory="2.6.2">${subcategoryTranslations[lang]['2.6.2']}</a></li>
                    <li><a href="#" data-subcategory="2.6.3">${subcategoryTranslations[lang]['2.6.3']}</a></li>
                `;
                break;
        }
        
        // 重新设置子分类监听器
        setupSubcategoryListeners();
    }
    
    // 筛选资源卡片
    function filterResources(category, subcategory = null) {
        resourceCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const cardSubcategory = card.getAttribute('data-subcategory');
            
            if (category === cardCategory) {
                if (subcategory === null || subcategory === cardSubcategory) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // 搜索功能
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            // 如果搜索框为空，显示当前活动分类的资源
            const activeCategory = document.querySelector('.main-nav li.active a').getAttribute('data-category');
            const activeSubcategory = document.querySelector('.subcategory-nav li.active a')?.getAttribute('data-subcategory');
            filterResources(activeCategory, activeSubcategory);
            return;
        }
        
        // 显示所有资源卡片以便搜索
        resourceCards.forEach(card => {
            const cardTitle = card.querySelector('h3').textContent.toLowerCase();
            const cardDesc = card.querySelector('p').textContent.toLowerCase();
            const cardTags = Array.from(card.querySelectorAll('.card-tags span')).map(tag => tag.textContent.toLowerCase());
            
            // 检查是否匹配搜索词
            if (cardTitle.includes(searchTerm) || 
                cardDesc.includes(searchTerm) || 
                cardTags.some(tag => tag.includes(searchTerm))) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // 收藏功能实现
    function initFavorites() {
        // 从localStorage获取收藏列表
        let favorites = JSON.parse(localStorage.getItem('psychologyResourceFavorites')) || [];
        
        // 更新收藏按钮状态
        updateFavoriteButtons(favorites);
        
        // 为所有收藏按钮添加点击事件
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const resourceId = this.getAttribute('data-id');
                toggleFavorite(resourceId);
            });
        });
    }
    
    // 切换收藏状态
    function toggleFavorite(resourceId) {
        // 从localStorage获取收藏列表
        let favorites = JSON.parse(localStorage.getItem('psychologyResourceFavorites')) || [];
        
        // 检查是否已收藏
        const index = favorites.indexOf(resourceId);
        
        if (index === -1) {
            // 添加到收藏
            favorites.push(resourceId);
        } else {
            // 从收藏中移除
            favorites.splice(index, 1);
        }
        
        // 保存到localStorage
        localStorage.setItem('psychologyResourceFavorites', JSON.stringify(favorites));
        
        // 更新收藏按钮状态
        updateFavoriteButtons(favorites);
        
        // 渲染收藏列表
        renderFavorites(favorites);
    }
    
    // 渲染收藏列表
    function renderFavorites(favorites) {
        const favoritesContainer = document.getElementById('favorites-container');
        const favoritesBar = document.getElementById('favorites-bar');
        
        if (!favoritesContainer || !favoritesBar) return;
        
        // 如果没有收藏，显示空状态
        if (favorites.length === 0) {
            favoritesContainer.innerHTML = `<p class="empty-favorites translatable" data-zh="暂无收藏内容" data-en="No favorites yet">暂无收藏内容</p>`;
            favoritesBar.classList.remove('active');
            return;
        }
        
        // 显示收藏栏
        favoritesBar.classList.add('active');
        
        // 清空收藏容器
        favoritesContainer.innerHTML = '';
        
        // 遍历收藏列表，添加收藏项
        favorites.forEach(resourceId => {
            // 获取资源卡片
            const resourceCard = document.querySelector(`.resource-card .favorite-btn[data-id="${resourceId}"]`).closest('.resource-card');
            
            if (resourceCard) {
                // 获取资源信息
                const title = resourceCard.querySelector('h3').textContent;
                const logo = resourceCard.querySelector('.card-logo img').src;
                
                // 创建收藏项
                const favoriteItem = document.createElement('div');
                favoriteItem.className = 'favorite-item';
                favoriteItem.innerHTML = `
                    <img src="${logo}" alt="${title} Logo">
                    <h4 class="translatable" data-zh="${title}" data-en="${title}">${title}</h4>
                    <div class="favorite-actions">
                        <a href="detail.html?id=${resourceId}" class="translatable" data-zh="查看详情" data-en="View Details">查看详情</a>
                        <button class="remove-favorite" data-id="${resourceId}">
                            <span class="translatable" data-zh="取消收藏" data-en="Remove">取消收藏</span>
                        </button>
                    </div>
                `;
                
                // 添加到收藏容器
                favoritesContainer.appendChild(favoriteItem);
                
                // 添加取消收藏事件
                favoriteItem.querySelector('.remove-favorite').addEventListener('click', function() {
                    const resourceId = this.getAttribute('data-id');
                    toggleFavorite(resourceId);
                });
            }
        });
        
        // 应用当前语言
        if (typeof translatePage === 'function' && typeof currentLang !== 'undefined') {
            translatePage(currentLang);
        }
    }
    
    // 更新收藏按钮状态
    function updateFavoriteButtons(favorites) {
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            const resourceId = btn.getAttribute('data-id');
            const isFavorited = favorites.includes(resourceId);
            
            if (isFavorited) {
                btn.classList.add('active');
                btn.querySelector('i').className = 'fas fa-star';
            } else {
                btn.classList.remove('active');
                btn.querySelector('i').className = 'far fa-star';
            }
        });
    }
    
    // 初始化收藏功能
    function initFavorites() {
        // 从localStorage获取收藏列表
        let favorites = JSON.parse(localStorage.getItem('psychologyResourceFavorites')) || [];
        
        // 更新收藏按钮状态
        updateFavoriteButtons(favorites);
        
        // 渲染收藏列表
        renderFavorites(favorites);
        
        // 为所有收藏按钮添加点击事件
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const resourceId = this.getAttribute('data-id');
                toggleFavorite(resourceId);
            });
        });
    }
    
    // 初始化收藏功能
    initFavorites();
    

    

    
    // 初始化：设置子分类监听器
    setupSubcategoryListeners();
});