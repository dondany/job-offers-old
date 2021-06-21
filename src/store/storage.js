var offers = [
    {
        id: 1,
        name: 'Senior Java Developer',
        companyName: 'Google',
        country: 'Poland',
        city: 'Łódź',
        tags: [
            'Java',
            'Spring',
            'Hibernate'
        ]
    },
    {
        id: 2,
        name: 'Junior Java Developer',
        companyName: 'Google',
        country: 'Poland',
        city: 'Łódź',
        tags: [
            'Java',
        ]
    },
    {
        id: 3,
        name: 'Junior Cloud Developer',
        companyName: 'Google',
        country: 'Poland',
        city: 'Łódź',
        tags: [
            'C#',
            '.NET',
            'Azure',
            'Java'
        ]
    },
    {
        id: 4,
        name: 'QA Engineer',
        companyName: 'Google',
        country: 'Poland',
        city: 'Łódź',
        tags: [
            'Linux',
            'Python',
            'HTML'
        ]
    },
]

const getJobOffers = function() {
    return offers;
}

export { getJobOffers }