const tabs = document.querySelectorAll('.slider-tab-container');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tabs.forEach(tab2 => tab2.classList.remove('active'));
        this.classList.add('active');
    })
})