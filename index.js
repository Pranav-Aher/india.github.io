const feature_1 = document.getElementById('feature_1');
const feature_2 = document.getElementById('feature_2');
const feature_3 = document.getElementById('feature_3');
const feature_4 = document.getElementById('feature_4');
const feature = document.querySelectorAll('.feature');

feature.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        element.style.width = '40%';
        element.children[0].style.opacity = 1;
        element.children[0].style.transform = 'scale(1)';
        element.children[1].children[1].style.opacity = 1;
        element.children[1].children[0].style.fontSize = '3rem';
        // element.children[1].children[1].style.fontSize = '1.1rem';
        // element.children[1].style.transform = 'scale(1.3)';
        // element.children[1].style.transformOrigin = 'left 100%';
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.width = '25%';
        element.children[0].style.opacity = 0;
        element.children[0].style.transform = 'scale(1.5)';
        element.children[1].children[1].style.opacity = 0;
        element.children[1].style.transform = 'scale(1)';
        element.children[1].children[0].style.fontSize = '2rem';
        // element.children[1].children[1].style.fontSize = '1rem';
    })
});