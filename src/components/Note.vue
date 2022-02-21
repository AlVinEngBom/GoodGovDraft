<template>
<div @dblclick="$emit('toggle-reminder', note.id)" :class="[note.reminder ? 'reminder' : '', 'note']">
    <h3>
        {{ note.text }}
        <i @click="$emit('delete-note', note.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ note.day }}</p>
</div>
</template>

<script>
export default {
    name: 'Note',
    props: {
        note: Object
    },
}
</script>

<style scope>
.fas {
  color: red;
}
.note {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.note.reminder {
  border-left: 5px solid cadetblue;
}
.note h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
