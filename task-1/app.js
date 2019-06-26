const Priority = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
  };

const notepad = {
    notes: [],

    getNotes() {return this.notes},

    findNoteById(id) {
      for (const note of this.notes) {
          if (note.id === id) return note;
      }
    },

    saveNote(note) {
     return this.notes.push(note);
    },

    deleteNote(id) {
        for (const note of this.notes) {
            if (note.id === id) {
                const indexOfDeletedObject = this.notes.indexOf(note);
                this.notes.splice(indexOfDeletedObject, 1);
            }
        }
    },

    updateNoteContent(id, updatedContent) {
        for (let note of this.notes) {
            if (note.id === id) {
                return note = Object.assign(note, updatedContent);
            }
        }
    },

    updateNotePriority(id, priority) {
        for (let note of this.notes) {
            if (note.id === id) {
                note.priority = priority;
                return note;
            }
        }
    },

    filterNotesByQuery(query) {
        const newNotesByQuery = [];

        for (const note of this.notes) {
            const titleLower = note.title.toLowerCase();
            const bodyLower = note.body.toLowerCase();
            if (titleLower.includes(query) || bodyLower.includes(query)) {
                newNotesByQuery.push(note);
            }
        }

        return newNotesByQuery;
    },

    filterNotesByPriority(priority) {
        const newNotesByPriority = [];

        for (const note of this.notes) {
            if (note.priority === priority) {
                newNotesByPriority.push(note);
            }
        }

        return newNotesByPriority;
    },
  };

//   --------------------------------------------------ПЕРЕВІРКА------------------------------------------------------

  /*
 * Добавляю 4 заметки и смотрю что получилось
 */
notepad.saveNote({
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: Priority.HIGH,
  });
  
  notepad.saveNote({
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: Priority.NORMAL,
  });
  
  notepad.saveNote({
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body:
      'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: Priority.NORMAL,
  });
  
  notepad.saveNote({
    id: 'id-4',
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: Priority.LOW,
  });
  
  console.log('Все текущие заметки: ', notepad.getNotes());

  console.log(' ');
  
  /*
   * Зима уже близко, пора поднять приоритет на покупку одежды
   */
  notepad.updateNotePriority('id-4', Priority.NORMAL);
  
  console.log(
    'Заметки после обновления приоритета для id-4: ',
    notepad.getNotes(),
  );

  console.log(' ');
  
  /*
   * Решил что фреймворки отложу немного, понижаю приоритет
   */
  notepad.updateNotePriority('id-3', Priority.LOW);
  
  console.log(
    'Заметки после обновления приоритета для id-3: ',
    notepad.getNotes(),
  );

  console.log(' ');
  
  /*
   * Решил отфильтровать заметки по слову html
   */
  console.log(
    'Отфильтровали заметки по ключевому слову "html": ',
    notepad.filterNotesByQuery('html'),
  );

  console.log(' ');
  
  /*
   * Решил отфильтровать заметки по слову javascript
   */
  console.log(
    'Отфильтровали заметки по ключевому слову "javascript": ',
    notepad.filterNotesByQuery('javascript'),
  );

  console.log(' ');
  
  /*
   * Хочу посмотреть только заметки с нормальным приоритетом
   */
  console.log(
    'Отфильтровали заметки по нормальному приоритету: ',
    notepad.filterNotesByPriority(Priority.NORMAL),
  );

  console.log(' ');
  
  /*
   * Обновим контент заметки с id-3
   */
  notepad.updateNoteContent('id-3', {
    title: 'Get comfy with React.js or Vue.js',
  });
  
  console.log(
    'Заметки после обновления контента заметки с id-3: ',
    notepad.getNotes(),
  );

  console.log(' ');
  
  /*
   * Повторил HTML и CSS, удаляю запись c id-2
   */
  notepad.deleteNote('id-2');
  console.log('Заметки после удаления с id -2: ', notepad.getNotes());