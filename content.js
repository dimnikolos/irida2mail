/*Βασικές ρυθμίσεις*/
address = "protocol@xxxx.syzefxis.gov.gr";
body = "Συνημμένο"

/*Μην αγγίζετε*/
const emailButton = document.createElement('button');
emailButton.textContent = 'Send Email';
emailButton.style.position = 'fixed';
emailButton.style.bottom = '20px';
emailButton.style.right = '20px';
emailButton.style.padding = '10px 15px';
emailButton.style.backgroundColor = '#007bff';
emailButton.style.color = '#fff';
emailButton.style.border = 'none';
emailButton.style.borderRadius = '5px';
emailButton.style.cursor = 'pointer';
emailButton.style.zIndex = '9999';
document.body.appendChild(emailButton);

// Set up the mailto link
emailButton.addEventListener('click', () => {
    const subject = encodeURIComponent(document.getElementsByClassName('lead')[0].innerHTML);
    const mailtoLink = `mailto:${address}?subject=${subject}&body=${body}`;

    // Open the default mail client
    window.location.href = mailtoLink;
});
