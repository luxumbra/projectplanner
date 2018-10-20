
const initState = {
  projects: [
    { id: 1, title: 'Title text', content: 'Eirmod sit ut et eos ipsum diam invidunt, vero lorem.'},
    { id: 2, title: 'Title text 2', content: 'Eirmod sit ut et eos ipsum diam invidunt, vero lorem.' },
    { id: 3, title: 'Title text 3', content: 'Eirmod sit ut et eos ipsum diam invidunt, vero lorem.' }
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('project created', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
}

export default projectReducer