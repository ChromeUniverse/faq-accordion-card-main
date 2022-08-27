// get all icons
const icons = [
  document.getElementById('icon-1'),
  document.getElementById('icon-2'),
  document.getElementById('icon-3'),
  document.getElementById('icon-4'),
  document.getElementById('icon-5'),  
]

// get all answers
const answers = [
  document.getElementById('answer-1'),
  document.getElementById('answer-2'),
  document.getElementById('answer-3'),
  document.getElementById('answer-4'),
  document.getElementById('answer-5'),
]

// get all titles
const titles = [
  document.getElementById('title-1'),
  document.getElementById('title-2'),
  document.getElementById('title-3'),
  document.getElementById('title-4'),
  document.getElementById('title-5'),
]

// linking icon IDs to answer IDs
const FAQs = {
  'icon-1': {
    title: 'title-1',
    answer: 'answer-1'
  },
  'icon-2': {
    title: 'title-2',
    answer: 'answer-2'
  },
  'icon-3': {
    title: 'title-3',
    answer: 'answer-3'
  },
  'icon-4': {
    title: 'title-4',
    answer: 'answer-4'
  },
  'icon-5': {
    title: 'title-5',
    answer: 'answer-5'
  },
}

// stores the currently open menu
let openMenu = null;

// click handler function for icons
function clickHandler(event) {

  // get the clicked menu's DOM element
  const icon = event.target;
  const title = FAQs[icon.id].title;
  const titleDOM = document.getElementById(title);
  const answer = FAQs[icon.id].answer;
  const answerDOM = document.getElementById(answer);

  // determine if we should have an open menu
  // allows only one menu to be open at all times!
  if (openMenu !== answer) openMenu = answer;
  else openMenu = null;

  // collapse all answers
  answers.map((answer) => answer.style.display = 'none')

  // reset all icon rotations
  icons.map((icon) => icon.style.transform = 'none');

  // reset all title styles
  titles.map((title) => {
    title.style.fontWeight = 400;
    title.style.removeProperty('color');
  });

  // if menu should be opened, apply the appropriate styles
  if (openMenu) {
    answerDOM.style.display = 'block';
    icon.style.transform = 'rotate(180deg)'
    titleDOM.style.fontWeight = 700;
    titleDOM.style.color = 'hsl(238, 29%, 16%)';
  }
}

// add click event listener to all icons
icons.map((icon) => icon.addEventListener('click', clickHandler));