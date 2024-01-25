console.log(Vue);
const { createApp } = Vue;
const app = createApp({
    data: () => ({
        user: {
            name: 'Nome Utente',
            avatar: '_io'
        },
        contacts: [
            {
                id: 1,
                name: 'Michele',
                avatar: '_1',
                messages: [
                    {
                        id: 1,
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        id: 2,
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        id: 3,
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                id: 2,
                name: 'Fabio',
                avatar: '_2',
                messages: [
                    {
                        id: 1,
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        id: 2,
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        id: 3,
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                id: 3,
                name: 'Samuele',
                avatar: '_3',
                messages: [
                    {
                        id: 1,
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        id: 2,
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        id: 3,
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                id: 4,
                name: 'Alessandro B.',
                avatar: '_4',
                messages: [
                    {
                        id: 1,
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        id: 2,
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                id: 5,
                name: 'Alessandro L.',
                avatar: '_5',
                messages: [
                    {
                        id: 1,
                        date: '10/01/2020 15:30:55',
                        text: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        id: 2,
                        date: '10/01/2020 15:50:00',
                        text: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                id: 6,
                name: 'Claudia',
                avatar: '_6',
                messages: [
                    {
                        id: 1,
                        date: '10/01/2020 15:30:55',
                        text: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        id: 2,
                        date: '10/01/2020 15:50:00',
                        text: 'Non ancora',
                        status: 'received'
                    },
                    {
                        id: 3,
                        date: '10/01/2020 15:51:00',
                        text: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                id: 7,
                name: 'Federico',
                avatar: '_7',
                messages: [
                    {
                        id: 1,
                        date: '10/01/2020 15:30:55',
                        text: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        id: 2,
                        date: '10/01/2020 15:50:00',
                        text: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                id: 8,
                name: 'Davide',
                avatar: '_8',
                messages: [
                    {
                        id: 1,
                        date: '10/01/2020 15:30:55',
                        text: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        id: 2,
                        date: '10/01/2020 15:50:00',
                        text: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        id: 3,
                        date: '10/01/2020 15:51:00',
                        text: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],
        selectedContactId: 1,
        newMessageText: '',
        searchUser: ''
    }),
    computed: {
        selectedContact() {
            return this.contacts.find((contact) => this.selectedContactId === contact.id)
        },
        filteredContacts() {
            const searchUserToLowerCase = this.searchUser.toLowerCase();
            return this.contacts.filter(contact => contact.name.toLowerCase().includes(searchUserToLowerCase));
        }

    },
    methods: {
        selectContactId(id) {
            this.selectedContactId = id;

        },
        logNewList() {
            console.log(this.newContactsList);
        },
        fomatDate(date) {
            const newDate = new Date(date);
            return newDate.toISODate();
        },
        getNewMessage() {
            const newMessage = {
                id: new Date().toISOString(),
                date: `${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
                text: this.newMessageText,
                status: 'sent'
            }
            // Build an answer
            const answer = {
                id: new Date().toISOString(),
                date: `${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
                text: 'Ok',
                status: 'received'
            }
            this.selectedContact.messages.push(newMessage);
            this.newMessageText = '';
            // Auto answer after 1 second
            setTimeout(() => {
                this.selectedContact.messages.push(answer);

            }, 1000)
        },
        deleteMessage(messageId) {
            console.log(messageId)
            this.selectedContact.messages = this.selectedContact.messages.filter((message) => !message.id === messageId)
        }
    }
});

app.mount('#root');

