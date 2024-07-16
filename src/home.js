import image from './dining.jpg';

export function home() {
  const element = document.createElement('div');
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('img-container');

  const img = new Image()
  img.src = image;
  imageContainer.appendChild(img);

  const imgcaption = document.createElement('p');
  imgcaption.classList.add('imgcaption');
  imgcaption.innerHTML ='Photo by <a href="https://unsplash.com/@jaywennington?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jay Wennington</a> on <a href="https://unsplash.com/photos/dish-on-white-ceramic-plate-N_Y88TWmGwA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
  imageContainer.appendChild(imgcaption);

  element.appendChild(imageContainer);

  const headline = document.createElement('h1');
  headline.textContent = 'Come Dine in Comfort!';
  headline.classList.add('headline');
  element.appendChild(headline);

  const info = document.createElement('p');
  info.classList.add('info');
  info.textContent = 'Our cozy restaurant provides a fine dining experience at unbeatable prices. Experience our exquisite menu with the whole family! We are located at 123456 Downtown Blvd and open Tues-Sat 11:00 AM to 10:00 PM'
  element.appendChild(info);

  return element;
}