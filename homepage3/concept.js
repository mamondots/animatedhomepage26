document.getElementById('opne-btn').addEventListener('click', function(){
        document.getElementById('body-popup').classList.add('active');
});

document.getElementById('btn-colse').addEventListener('click', function(){
    document.getElementById('body-popup').classList.remove('active');
})