<template>
    <div class="container-fluid">
        <!--<button href="http://add.eventable.com/events/5bd20f9c908dc002b27d2391/5bd20f9e80b3f200622a76d9/" class="btn btn-md btn-block btn-info" target="_blank" data-key="5bd20f9c908dc002b27d2391" data-event="5bd20f9e80b3f200622a76d9">Add to Calendar</button>-->
        <a href="http://add.eventable.com/events/5bd20f9c908dc002b27d2391/5bd20f9e80b3f200622a76d9/"
           class="eventable-link btn btn-sm btn-info" target="_blank" data-key="5bd20f9c908dc002b27d2391"
           data-event="5bd20f9e80b3f200622a76d9" data-style="1"><span class="far fa-calendar-alt fa-md"></span> Add to Calendar</a>
    </div>
</template>

<style scoped>
    .container-fluid {
        padding: 1rem 0 0 0;
        background-color: #212426;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    a.eventable-link {font-weight: bold !important;}
    .fa-md {margin-right: .3rem;}
</style>