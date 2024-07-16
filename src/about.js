export default function about() {
  const element = document.createElement('div');
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'The Cozy Camper Bistro'
  contact.appendChild(title);

  const number = document.createElement('p');
  number.classList.add('info');
  number.textContent = 'Phone Number: +0(101)010-1010';
  contact.appendChild(number);

  const email = document.createElement('p');
  email.classList.add('info');
  email.textContent = 'Email: comeandeatourfood@wemakefood.com'
  contact.appendChild(email);

  const location = document.createElement('p');
  location.classList.add('info');
  location.textContent = 'Location: 123456 Downtown Blvd, Big Town City PE 54321'
  contact.appendChild(location);

  element.appendChild(contact);

  const schedule = document.createElement('ul');
  const sunday = document.createElement('li');
  sunday.textContent = 'Sunday: 11:00 AM - 11:00 PM';
  schedule.appendChild(sunday);
  const monday = document.createElement('li');
  monday.textContent = 'Monday: Closed';
  schedule.appendChild(monday);
  const tuesday = document.createElement('li');
  tuesday.textContent = 'Tuesday: 11:00 AM - 10:00 PM';
  schedule.appendChild(tuesday);
  const wednesday = document.createElement('li');
  wednesday.textContent = 'Wednesday: 11:00 AM - 10:00 PM';
  schedule.appendChild(wednesday);
  const thursday = document.createElement('li');
  thursday.textContent = 'Thursday: 11:00 AM - 10:00 PM';
  schedule.appendChild(thursday);
  const friday = document.createElement('li');
  friday.textContent = 'Friday: 11:00 AM - 11:00 PM';
  schedule.appendChild(friday);
  const saturday = document.createElement('li');
  saturday.textContent = 'Saturday: 11:00 AM - 11:00 PM';
  schedule.appendChild(saturday);
  element.appendChild(schedule);


  return element;
}