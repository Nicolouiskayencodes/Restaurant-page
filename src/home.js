import image from './dining.jpg';

export default function home() {
  const element = document.createElement('div');
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('img-container');

  const img = new Image()
  img.src = image;
  imageContainer.appendChild(img);

  const imgcaption = document.createElement('p');
  imgcaption.classList.add('imgcaption');
  imgcaption.textContent ='Photo by ';
  const photographer = document.createElement('a');
  photographer.href = "https://unsplash.com/@jaywennington?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
  photographer.textContent = "Jay Wennington";
  imgcaption.appendChild(photographer);
  imgcaption.insertAdjacentText('beforeend', " on ");
  const unsplash = document.createElement('a');
  unsplash.href = "https://unsplash.com/photos/dish-on-white-ceramic-plate-N_Y88TWmGwA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
  unsplash.textContent = 'UnSplash';
  imgcaption.appendChild(unsplash);
  imageContainer.appendChild(imgcaption);

  element.appendChild(imageContainer);

  const headline = document.createElement('h1');
  headline.textContent = 'Come Dine in Comfort!';
  headline.classList.add('headline');
  element.appendChild(headline);

  const info = document.createElement('p');
  info.classList.add('info');
  info.textContent = 'Our cozy restaurant provides a fine dining experience at unbeatable prices. Experience our exquisite menu with the whole family! Located at 123456 Downtown Blvd, Big Town City.'
  element.appendChild(info);

  const hours = document.createElement('h2');
  hours.classList.add('hours');
  hours.textContent = 'Hours';
  element.appendChild(hours);

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