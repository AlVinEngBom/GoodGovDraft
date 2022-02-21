<template>
    <div :key="note.id" v-for="note in notes">
        <Note @toggle-reminder="$emit('toggle-reminder', note.id)" @delete-note="$emit('delete-note', note.id)" :note="note" />
    </div>
</template>

<script>
import Note from './Note'

    export default {
        name: 'Notes',
        props: {
            notes: Array,
        },
        components: {
            Note,
        },
        emits: ['delete-note', 'toggle-reminder']
    }
</script>