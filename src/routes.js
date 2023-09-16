const {
  addNoteHandler,
  getAllNotesHandler,
  getSpecificNoteHandler,
  editSpecificNote,
  deleteNote,
} = require('./handlers');

const routes = [
  {
    path: '/notes',
    method: 'POST',
    handler: addNoteHandler,
  },
  {
    path: '/notes',
    method: 'GET',
    handler: getAllNotesHandler,
  },
  {
    path: '/notes/{id}',
    method: 'GET',
    handler: getSpecificNoteHandler,
  },
  {
    path: '/notes/{id}',
    method: 'PUT',
    handler: editSpecificNote,
  },
  {
    path: '/notes/{id}',
    method: 'DELETE',
    handler: deleteNote,
  },
];

module.exports = routes;
