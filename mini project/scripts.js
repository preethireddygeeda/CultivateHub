document.querySelectorAll('.image-container').forEach(container => {
    const text = container.querySelector('.text');
    
    container.addEventListener('mouseenter', () => {
        text.style.display = 'block';
    });
    
    container.addEventListener('mouseleave', () => {
        text.style.display = 'none';
    });
});
