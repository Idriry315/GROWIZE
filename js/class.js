// Parent class of all classes
class Fonctions {
    constructor(name) {
        this.name = name;
    }

    addElement(element_table, element_class, element_name) {
        const element = new element_class(element_name);
        element_table.push(element);
        return element;
    }
}


class Chapter {
    constructor(name) {
        this.name = name;
        this.phase = {
            state_name: 'seed',
            step: 1,
            last_action: new Date().toISOString(),
            reviews: {
                'no-leaves': 0,
                'some-leaves': 0,
                'yellow-leaves': 0,
                'green-leaves': 0,
                'purple-leaves': 0
            },
            last_review: null
        };
    }
}

// Classes inheriting from Fonctions

class Subject extends Fonctions {
    constructor(name) {
        super(name);
        this.chapters = [];
    }

    addChapter(name) {
        return this.addElement(this.chapters, Chapter, name);
    }
}

class Semester extends Fonctions {
    constructor(name) {
        super(name);
        this.subjects = [];
    }

    addSubject(name) {
        return this.addElement(this.subjects, Subject, name);
    }

}

class SchoolYear extends Fonctions {
    constructor(name) {
        super(name);
        this.semesters = [];
    }

    addSemester(name) {
        return this.addElement(this.semesters, Semester, name);
    }
}