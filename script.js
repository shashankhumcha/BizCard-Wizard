document.getElementById('generate').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const linkedin = document.getElementById('linkedin').value;
    const github = document.getElementById('github').value;
    const template = document.getElementById('template').value;

    if (name && title && email && phone) {
        const cardContainer = document.getElementById('card-container');
        cardContainer.innerHTML = `
            <div class="card ${template}">
                <h2>${name}</h2>
                <p>${title}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <div class="social-links">
                    <a href="${linkedin}" target="_blank" class="linkedin"><i class="fab fa-linkedin"></i></a>
                    <a href="${github}" target="_blank" class="github"><i class="fab fa-github"></i></a>
                </div>
            </div>
        `;
        document.getElementById('download').style.display = 'inline';
    } else {
        alert('Please fill out all required fields.');
    }
});

document.getElementById('download').addEventListener('click', function() {
    html2canvas(document.querySelector('#card-container')).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'business-card.png';
        link.click();
    });
});

document.getElementById('avatar').addEventListener('click', function() {
    window.open('mailto:developer@example.com');
    alert('Click the button to generate or download your business card!');
});
document.addEventListener('mousemove', function(event) {
    const eye = document.querySelector('.eye');
    const pupil = document.querySelector('.pupil');
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;
    const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);
    const pupilRadius = (eyeRect.width / 2) - (pupil.offsetWidth / 2);
    const pupilX = Math.cos(angle) * pupilRadius;
    const pupilY = Math.sin(angle) * pupilRadius;
    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
});