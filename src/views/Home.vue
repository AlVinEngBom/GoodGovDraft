<template>
    <AddNote v-show="showAddNote" @add-note="addNote" />
    <Notes @toggle-reminder="toggleReminder" @delete-note="deleteNote" :notes="notes" />
</template>

<script>
import Notes from '../components/Notes'
import AddNote from '../components/AddNote'

export default {
    name: 'Home',
    props: {
        showAddNote: Boolean,
    },
    components: { 
        Notes,
        AddNote,
    },
    data() {
        return {
            notes: [],
        }
    },
    methods: {
        async addNote(note) {
            const res = await fetch('api/notes', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(note)
            } )

            const data = await res.json()

            this.notes = [...this.notes, data]
        },
        async deleteNote(id) {
            if(confirm('Do you sure?')) {
                const res = await fetch(`api/notes/${id}`, {
                    method: 'DELETE'    
                })

                res.status == 200 ? (this.notes = this.notes.filter((note) => note.id !== id)) : alert('Error deleting note')
            }
        },
        async toggleReminder(id) {
            const noteToToggle = await this.fetchNotes(id)
            const updNote = {...noteToToggle, reminder:!noteToToggle.reminder}

            const res = await fetch (`api/notes/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(updNote)
            } )

            const data = await res.json()

            this.notes = this.notes.map((note) => note.id === id ? {...note, reminder: data.reminder} : note)
        },
        async fetchNotes() {
            const res = await fetch('api/notes')

            const data = await res.json()

            return data
        },
        async fetchNote(id) {
            const res = await fetch(`api/notes/${id}`)

            const data = await res.json()

            return data
        }
    },
    async created() {
        this.notes = await this.fetchNotes()
    }
}
</script>
