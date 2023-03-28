// eslint-disable-next-line import/prefer-default-export
export const toggleNav = () => {
  const list = document.getElementById('list');
  const listContainer = document.getElementById('TitleContainer');
  const addNew = document.getElementById('addNew');
  const addBook = document.getElementById('addBook');
  const contact = document.getElementById('contact');
  const contactInfo = document.getElementById('contactInfo');

  listContainer.classList.add('active');

  list.addEventListener('click', () => {
    listContainer.classList.add('active');
    addBook.classList.remove('active');
    contactInfo.classList.remove('active');
  });

  addNew.addEventListener('click', () => {
    addBook.classList.add('active');
    listContainer.classList.remove('active');
    contactInfo.classList.remove('active');
  });

  contact.addEventListener('click', () => {
    contactInfo.classList.add('active');
    listContainer.classList.remove('active');
    addBook.classList.remove('active');
  });
};
