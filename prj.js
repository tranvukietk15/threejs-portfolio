const elements = [
    {
        id: '#ts',
        title: '#Transwap',
        details: ['Mar/2021 - Present', '.NET 5, Microservices, ReactJS, Azure, Onfindo', 'Analyst Developer', '8'] },
    {
        id: '#sp',
        title: '#Secrect',
        details: ['Dec/2019 - Mar/2021', '.NET CORE, Microservices, ReactJS, AWS, Docker, GraphQL, Mulesoft, Moodle, Drupal, Salesforce, OneLogin', 'Developer', '30']
    },
    {
        id: '#bn',
        title: '#Beniplus',
        details: ['Sep/2019 - Dec/2019 (90 days)', 'Java spring boot, ReactJS', 'Developer', '3']
    },
    {
        id: '#mc',
        title: '#Milano',
        details: ['May/2019 - Sep/2019 (120 days)', '.NET core 2.0, Microservices, Angular 7, API Gateway', 'Developer', '8']
    },
    {
        id: '#vc',
        title: '#VietCredit',
        details: ['Feb/2019 - May/2019 (90 days)', '.Net core 2.0, SOAP, AngularJS, MaterialUI', 'Developer', '3']
    },
    {
        id: '#rz',
        title: '#RVezy',
        details: ['Feb/2019 - May/2019 (90 days)', '.Net core 2.0, AngularJS, AWS Elasticsearch', 'Developer', '3']
    },
];

function displayDetail(id) {
    elements.forEach(element => {
        if (id === element.id) {
            const activeElement = document.querySelector(element.title);
            activeElement.style.display = 'block';
            document.querySelector(element.id).classList.add('active');

            element.details.forEach((item, index) => {
                document.getElementById(`detail-${index}`).innerHTML = item;
            });
            return;
        }

        const inactiveElement = document.querySelector(element.title);
        inactiveElement.style.display = 'none';
        document.querySelector(element.id).classList.remove('active');
    });

}

function updateClassDisplay(idActive, idInactive) {
    document.querySelector(x);
}