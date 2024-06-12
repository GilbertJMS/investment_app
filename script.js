document.addEventListener('DOMContentLoaded', loadApp);

function loadApp() {
    loadRoutines();
    loadPortfolio();
    loadEducation();
}

function loadRoutines() {
    const routineList = document.getElementById('routine-list');
    const routines = JSON.parse(localStorage.getItem('routines')) || [];
    routines.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        routineList.appendChild(li);
    });
}

function loadPortfolio() {
    const portfolioList = document.getElementById('portfolio-list');
    const portfolio = JSON.parse(localStorage.getItem('portfolio')) || [];
    portfolio.forEach(investment => {
        const li = document.createElement('li');
        li.textContent = investment;
        portfolioList.appendChild(li);
    });
}

function loadEducation() {
    const educationList = document.getElementById('education-list');
    const resources = JSON.parse(localStorage.getItem('resources')) || [];
    resources.forEach(resource => {
        const li = document.createElement('li');
        li.textContent = resource;
        educationList.appendChild(li);
    });
}

function addRoutine() {
    const routineInput = document.getElementById('new-routine');
    const task = routineInput.value;
    if (task) {
        const routines = JSON.parse(localStorage.getItem('routines')) || [];
        routines.push(task);
        localStorage.setItem('routines', JSON.stringify(routines));
        routineInput.value = '';
        loadRoutines();
    }
}

function addInvestment() {
    const investmentInput = document.getElementById('new-investment');
    const investment = investmentInput.value;
    if (investment) {
        const portfolio = JSON.parse(localStorage.getItem('portfolio')) || [];
        portfolio.push(investment);
        localStorage.setItem('portfolio', JSON.stringify(portfolio));
        investmentInput.value = '';
        loadPortfolio();
    }
}

function addResource() {
    const resourceInput = document.getElementById('new-resource');
    const resource = resourceInput.value;
    if (resource) {
        const resources = JSON.parse(localStorage.getItem('resources')) || [];
        resources.push(resource);
        localStorage.setItem('resources', JSON.stringify(resources));
        resourceInput.value = '';
        loadEducation();
    }
}