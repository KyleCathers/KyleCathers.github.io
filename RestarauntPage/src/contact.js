function contact() {
    const contactContent = document.createElement('div');
    contactContent.setAttribute('id', 'contact-content');
    
    const topHomeBorder = document.createElement('div');
    topHomeBorder.setAttribute('id', 'top-home-border');

    const contactBox = document.createElement('div');
    contactBox.setAttribute('id', 'contact-box');

    const googleMap = document.createElement('div');
    googleMap.setAttribute('id', 'google-map');
    googleMap.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.812089658478!2d-123.07258732234014!3d49
                            .261007471389455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486714e93b7e871%3A0x3f9ee72d11fd9ee2!
                            2sKyle&#39;s%20Cafe!5e0!3m2!1sen!2sca!4v1694054836125!5m2!1sen!2sca" width="600" height="450" style="border:0;" 
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

    const contactInfo = document.createElement('div');
    contactInfo.setAttribute('id', 'contact-info');

    const contactTitle = document.createElement('div');
    contactTitle.setAttribute('id', 'contact-title');
    contactTitle.innerText = 'Contact';

    const contactAddressHeader = document.createElement('div');
    contactAddressHeader.setAttribute('id', 'contact-address-header');
    contactAddressHeader.innerText = 'Address:';

    const contactAddress = document.createElement('div');
    contactAddress.setAttribute('id', 'contact-address');
    contactAddress.innerText = '2627 Commercial Dr, Vancouver, BC V5N 4C3';

    const contactNumberHeader = document.createElement('div');
    contactNumberHeader.setAttribute('id', 'contact-number-header');
    contactNumberHeader.innerText = 'Phone:';

    const contactNumber = document.createElement('div');
    contactNumber.setAttribute('id', 'contact-number');
    contactNumber.innerText = '(250) 849-6519';

    const contactEmailHeader = document.createElement('div');
    contactEmailHeader.setAttribute('id', 'contact-email-header');
    contactEmailHeader.innerText = 'Email:';

    const contactEmail = document.createElement('div');
    contactEmail.setAttribute('id', 'contact-email');
    contactEmail.innerText = 'Info@KylesBurgers.ca';

    const contactHoursHeader = document.createElement('div');
    contactHoursHeader.setAttribute('id', 'contact-hours-header');
    contactHoursHeader.innerText = "Hours:";

    const contactHours = document.createElement('div');
    contactHours.setAttribute('id', 'contact-hours');
    contactHours.innerText = 'Monday: 11am - 10pm\n Tuesday: 11am - 10pm\n Wednesday: 11am - 10pm\n \
                                Thursday: 11am - 10pm\n \ Friday: 11am - 11pm\n Saturday: 11am - 11pm\n Sunday: 11am - 10pm';

    contactInfo.append(contactTitle);
    contactInfo.append(contactAddressHeader);
    contactInfo.append(contactAddress);
    contactInfo.append(contactNumberHeader);
    contactInfo.append(contactNumber);
    contactInfo.append(contactEmailHeader);
    contactInfo.append(contactEmail);
    contactInfo.append(contactHoursHeader);
    contactInfo.append(contactHours);



    contactBox.append(googleMap);
    contactBox.append(contactInfo);




    

    const bottomHomeBorder = document.createElement('div');
    bottomHomeBorder.setAttribute('id', 'bottom-home-border');

    contactContent.append(topHomeBorder);
    contactContent.append(contactBox);
    contactContent.append(bottomHomeBorder);

    return contactContent;
}

export default contact;