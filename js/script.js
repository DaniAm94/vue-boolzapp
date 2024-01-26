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
        // Id del contatto selezionato (1 di default)
        selectedContactId: 1,
        // Testo del nuovo messaggio
        newMessageText: '',
        // Barra di ricerca utenti
        searchUser: '',
        // Status del contatto selezionato
        selectedContactStatus: 'Ultimo accesso oggi alle 12:00'
    }),
    computed: {
        // Il contatto selezionato
        selectedContact() {
            return this.contacts.find((contact) => this.selectedContactId === contact.id)
        },
        // Lista contatti filtrata a seconda del contenuto della barra di ricerca
        filteredContacts() {
            const searchUserToLowerCase = this.searchUser.toLowerCase();
            return this.contacts.filter(contact => contact.name.toLowerCase().includes(searchUserToLowerCase));
        }

    },
    methods: {
        selectContactId(id) {
            this.selectedContactId = id;

        },
        getNewMessage() {
            // Se il testo del nuovo messaggio è vuoto non fare nulla
            if (!this.newMessageText) return;
            // Aggiorna lo status
            this.selectedContactStatus = 'Sta scrivendo'
            // Costruisco il nuovo messaggio da inviare
            const newMessage = {
                id: new Date().toISOString(),
                date: new Date(),
                text: this.newMessageText,
                status: 'sent'
            }
            // Costruisco la risposta
            const answer = {
                id: new Date().toISOString(),
                date: new Date(),
                text: 'Ok',
                status: 'received'
            }
            // Mostro subito il nuovo messaggio
            this.selectedContact.messages.push(newMessage);
            // Svuoto la input text 
            this.newMessageText = '';
            // Setto un timeout per far comparire la risposta dopo 3 secondi
            setTimeout(() => {
                this.selectedContact.messages.push(answer);
                this.selectedContactStatus = 'Ultimo accesso oggi alle 12:00'
            }, 3000)
        },
        // Ricreo la lista dei messaggi escludendo il messaggio con id passato a parametro
        deleteMessage(messageId) {
            const messageToDelete = this.selectedContact.messages.find((message) => message.id === messageId);
            console.log('Messaggio da eliminare: ', messageToDelete);
            this.selectedContact.messages = this.selectedContact.messages.filter((message) => message.id !== messageId)

        },
        // Aggiungo la classe active alla casella di testo cliccata
        addActiveClass(event) {
            event.target.classList.add('active');
        },
        // Modifico il formato della data mostrando solo ore e minuti
        formatDate(date) {
            if (!date) return ''
            else {

                const [day, month, yearTime] = date.split('/');
                const [year, time] = yearTime.split(' ');
                const newDate = new Date(`${year}/${month}/${day} ${time}`)
                //console.log('Data parametro: ', date);
                //console.log('Full data: ', newDate);
                //console.log('Ore: ', newDate.getHours());
                //console.log('minuti: ', newDate.getMinutes());

                return `${newDate.getHours()}:${newDate.getMinutes().toString().padStart(2, '0')}`
            }
        },
        getLastMessageText({ messages }) {
            if (!messages.length) return 'Nessun messaggio'
            else return messages[messages.length - 1].text;
        },
        getLastMessageDate({ messages }) {
            if (!messages.length) return ''
            else return messages[messages.length - 1].date;
        }
    }
});

app.mount('#root');


// Nascondo i dropdown menu ogni qualvolta venga cliccato un punto qualsiasi della finestra che non sia un messaggio
window.onclick = function (event) {
    if (!event.target.matches('.message-item')) {
        let dropdowns = document.getElementsByClassName("message-item");

        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('active')) {
                openDropdown.classList.remove('active');
            }
        }
    }
}
