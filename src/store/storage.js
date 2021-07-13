var offers = [
    {
        id: 1,
        name: 'Senior Java Developer',
        companyName: 'Google',
        country: 'Poland',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer metus elit, viverra sit amet felis ut, posuere faucibus quam. In sodales et diam vel porttitor. Donec ullamcorper semper purus venenatis malesuada. Donec pretium porta justo, vel eleifend felis feugiat et. Nunc luctus porta molestie. Ut porta nisl ex, non lacinia enim viverra sed. Morbi eget sapien ultrices purus ultricies placerat vitae in ex. Cras vitae ultrices erat. Pellentesque mollis libero et efficitur aliquam. Aenean consectetur turpis a tortor lacinia vestibulum. Proin consectetur, ligula varius lobortis varius, purus ex porttitor lacus, commodo consequat lorem felis et urna. Vestibulum consectetur semper sapien.
        
        Donec ac dictum ex. Fusce tellus ante, ultricies et vestibulum sed, dignissim rutrum justo. Ut fringilla quis orci sed auctor. Morbi id arcu fermentum, convallis libero quis, cursus tortor. Curabitur lacinia, libero vel accumsan accumsan, magna mauris porttitor risus, sed faucibus nunc mi eu diam. Etiam et ligula quis turpis facilisis vestibulum et ut lorem. Pellentesque lobortis velit vitae massa viverra, a rutrum odio commodo. Aenean ut quam condimentum, ornare justo ornare, bibendum nunc.
        
        Aliquam bibendum pellentesque facilisis. Mauris a urna vel mi rutrum imperdiet. Quisque eleifend dignissim euismod. Nullam tempor tincidunt libero vel lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum ex sed tortor bibendum, at sollicitudin neque viverra. Maecenas at elit vel risus tristique tempus in a ante. Duis nec auctor arcu. Suspendisse malesuada erat sed tellus lobortis feugiat. Suspendisse non eleifend tortor, in rutrum purus. Aliquam erat volutpat. Fusce faucibus tincidunt lorem, ac posuere massa faucibus non. Vivamus vitae augue sem.
        
        Nullam mattis leo vitae viverra imperdiet. Donec eu magna felis. Pellentesque in malesuada felis. Nulla ac est non nulla consectetur suscipit eget eu tortor. Nam euismod ac risus in porta. Maecenas vel commodo quam. Nam ex orci, faucibus at elit et, auctor euismod lacus. Nunc ornare lacus ut erat pharetra cursus. Curabitur ut congue odio, a vestibulum tortor. Sed tincidunt sapien ut urna luctus interdum. Sed nec justo in sem gravida maximus. Sed vitae suscipit lacus, vitae faucibus felis. Curabitur id magna massa. Duis pretium sit amet dui in gravida.
        
        Nam porta lacus eget elementum interdum. Nulla aliquam id diam vitae egestas. Quisque dictum nibh in mauris semper, non scelerisque lectus placerat. Etiam rutrum, sapien nec euismod lacinia, magna leo mattis metus, at lobortis ante diam eget ligula. Nulla facilisi. Aenean non efficitur sem, at tincidunt erat. In scelerisque posuere magna nec convallis. Vivamus sodales magna vitae maximus convallis. Suspendisse at nibh sit amet dolor laoreet dapibus. Aenean eget mi id magna eleifend malesuada. Donec sit amet hendrerit orci, at mollis ligula. Sed vitae augue dolor. Integer non molestie lorem. Phasellus semper justo in dui blandit hendrerit. Vivamus vehicula eu neque vitae aliquam.`,
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