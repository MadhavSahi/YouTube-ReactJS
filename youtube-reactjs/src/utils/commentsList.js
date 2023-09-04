const comments = [
    {
        name: 'Madhav Sahi',
        text: '1 Hey there I am ',
        replies: [
            {
                name: 'RK Singh',
                text: '1.1 Hey there I am',
                replies: [
                    {
                        name: 'Madhuri Gupta',
                        text: '1.1.1 Hi, this is',
                        replies: [
                            {
                                name: 'Ankit Verma',
                                text: '1.1.1.1 Hello from',
                                replies: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Alice Johnson',
        text: '2 Hello, I am a new commenter!',
        replies: [
            {
                name: 'Bob Smith',
                text: '2.1 Hi Alice, welcome!',
                replies: [
                    {
                        name: 'Charlie Brown',
                        text: 'Glad to see new faces here!',
                        replies: [
                            {
                                name: 'Daisy Adams',
                                text: 'Let\'s keep the conversation going!',
                                replies: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Sophia Lee',
        text: '3 I have a question about the topic.',
        replies: []
    },
    {
        name: 'John Doe',
        text: '4 This is an interesting discussion.',
        replies: [
            {
                name: 'Jane Smith',
                text: '4.1 Indeed, it is!',
                replies: []
            }
        ]
    },
    // New Comments
    {
        name: 'Ella White',
        text: '5 Great insights! Thank you for sharing.',
        replies: []
    },
    {
        name: 'Robert Johnson',
        text: '6 I disagree with some points here.',
        replies: [
            {
                name: 'Emma Williams',
                text: '6.1 Could you elaborate on that?',
                replies: [
                    {
                        name: 'Lucas Taylor',
                        text: '6.2 I\'m also curious to know more.',
                        // replies: [{}] ...we can;t use this although it is an empty array..but the recursion will happen over this..as it contains an object
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        name: 'David Miller',
        text: '7 I had a similar experience.',
        replies: [
            {
                name: 'Olivia Clark',
                text: '7.1 Let\'s discuss this further!',
                replies: [
                    {
                        name: 'Sophie Turner',
                        text: '7.1.1 I\'m joining the discussion too!',
                        replies: []
                    }
                ]
            }
        ]
    }
];

export default comments;
