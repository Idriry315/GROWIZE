let dataSchool = null;

function loadData(){
    const savedData = localStorage.getItem('schoolData');
    if(savedData){
        //Need to reconstruct objects from JSON
        //For now I keep it simple
        dataSchool = JSON.parse(savedData);
    }
    else {
        dataSchool = new SchoolYear('1st year');
    }
}

//Function to add a subject via the UI
function handleAddSubject(event){
    event.preventDefault();
    const subjectName = document.getElementsById('subject')
}



const stateProgression = {
    //  Phase 1 : Discovery of the chapter
    'listen-course': { state_name: 'seed', step: '1.a', icon: '🌰', next: 'learn-course' },
    'learn-course': { state_name: 'water', step: '1.b', icon: '💧', next: 'exercises' },
    'exercises': { state_name: 'sprout', step: '1.c', icon: '🌱', next: 'analysis' },

    // Phase 2 : Analysis
    'analysis': { state_name: 'seedling', step: '2.a', icon: '🪴', next: 'revision-cards' },
    'revision-cards': { state_name: 'young tree', step: '2.b', icon: '🌳', next: 'training' },
    'training': { state_name: 'training tree', step: '2.c', icon: '🌲' },

    //Training states
    'no-leaves': {state_name :'No proficiency', icon : '🍂', period_base: 1},
    'some-leaves': {state_name: 'Some proficiency', icon : '🍁', period_base: 3},
    'yellow-leaves':  {state_name: 'Intermediate proficiency', icon : '💛', period_base: 7},
    'green-leaves':  {state_name: 'Good proficiency', icon : '💚', period_base: 15},
    'purple-leaves': {state_name: 'Excellent proficiency ', icon : '💜', period_base: 30},
    'fruits' : {state_name: 'Exam passed ', icon : '🍎', period_base: 0},
    'dead' : {state_name: 'Streak loss ', icon : '☠️', period_base: null}

};